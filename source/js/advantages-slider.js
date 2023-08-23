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
  let slider;
  let init;

  function swiperMode() {
      let mobile = window.matchMedia('(min-width: 0px) and (max-width: 769px)');
      let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
      let desktop = window.matchMedia('(min-width: 1200px)');

          if(desktop.matches) {
            if (!init) {
                init = true;

            slider = new Swiper('.advantages__slider', {
              // Default parameters

              navigation: {
                nextEl: '.advantages__button-next',
                prevEl: '.advantages__button-prev',
              },
              breakpoints: {
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  loop: false,
                  initialSlide: 1
                  }
              }
              });
              }
          }

          else if(tablet.matches && slider !== undefined) {
            slider.destroy();
            init = false;
        }

        // Disable (for desktop)
        else if(mobile.matches && slider !== undefined) {
            slider.destroy();
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
