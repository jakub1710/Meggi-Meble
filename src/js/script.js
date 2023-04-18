const hamburger = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile')

const showMenu = () => {
    navMobile.classList.toggle('active')
    hamburger.classList.toggle('is-open')
}

hamburger.addEventListener('click', showMenu)