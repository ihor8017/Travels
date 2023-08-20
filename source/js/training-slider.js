import Swiper from './vendor/swiper-bundle.js';
const trainingWrapper = document.querySelector('.training__wrapper');
const trainingSlides = document.querySelectorAll('.training__slide');
const trainingNavigation = document.querySelector('.training__navigation');
const training = document.querySelector('.training')

const trainingSlider = () => {
  training.classList.remove('no-js');
  trainingNavigation.classList.add('swiper-navigation')
  trainingWrapper.classList.add('swiper-wrapper');
  trainingSlides.forEach(element => {
    element.classList.add('swiper-slide');
    element.classList.remove('training__slide');
  });
const slider = new Swiper('.training__slider', {
  // Default parameters
  loop: false,
  navigation: {
    nextEl: '.training__button-next',
    prevEl: '.training__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})

slider;

};

export default trainingSlider;
