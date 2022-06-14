const maxNumber = document.querySelector("#max-number > input");
const choseNumber = document.querySelector("#chose-number > input:first-child");
const clickNumber = document.querySelector("#chose-number > input:last-child");
const you = document.querySelector("#you-and-machine > span:first-child");
const machine = document.querySelector("#you-and-machine > span:last-child");
const youWin = document.querySelector("#winner > span:first-child");
const youlose = document.querySelector("#winner > span:last-child");

function handleClick() {
  event.preventDefault();
  enterArray(maxNumber);
  you.innerHTML = choseNumber.value;
  if (you.innerHTML === machine.innerHTML) {
    youWin.classList.remove("hidden");
    youlose.classList.add("hidden");
  } else {
    youWin.classList.add("hidden");
    youlose.classList.remove("hidden");
  }
}

function enterArray() {
  const randomNumber = Math.ceil(parseInt(maxNumber.value));
  localStorage.clear();
  for (i = 1; i <= randomNumber; i++) {
    localStorage.setItem(i, i);
    machine.innerHTML = Math.ceil(Math.random() * randomNumber);
  }
}

clickNumber.addEventListener("click", handleClick);
