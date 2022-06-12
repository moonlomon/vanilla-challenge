const title = document.querySelector("div > h1");

function handleTitleClick() {
  title.style.color = "orange";
}

title.addEventListener("click", handleTitleClick);
