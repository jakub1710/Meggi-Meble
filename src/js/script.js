const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__mobile');
const allNavItems = document.querySelectorAll('.nav-item');

const offerNav = document.querySelector('#offer-nav');
const subMenu = document.querySelector('.sub-menu');

const footerYear = document.querySelector('.footer__year');

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

// FOOTER
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

hamburger.addEventListener('click', showMenu);
offerNav.addEventListener('click', () => {
	subMenu.style.display = 'block';
});
