let navbar = document.getElementById("navbar");
let ham = document.getElementById("hamburger-button");

function toggleHamburger(){
    navbar.classList.toggle("showNav");
    ham.classList.toggle("showClose");
    ToggleScroll();
}

ham.addEventListener("click", toggleHamburger);

let menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)




//JS for disabling scroll in mobile  

// select body
let bodyElement = document.body;
// select menu toggler
let togglerElement = document.getElementById('toggler');

// function which toggle overflow for body
function ToggleScroll() {
    if (bodyElement.style.overflow === "hidden") {
            bodyElement.style.overflow = "auto"// scroll ON
    } else {
        bodyElement.style.overflow = "hidden"//scroll OFF
    }
}