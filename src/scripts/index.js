// Any code you will write for your website (in the future!) should go here
// DOM selectors

const menu = document.querySelector(".bars-menu");
const sideMenu = document.querySelector(".left-side-menu");

const switchButton = document.querySelector(".switch");

let close = false;

const openCloseMenu = () => {
  close = !close;
  if (close) {
    menu.classList.remove("x-menu");

    sideMenu.classList.add("close");
  } else {
    menu.classList.add("x-menu");
    sideMenu.classList.remove("close");
  }
};

let clicked = false;

const switchTo = () => {
  clicked = !clicked;
  if (clicked) {
    switchButton.classList.remove("fa-toggle-off");
    switchButton.classList.add("fa-toggle-on");
  } else {
    switchButton.classList.remove("fa-toggle-on");
    switchButton.classList.add("fa-toggle-off");
  }
};

menu.addEventListener("click", openCloseMenu);
switchButton.addEventListener("click", switchTo);
