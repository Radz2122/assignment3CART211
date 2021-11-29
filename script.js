// MENU OPEN/CLOSE/CLICK
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const sideNav = document.querySelector(".sideNav");
const overlay = document.querySelector(".overlay");
const menuX = document.querySelector(".menuX");

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

//LIGHTBOX OPEN/CLOSE
// lb= lightbox
const lbImgs = document.querySelectorAll(".artworkImg");

//since the classes (.is-selectted in this case) are passed onto the cells 
//and not on the images directly i have to select the cells as well
const galleryCells = document.querySelectorAll(".gallery-cell");

galleryCells.forEach(galleryCell => {
  //checking if the user is currently on the cell/image to let them click it
  galleryCell.addEventListener("click", function () {
    if (galleryCell.classList.contains('is-selected')) {
      // galleryCell.className="";
      //selecting the image that is the direct child of the gallery cell
      const artImg = galleryCell.childNodes[0];
      // artImg.style.display="none";
      // artImg.className="";
      // artImg.classList.add('lightboxAnim');
      // console.log(artImg.classList.contains('lightboxAnim'));
      // console.log("hey");
    }
  });
})

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
    //this is allow the user to open the popup only if they're on the artist's image on the carrousel
    while (!nameParent.classList.contains('gallery-cell')) {
      nameParent = nameParent.parentNode;
    }
    if (nameParent.classList.contains('is-selected')) {
      console.log("YES");

      popUpNames.forEach(popUpName => {
        //verify if what the user clicked on corresponds to one of the popUps
        if (popUpName.innerHTML === evt.target.innerHTML) {
          let parent = popUpName.parentNode;

          //go up in the parent until the popUp is found, once it is, toggle its visibility
          while (!parent.classList.contains('popUp')) {
            parent = parent.parentNode;
            parent.classList.toggle("show");
            overlayPopUp.classList.toggle("showOverlay");
            //verify if the user lcicks outside the popup to close it and remove the overlay
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





