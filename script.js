const infoBoxes = document.querySelectorAll('.tab');
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4;

	infoBoxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add('box-show');

		} 
		
	});
}