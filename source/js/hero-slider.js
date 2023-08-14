import Swiper from './vendor/swiper-bundle.js';

const swiperHero = new Swiper('.hero__swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.hero__pagination',
  },
});

export default swiperHero;
