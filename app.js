const title = document.querySelector("div > h1");

function handleTitleClick() {
  title.style.color = "orange";
}

function handleTitleEnter() {
  title.innerText = "mouse here!";
}

function handleTitleLeave() {
  title.innerText = "mouse gone..";
}

function handleWindowScroll() {
  title.innerText = "Scroll faster!";
}
function handleWindowResize() {
  title.innerText = "Change size";
  document.body.style.backgroundColor = "teal";
}
function handleWindowsOffline() {
  alert("I can't connect Internet.. Please check your computer that Wifi");
}
function handleWindowOnline() {
  alert("Success connecting Internet!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleTitleEnter);
title.addEventListener("mouseleave", handleTitleLeave);
window.addEventListener("scroll", handleWindowScroll);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("offline", handleWindowsOffline);
