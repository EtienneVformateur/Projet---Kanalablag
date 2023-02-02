const displayJoke = () => {
  const cate = categorieSelect.value;
  fetch(`https://api.blablagues.net/?rub=blagues&cat=${cate}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let content = data.data.content;
      console.log(content);
      question.textContent = content.text_head;
      reponse.textContent =
        content.text_hidden != "" ? content.text_hidden : content.text;
    });
};
document.body.addEventListener("click", displayJoke);

const displayCategories = () => {
  fetch(`https://api.blablagues.net/?list_cat`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const categories = Object.keys(data.blagues);
      for (let index = 0; index < categories.length; index++) {
        const option = document.createElement("option");
        option.value = categories[index];
        option.innerHTML =
          categories[index][0].toUpperCase() + categories[index].slice(1);
        categorieSelect.appendChild(option);
      }
    });
};
displayCategories();
