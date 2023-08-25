import Swiper from './vendor/swiper-bundle.js';
const reviewsWrapper = document.querySelector('.reviews__wrapper');
const reviewsSlides = document.querySelectorAll('.reviews__slide');
const reviewsNavigation = document.querySelector('.reviews__navigation');
const reviews = document.querySelector('.reviews')

const reviewsSlider = () => {
  reviews.classList.remove('no-js');
  reviewsNavigation.classList.add('swiper-navigation')
  reviewsWrapper.classList.add('swiper-wrapper');
  reviewsSlides.forEach(element => {
    element.classList.add('swiper-slide');
    element.classList.remove('reviews__slide');
  });
const slider = new Swiper('.reviews__slider', {
  // Default parameters
  loop: false,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
})

slider;

};

export default reviewsSlider;
