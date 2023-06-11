const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__mobile');
const allNavItems = document.querySelectorAll('.nav__mobile-item');

const offerNav = document.querySelector('#offer-nav');
const subMenu = document.querySelector('.nav__sub');

const pictures = document.querySelector('.picture');
const pictureBg = document.querySelector('.picture__bg');

const footerYear = document.querySelector('.footer__year');

const contactHeader = document.querySelectorAll('.contact__header')
const contactContent = document.querySelector('.content')

// NAV
const showMenu = () => {
	navMobile.classList.toggle('active');
	hamburger.classList.toggle('is-open');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			// navMobile.classList.remove('active');
			hamburger.classList.remove('is-open');
		});
	});
};

// SUB MENU
const showSubMenu = () => {
	subMenu.classList.toggle('active')
}

// CONTACT 
// const infoContact = () => {
// 	contactHeader.forEach(item) => {
// 		item.addEventListener('click', () => {
// 			contactContent.classList.add('active-header')
// 		} )
// 	}
// }


// FOOTER
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

hamburger.addEventListener('click', showMenu);
offerNav.addEventListener('click', showSubMenu)
// contactHeader.addEventListener('click', infoContact)
