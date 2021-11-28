// MENU OPEN/CLOSE/CLICK
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const sideNav = document.querySelector(".sideNav");
const overlay = document.querySelector(".overlay");
const menuX=document.querySelector(".menuX");



menuItems.forEach(menuItem => {
  //get each item in the menu (li) and chekc if one was clicked
    menuItem.addEventListener("click", toggleHamburger);
  })
  
  //add eventlisteners to the menu buttons and to the overlay thats greys out the backgorund
  hamburger.addEventListener("click", toggleHamburger);
  menuX.addEventListener("click", toggleHamburger);
  overlay.addEventListener("click", toggleHamburger);
  
  //toggles the menu opening and the overlay appearing on top of the background
  function toggleHamburger() {
    overlay.classList.toggle("showOverlay");
    sideNav.classList.toggle("showNav");
  }


