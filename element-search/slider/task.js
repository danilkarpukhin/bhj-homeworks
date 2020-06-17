let current = 0;
const slides = Array.from(document.querySelectorAll('.slider__item'));
const arrows = document.querySelectorAll('.slider__arrow');

const showSlides = function(){
  if (this.classList.contains('slider__arrow_next')) {
    slides[current].className = 'slider__item';
    current++;
    if (current >= slides.length) {
    	current = 0;
    }
    slides[current].className = 'slider__item slider__item_active';
  } else {
    slides[current].className = 'slider__item';
    current--;
  	if (current < 0) {
  		current = slides.length - 1;
  	}
  	slides[current].className = 'slider__item slider__item_active';
    }
}


for( let i = 0; i<arrows.length; i++) {
  arrows[i].onclick = showSlides;
}