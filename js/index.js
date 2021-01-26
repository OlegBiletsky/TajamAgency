let navbar = document.getElementById("navbar");
let hamburger_button = document.getElementById("hamburger-button");

hamburger_button.onclick = toggleHamburger;

function toggleHamburger(){
    navbar.classList.toggle("showNav");
}




let menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach( 
  function(e) { 
    e.addEventListener("click", toggleHamburger) 
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