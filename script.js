//ALL the JavaScript code in this file is my own.

//However I did take some inspiration online for the menu but i customized it:
//https://codepen.io/ljc-dev/pen/zYoqbrN


// MENU OPEN/CLOSE/CLICK
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const sideNav = document.querySelector(".sideNav");
const overlay = document.querySelector(".overlay");
const menuX = document.querySelector(".menuX");

menuItems.forEach(menuItem => {
  //get each item in the menu (li) and check if one was clicked
  menuItem.addEventListener("click", toggleMenu);
})

//add eventlisteners to the menu buttons and to the overlay thats greys out the background
hamburger.addEventListener("click", toggleMenu);
menuX.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

//toggles the menu opening and the overlay appearing on top of the background
function toggleMenu() {
  overlay.classList.toggle("showOverlay");
  sideNav.classList.toggle("showNav");
}

//LIGHTBOX OPEN/CLOSE
// lb= lightbox
const lbImgs = document.querySelectorAll(".artworkImg");


lbImgs.forEach(lbImg => {
  console.log(lbImg.classList.contains('is-selected'));
  lbImg.addEventListener("click", function(evt) {
    let imgSlected= evt.target;
    //open the original img in a new tab
    window.open(imgSlected.src, '_blank');
  });
})

//As for the carousel, I used a library called flickity and customized it to fit my website's look. I also added a few functions to it that you will find below.

//POPUP WITH ARTIST INFOS
//everything here is my original code
const popUps = document.querySelectorAll(".popUp");
const names = document.querySelectorAll("h3");
const popUpNames = document.querySelectorAll("h2");
const overlayPopUp=document.querySelector(".overlayPopUp");
const closeButtons=document.querySelectorAll(".close");

names.forEach(name => {
  name.addEventListener("click", function (evt) {
    let nameParent = name.parentNode;
    //go up in the parent until the gallery is found, once it is, verify if it has the class is-selected
    //this is allow the user to open the popup only if they're on the artist's image on the carousel
    while (!nameParent.classList.contains('gallery-cell')) {
      nameParent = nameParent.parentNode;
    }
    if (nameParent.classList.contains('is-selected')) {

      popUpNames.forEach(popUpName => {
        //verify if what the user clicked and if it corresponds to one of the popUps
        if (popUpName.innerHTML === evt.target.innerHTML) {
          let parent = popUpName.parentNode;

          //go up in the parent until the popUp is found, once it is, toggle its visibility
          while (!parent.classList.contains('popUp')) {
            parent = parent.parentNode;
            parent.classList.toggle("show");
            overlayPopUp.classList.toggle("showOverlay");
            //verify if the user clicks outside the popup to close it and remove the overlay
            overlayPopUp.addEventListener("click", function(){
              overlayPopUp.classList.remove("showOverlay");
              parent.classList.remove("show");
            });
            //do the same for when the user clicks the X button to close the popup
            closeButtons.forEach(closeButton => {
              closeButton.addEventListener("click", function(){
                overlayPopUp.classList.remove("showOverlay");
                parent.classList.remove("show");
              })
            });
            // console.log(parent);
          }
        }
      });
    }

  })
});





