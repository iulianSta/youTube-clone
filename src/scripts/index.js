// Any code you will write for your website (in the future!) should go here
// DOM selectors

const menu = document.querySelector(".bars-menu");
const sideMenu = document.querySelector(".left-side-menu");

let close = false;

const openCloseMenu = () => {
  close = !close;
  if (close) {
    menu.classList.add("x-menu");
    sideMenu.classList.add("close");
  } else {
    menu.classList.remove("x-menu");
    sideMenu.classList.remove("close");
  }
};

menu.addEventListener("click", openCloseMenu);
