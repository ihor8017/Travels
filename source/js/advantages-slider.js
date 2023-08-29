import Swiper from './vendor/swiper-bundle.js';
const advantagesWrapper = document.querySelector('.advantages__slider-wrapper');
const advantagesSlides = document.querySelectorAll('.advantages__slide');
const advantagesNavigation = document.querySelector('.advantages__navigation');
const advantages = document.querySelector('.advantages');

const advantagesSlider = () => {
  advantages.classList.remove('no-js');
  advantagesNavigation.classList.add('swiper-navigation')
  advantagesWrapper.classList.add('swiper-wrapper');

  advantagesSlides.forEach(element => {
    element.classList.add('swiper-slide');
  });
  let swiper;
  let init;

  function swiperMode() {
      let tablet = window.matchMedia('(min-width: 0px) and (max-width: 1199px)');
      let desktop = window.matchMedia('(min-width: 1200px)');

        if(desktop.matches) {
          if (!init) {
            init = true;
            swiper = new Swiper('.advantages__slider', {
              loop: true,
              slidesPerView: 3,
              spaceBetween: 30,
              initialSlide: 1,
              navigation: {
                nextEl: '.advantages__button-next',
                prevEl: '.advantages__button-prev',
              },
            });
          }
        }

        else if(tablet.matches && swiper !== undefined) {
            swiper.destroy();
            init = false;
        }
  }

  window.addEventListener('load', () => {
    swiperMode();
  });

  window.addEventListener('resize', () => {
      swiperMode();
  });

}

export default advantagesSlider;
