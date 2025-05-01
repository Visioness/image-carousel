const slides = Array.from(document.querySelectorAll('.slide'));
const previousButton = document.querySelector('#btn-left');
const nextButton = document.querySelector('#btn-right');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

function createDots() {
  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = i;
    if (i === currentIndex) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });
}

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.className = 'slide';
    if (i === currentIndex) {
      slide.classList.add('active');
    } else if (i === (currentIndex - 1 + slides.length) % slides.length) {
      slide.classList.add('previous');
    } else if (i === (currentIndex + 1) % slides.length) {
      slide.classList.add('next');
    }

    dotsContainer.querySelector('.dot.active').classList.remove('active');
    dotsContainer
      .querySelector(`.dot[data-index='${currentIndex}']`)
      .classList.add('active');
  });
}

function getNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

function getPreviousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

previousButton.addEventListener('click', () => {
  getPreviousSlide();
});

nextButton.addEventListener('click', () => {
  getNextSlide();
});

dotsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('dot')) {
    currentIndex = parseInt(event.target.dataset.index);
    updateSlides();
  }
});

createDots();
updateSlides();
setInterval(getNextSlide, 5000);
