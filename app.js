const title = document.querySelector("div > h1");

function handleTitleClick() {
  title.classList.toggle("changeColor");
}

title.addEventListener("click", handleTitleClick);
