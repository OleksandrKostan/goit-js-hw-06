// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне значення
//  span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const inputEl = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

function onInput(event) {
  nameOutput.textContent = event.currentTarget.value || "Anonymous";
}

inputEl.addEventListener("input", onInput);
