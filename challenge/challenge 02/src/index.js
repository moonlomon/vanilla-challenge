const change = document.querySelector("body");

function windowResize() {
  if (change.offsetWidth > 1500) {
    change.classList.add("orange");
    change.classList.remove("blue", "purple");
  } else if (change.offsetWidth > 1000 && change.offsetWidth < 1500) {
    change.classList.add("purple");
    change.classList.remove("blue", "orange");
  } else {
    change.classList.add("blue");
    change.classList.remove("purple", "orange");
  }
}

window.addEventListener("resize", windowResize);
