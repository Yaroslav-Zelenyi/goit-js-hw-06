const inputValidEl = document.querySelector("#validation-input");

inputValidEl.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    inputValidEl.className = "valid";
  } else {
    inputValidEl.className = "invalid";
  }
});
