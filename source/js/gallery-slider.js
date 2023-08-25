import Swiper from './vendor/swiper-bundle.js';
const galleryWrapper = document.querySelector('.gallery__slider-wrapper');
const gallerySlides = document.querySelectorAll('.gallery__slide');
const galleryNavigation = document.querySelector('.gallery__navigation');
const gallery = document.querySelector('.gallery')

const gallerySlider = () => {
  gallery.classList.remove('no-js');
  galleryNavigation.classList.add('swiper-navigation')
  galleryWrapper.classList.add('swiper-wrapper');
  gallerySlides.forEach(element => {
    element.classList.add('swiper-slide');
    element.classList.remove('gallery__slide');
  });
const slider = new Swiper('.gallery__slider', {
  // Default parameters
  slidesPerView: "auto",
  spaceBetween: 5,
  initialSlide: 2,
  centeredSlides: true,
  loop: false,
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      autoHeight: true,
      initialSlide: 0,
      centeredSlides: false,
    },
    768: {
      initialSlide: 0,
      centeredSlides: false,
    },
    1200: {
      spaceBetween: 5,
      initialSlide: 2,
      centeredSlides: true,
    }
  }

})

slider;

};

export default gallerySlider;
