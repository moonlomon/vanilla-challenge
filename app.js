const Form = document.querySelector("#login");
const Name = document.querySelector("#login > input");
const Int = document.querySelector("h1");
const TOGGLE_CLASS = "hidden";

function handleEnter(event) {
  event.preventDefault();
  Form.classList.toggle(TOGGLE_CLASS);
  Int.innerText = `"Hello" ${Name.value}`;
  Int.classList.toggle(TOGGLE_CLASS);
}

Form.addEventListener("submit", handleEnter);
