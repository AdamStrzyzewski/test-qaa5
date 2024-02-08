const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredientElement = ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
};

const htmlIngredients = ingredients.map(createIngredientElement);
const list = document.querySelector('#ingredients');
list.append(...htmlIngredients);
