import Swiper from './vendor/swiper-bundle.js';
const heroSlider = document.querySelector('.hero__slider');
const heroWrapper = document.querySelector('.hero__wrapper');
const heroSlides = document.querySelectorAll('.hero__slide');

const swiperHero = () => {
  heroSlides.forEach(element => {
    element.classList.add('swiper-slide');
    element.classList.remove('hero__slide');
  });
  heroWrapper.classList.add('swiper-wrapper');
  heroWrapper.classList.remove('hero__wrapper');
  heroSlider.classList.add('hero__swiper');
  heroSlider.classList.remove('hero__slider');
  heroSlider.classList.remove('hero__no-js');

  const slider = new Swiper('.hero__swiper', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    speed: 300,

    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  slider;
}

export default swiperHero;
