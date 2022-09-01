// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const vegetableEl = document.querySelector("#ingredients");

const element = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const option = ingredients[i];

  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = option;

  element.push(ingredientEl);
}
vegetableEl.append(...element);

console.log(vegetableEl);

// //////////////////Варіант 2 ////////////////////////////////////////////
// const ingredientsElement = document.querySelector("#ingredients");

// const createItemEl = ingredients.map((el) => {
//   const ingredientsItemsEl = document.createElement("li");
//   ingredientsItemsEl.classList.add("item");
//   ingredientsItemsEl.textContent = el;

//   return ingredientsItemsEl;
// });

// ingredientsElement.append(...createItemEl);
// console.log(ingredientsElement);
