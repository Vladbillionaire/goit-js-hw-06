const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector('#ingredients')


const elements = ingredients.map(ingredient => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  
  return listEl;
})

list.append(...elements);