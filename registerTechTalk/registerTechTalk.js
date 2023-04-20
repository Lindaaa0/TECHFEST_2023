const sidebar = document.getElementsByClassName('offcanvas')[0];

const burgerButton = document.getElementById('burger-button');
burgerButton.addEventListener('click', () => {
	sidebar.classList.remove('left-[100vw]');
	sidebar.classList.add('left-0');
})

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', () => {
	sidebar.classList.add('left-[100vw]');
	sidebar.classList.remove('left-0');
})