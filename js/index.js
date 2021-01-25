let navbar = document.getElementById("navbar");
let ham = document.getElementById("hamburger-button");

function toggleHamburger(){
    navbar.classList.toggle("showNav");
    ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger);


let menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)

/*
function checkToggle(e){
  var itemClicked = e.target
  if (itemClicked.classList.contains("menuLink")) {
    toggleHamburger()
  }
}
navbar.addEventListener("click", checkToggle)
*/