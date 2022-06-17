const Form = document.querySelector("#login");
const Name = document.querySelector("#login > input");
const Int = document.querySelector("h1");
const TOGGLE_CLASS = "hidden";
const USERNAME_KEY = "userName";

function handleEnter(event) {
  event.preventDefault();
  Form.classList.toggle(TOGGLE_CLASS);
  const userName = Name.value;
  inputUsername(userName);
  localStorage.setItem(USERNAME_KEY, userName);
}

function inputUsername(userName) {
  Int.innerText = `Hello ${userName}!`;
  Int.classList.toggle(TOGGLE_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  Form.classList.remove(TOGGLE_CLASS);
  Form.addEventListener("submit", handleEnter);
} else {
  inputUsername(savedUsername);
}
