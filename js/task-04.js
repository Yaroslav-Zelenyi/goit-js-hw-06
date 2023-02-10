const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const mainValue = document.querySelector("#value");

let counterValue = 0;

btnDecrement.addEventListener("click", decrement);

btnIncrement.addEventListener("click", increment);

function decrement() {
  mainValue.textContent = counterValue -= 1;
}

function increment() {
  mainValue.textContent = counterValue += 1;
}
