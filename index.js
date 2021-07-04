const menu = document.querySelector('.menu')
const nextButton = document.querySelector('.next-box')
const homeScreen = document.querySelector('.home-screen')
const workScreen = document.querySelector('.work-screen')
const contactScreen = document.querySelector('.contact-screen')
const home = document.querySelector('.home')
const work = document.querySelector('.work')
const contact = document.querySelector('.contact')
const footer = document. querySelector('footer')
const homeScreenProfile = document.querySelector('.home-screen-profile')
const caretHome = document.querySelector('.caret-home')
const caretWork = document.querySelector('.caret-work')
const caretContact = document.querySelector('.caret-contact')
const viewport = window.matchMedia("(max-width: 425px)")

function displayWork() {
    workScreen.style.display = 'block'
    contactScreen.style.display = 'none'
    homeScreen.style.display = 'none'
    caretWork.style.display = 'block'
    caretContact.style.display = 'none'
    caretHome.style.display = 'none'
    footer.style.display = 'block'
    homeScreenProfile.style.display = 'none'
    menu.style.margin = "10vh 0 0 "
}

function displayContact() {
    contactScreen.style.display = 'block'
    workScreen.style.display = 'none'
    homeScreen.style.display = 'none'
    caretContact.style.display = 'block'
    caretWork.style.display = 'none'
    caretHome.style.display = 'none'
    footer.style.display = 'none'
    homeScreenProfile.style.display = 'none'
    menu.style.margin = "15vh 0 0 "
}
function mobileDisplayHome(viewport) {
    if (viewport.matches) { // If media query matches
        homeScreenProfile.style.display = 'block'
        homeScreen.style.display = 'none'
        caretHome.style.top = '0.5vh'
        caretHome.style.right = '2vw'
    } else {
        homeScreenProfile.style.display = 'none'
        homeScreen.style.display = 'block'
    }
  }
function displayHome() {   
    mobileDisplayHome(viewport);
    contactScreen.style.display = 'none'
    workScreen.style.display = 'none'
    caretHome.style.display = 'block'
    caretContact.style.display = 'none'
    caretWork.style.display = 'none'
    footer.style.display = 'none'    
    menu.style.margin = "25vh 0 0"   
    homeScreenProfile.style.marginTop = "unset" 
}

home.addEventListener('click', displayHome)
work.addEventListener('click', displayWork)
contact.addEventListener('click', displayContact)
nextButton.addEventListener('click', displayWork)