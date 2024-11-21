const open_menu = document.querySelector(".menu_btn"),
mobile_menu = document.querySelector('.insure-mobile-menu')

let menuOpen = false;
open_menu.addEventListener("click", () => {
  if (!menuOpen) {
    menuOpen = true;
    mobile_menu.classList.add('active')
    open_menu.innerHTML = ` <img src="images/icon-close.svg" alt="icon" />`;
  } else {
    open_menu.innerHTML = ` <img src="images/icon-hamburger.svg" alt="icon" />`;
    mobile_menu.classList.remove('active')
    menuOpen = false;
  }
});