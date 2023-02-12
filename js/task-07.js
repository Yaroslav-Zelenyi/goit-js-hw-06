const sizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

sizeControlEl.oninput = function () {
  textEl.style.fontSize = sizeControlEl.value + "px";
};
