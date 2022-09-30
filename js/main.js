const slider = document.getElementById('theme-slider');

slider.addEventListener('change', () => {
	const theme = slider.value;
	console.log(slider.value);
	switch (theme) {
		case '1':
			setTheme('blue');
			break;
		case '2':
			setTheme('white');
			break;
		case '3':
			setTheme('purple');
			break;
		default:
			return;
	}
});

const setTheme = (theme) => (document.documentElement.className = theme);
