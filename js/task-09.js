function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.innerHTML = document.body.style.backgroundColor;
});

console.log(spanColor.innerHTML);
