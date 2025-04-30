import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';

const images = [image1, image2, image3, image4, image5, image6];
const MAX_IMAGES = images.length;
let currentIndex = 0;

const buttonLeft = document.querySelector('#btn-left');
const buttonRight = document.querySelector('#btn-right');
const previousSlide = document.querySelector('.slide.previous');
const nextSlide = document.querySelector('.slide.next');
const currentSlide = document.querySelector('.slide.current');

function getImage(index) {
  if (index < 0) return images[MAX_IMAGES + index];
  if (index >= MAX_IMAGES) return images[index % MAX_IMAGES];
  return images[index];
}

function setupCarousel() {
  previousSlide.querySelector('img').src = getImage(currentIndex - 1);
  currentSlide.querySelector('img').src = getImage(currentIndex);
  nextSlide.querySelector('img').src = getImage(currentIndex + 1);
}

setupCarousel();

buttonLeft.addEventListener('click', () => {
  currentIndex -= 1;
  if (currentIndex < 0) currentIndex = MAX_IMAGES - 1;
  setupCarousel();
});

buttonRight.addEventListener('click', () => {
  currentIndex += 1;
  if (currentIndex >= MAX_IMAGES) currentIndex = 0;
  setupCarousel();
});
