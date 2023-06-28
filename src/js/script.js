const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__mobile');
const allNavItems = document.querySelectorAll('.nav__mobile-item');

const offerNav = document.querySelector('#offer-nav');
const subMenu = document.querySelector('.nav__sub');

const pictures = document.querySelector('.picture');
const pictureBg = document.querySelector('.picture__bg');

let bannerImage = document.querySelector('#bannerImage');

const footerYear = document.querySelector('.footer__year');

const contactHeader = document.querySelectorAll('.contact__header');
const contactContent = document.querySelector('.content');

// NAV
const showMenu = () => {
	navMobile.classList.toggle('active');
	hamburger.classList.toggle('is-open');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('active');
			hamburger.classList.remove('is-open');
		});
	});
};

// SUB MENU
const showSubMenu = () => {
	subMenu.classList.toggle('active');
};

// async function postData(url = '', data = {}) {
// 	// Default options are marked with *
// 	const response = await fetch(url, {
// 		method: 'GET',
// 		mode: 'cors',
// 		cache: 'no-cache',
// 		credentials: 'same-origin',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		redirect: 'follow',
// 		referrerPolicy: 'no-referrer',
// 	});
// 	return response.json();
// }

// postData('https://shopapi-npzh.onrender.com/api/v1/typeProducts', {
// 	answer: 42,
// })
// 	.then((data) => {
// 		data.forEach(async (element) => {
// 			const _id = element._id;
// 			const name = element.name;
// 			const description = element.description;
// 			const url = element.url;
// 			const isActive = element.isActive;
// 			// console.log(name);

// 			const liList = document.createElement('li');
// 			liList.classList = 'nav__desktop-item';

// 			const aList = document.createElement('a');
// 			aList.innerHTML = name;
// 			aList.href = 'fotele.html?name=' + _id;

// 			liList.appendChild(aList);
// 			document.getElementById('nav__desktop').appendChild(liList);
// 		});
// 		let search = window.location.search;

// 		search = search.substring(6);
// 		return search;
// 	})
// 	.then((data) => {
// 		const sectionFurnitureTitle = document.createElement('h2');
// 		sectionFurnitureTitle.classList = 'section-title';

// 		const aFurniture = document.createElement('a');
// 		aFurniture.href = '';

// 		const furnitureItem = document.createElement('div');
// 		furnitureItem.classList = 'furnitures__item';

// 		const furnituresItemPhoto = document.createElement('div');
// 		furnituresItemPhoto.classList = 'furnitures__item-photo';

// 		const imgFurniture = document.createElement('img');
// 		imgFurniture.src = '';

// 		const furnituresItemInfo = document.createElement('div');
// 		furnituresItemInfo.classList = 'furnitures__item-info';

// 		const furnitureTitle = document.createElement('h4');
// 		furnitureTitle.classList('furniture-title');

// 		document
// 			.getElementById('wrapper-furniture')
// 			.appendChild(sectionFurnitureTitle);
// 		aFurniture.appendChild(furnitureItem);
// 		furnitureItem.appendChild(furnituresItemPhoto);
// 		furnituresItemPhoto.appendChild(imgFurniture);
// 		furnitureItem.appendChild(furnituresItemInfo);
// 		furnituresItemInfo.appendChild(furnitureTitle);
// 	})
// 	.then((data) => {
// 		postData('https://shopapi-npzh.onrender.com/api/v1/products', {
// 			answer: 42,
// 		}).then((data) => {
// 			console.log(data);
// 		});
// 	});

// FOOTER
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

hamburger.addEventListener('click', showMenu);
//offerNav.addEventListener('click', showSubMenu)
