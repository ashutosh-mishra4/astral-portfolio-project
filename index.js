const menu = document.querySelector('.menu')
const homeScreen = document.querySelector('.home-screen')
const workScreen = document.querySelector('.work-screen')
const contactScreen = document.querySelector('.contact-screen')
const home = document.querySelector('.home')
const work = document.querySelector('.work')
const contact = document.querySelector('.contact')
const footer = document. querySelector('footer')
const homeScreenProfile = document.querySelector('.home-screen-profile')
var viewport = window.matchMedia("(max-width: 425px)")

function displayWork() {
    workScreen.style.display = 'block'
    contactScreen.style.display = 'none'
    homeScreen.style.display = 'none'
    footer.style.display = 'block'
    homeScreenProfile.style.display = 'none'
    menu.style.margin = "7% 0 6vh"
}

function displayContact() {
    contactScreen.style.display = 'block'
    workScreen.style.display = 'none'
    homeScreen.style.display = 'none'
    footer.style.display = 'none'
    homeScreenProfile.style.display = 'none'
    menu.style.margin = "8% 0 6vh"
}
function mobileDisplayHome(viewport) {
    if (viewport.matches) { // If media query matches
        homeScreenProfile.style.display = 'block'
        homeScreen.style.display = 'block'
    } else {
        homeScreenProfile.style.display = 'none'
        homeScreen.style.display = 'block'
    }
  }
function displayHome() {   
    mobileDisplayHome();
    contactScreen.style.display = 'none'
    workScreen.style.display = 'none'
    footer.style.display = 'none'    
    menu.style.margin = "15% 0 6vh"    
}

home.addEventListener('click', displayHome)
work.addEventListener('click', displayWork)
contact.addEventListener('click', displayContact)