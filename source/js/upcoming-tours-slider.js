import Swiper from './vendor/swiper-bundle.js';
const upcomingWrapper = document.querySelector('.upcoming-tours__wrapper');
const upcomingSlides = document.querySelectorAll('.upcoming-tours__slide');
const upcomingNavigation = document.querySelector('.upcoming-tours__navigation');


const upcomingSlider = () => {
  upcomingNavigation.classList.add('swiper-navigation')
  upcomingWrapper.classList.add('swiper-wrapper');
  upcomingSlides.forEach(element => {
    element.classList.add('swiper-slide');
    element.classList.remove('upcoming-tours__slide');
  });
const slider = new Swiper('.upcoming-tours__slider', {
  // Default parameters
  loop: false,
  navigation: {
    nextEl: '.upcoming-tours__button-next',
    prevEl: '.upcoming-tours__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})

slider;

};

export default upcomingSlider;
