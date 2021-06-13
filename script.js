const cont = document.querySelector('.container')
const slides = document.querySelectorAll('.slide')

cont.addEventListener('click', slider)

function slider(event) {
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active')
		event.target.classList.add('active')
	}
}