const hamburger = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile')
const allNavItems = document.querySelectorAll('.nav-item')

const footerYear = document.querySelector('.footer__year');

const showMenu = () => {
    navMobile.classList.toggle('active')
    hamburger.classList.toggle('is-open')

    allNavItems.forEach((item) => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('active')
            hamburger.classList.remove('is-open')
        })
    })
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

hamburger.addEventListener('click', showMenu)