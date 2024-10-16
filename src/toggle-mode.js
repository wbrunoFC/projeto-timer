let darkMode = true;
const buttonToggle = document.querySelector('.toggle-mode');

buttonToggle.addEventListener('click', () => {
	document.documentElement.classList.toggle('light');
});
