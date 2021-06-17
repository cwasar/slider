const cont = document.querySelector('.container')
const slides = document.querySelectorAll('.slide')
const over = document.querySelector('#overlay')

cont.addEventListener('click', slider)

function slider(event) {
	console.log(event.target);
	if (!(event.target.classList.contains('active'))) {
		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove('active')
		}
		event.target.classList.add('active')

	} else if (event.target.classList.contains('active')) {
		event.target.classList.toggle('full')
		over.classList.toggle('overlay')

	}


}

