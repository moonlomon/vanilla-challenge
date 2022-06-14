import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter() {
    title.innerText = "hi";
    title.style.color = colors[1];
  },
  handleMouseLeave() {
    title.innerText = "hihi";
    title.style.color = colors[2];
  },
  handleResize() {
    title.innerText = "hihihi";
    title.style.color = colors[3];
  },
  handleContextMenu() {
    title.innerText = "Do it again!";
    title.style.color = colors[4];
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
