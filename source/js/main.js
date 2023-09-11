import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  function setTabindexes(slider) {
    let sliderElement = slider.wrapperEl;
    let AllInteractiveElements = sliderElement.querySelectorAll('a, button, iframe');
    AllInteractiveElements.forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
    let slides = sliderElement.querySelectorAll('.swiper-slide');
    slides.forEach((element, index) => {
      if (index === slider.activeIndex) {
        let interractivElementInActive = element.querySelectorAll('a, button, iframe');
        interractivElementInActive.forEach((item) => {
          item.setAttribute('tabindex', '0');
        });
      }
    });
  }

  function renderIframe(slider) {
    let sliderElement = slider.wrapperEl;
    let iframes = sliderElement.querySelectorAll('iframe');
    if (isActiveVideo || isActiveAudio) {
      iframes.forEach((element) => {
        element.src = '';
      });
    }
    let slides = sliderElement.querySelectorAll('.swiper-slide');
    slides.forEach((item, index) => {
      if (index === slider.activeIndex && item.closest('iframe') && item.closest('.tour-card__audio')) {
        let audioBlock = item.querySelector('.tour-card__audio');
        audioFrame.src = audioSrc;
        audioBlock.innerHTML = '';
        audioBlock.appendChild(audioFrame);
      }
      if (isActiveAudio && !item.closest('iframe') && (item.closest('.tour-card__audio'))) {
        let audioBlock = item.querySelector('.tour-card__audio');
        audioBlock.innerHTML = '';
        audioFrame.src = '';
        audioBlock.appendChild(audioFrame);
      }
      if (item.closest('.swiper-slide-active') && item.closest('iframe') && item.closest('.tour-card__video')) {
        let videoBlock = item.querySelector('.tour-card__video');
        videoFrame.src = videoSrc;
        videoBlock.innerHTML = '';
        videoBlock.appendChild(videoFrame);
      }
      if (isActiveVideo && !item.closest('iframe') && (item.closest('.tour-card__video'))) {
        let videoBlock = item.querySelector('.tour-card__video');
        videoBlock.innerHTML = '';
        videoBlock.appendChild(videoFrame);
      }
    });
  }

  iosVhFix();

  // Modules
  // ---------------------------------


  const swiperHero = () => {
    const heroSlider = document.querySelector('.hero__slider');
    if (heroSlider) {
      const heroWrapper = document.querySelector('.hero__wrapper');
      const heroSlides = document.querySelectorAll('.hero__slide');
      heroSlides.forEach((element) => {
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
        loop: true,
        speed: 300,
        pagination: {
          el: '.hero__pagination',
          type: 'bullets',
          clickable: 'true',
        },
      });
      slider;
      setTabindexes(slider);
      renderIframe(slider);
      slider.on('slideChange', renderIframe);
      slider.on('slideChange', setTabindexes);
    } else {
      return;
    }
  };
  swiperHero();

  const upcomingSlider = () => {
    const upcomingTourSlider = document.querySelector('.upcoming-tours__slider');
    if (upcomingTourSlider) {
      const upcomingWrapper = document.querySelector('.upcoming-tours__wrapper');
      const upcomingSlides = document.querySelectorAll('.upcoming-tours__slide');
      const upcomingNavigation = document.querySelector('.upcoming-tours__navigation');
      const upcomingTours = document.querySelector('.upcoming-tours');
      upcomingTours.classList.remove('no-js');
      upcomingNavigation.classList.add('swiper-navigation');
      upcomingWrapper.classList.add('swiper-wrapper');
      upcomingSlides.forEach((element) => {
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
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
      slider;
    } else {
      return;
    }

  };
  upcomingSlider();

  const trainingSlider = () => {
    const trainerSlider = document.querySelector('.training__slider');
    if (trainerSlider) {
      const trainingWrapper = document.querySelector('.training__wrapper');
      const trainingSlides = document.querySelectorAll('.training__slide');
      const trainingNavigation = document.querySelector('.training__navigation');
      const training = document.querySelector('.training');
      training.classList.remove('no-js');
      trainingNavigation.classList.add('swiper-navigation');
      trainingWrapper.classList.add('swiper-wrapper');
      trainingSlides.forEach((element) => {
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
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
      slider;
    } else {
      return;
    }
  };

  trainingSlider();

  const reviewsSlider = () => {
    const reviewSlider = document.querySelector('.reviews__slider');
    if (reviewSlider) {
      const reviewsWrapper = document.querySelector('.reviews__wrapper');
      const reviewsSlides = document.querySelectorAll('.reviews__slide');
      const reviewsNavigation = document.querySelector('.reviews__navigation');
      const reviews = document.querySelector('.reviews');
      reviews.classList.remove('no-js');
      reviewsNavigation.classList.add('swiper-navigation');
      reviewsWrapper.classList.add('swiper-wrapper');
      reviewsSlides.forEach((element) => {
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
            spaceBetween: 30,
            autoHeight: false,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });
      slider;
    } else {
      return;
    }
  };
  reviewsSlider();

  const advantagesSlider = () => {
    let swiper;
    let init;
    function swiperMode() {
      let tablet = window.matchMedia('(min-width: 0px) and (max-width: 1199px)');
      let desktop = window.matchMedia('(min-width: 1200px)');
      if (desktop.matches) {
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
      } else if (tablet.matches && swiper !== undefined) {
        swiper.destroy();
        init = false;
      }
    }
    const advantageSlider = document.querySelector('.advantages__slider');
    if (advantageSlider) {
      const advantagesWrapper = document.querySelector('.advantages__slider-wrapper');
      const advantagesSlides = document.querySelectorAll('.advantages__slide');
      const advantagesNavigation = document.querySelector('.advantages__navigation');
      const advantages = document.querySelector('.advantages');
      advantages.classList.remove('no-js');
      advantagesNavigation.classList.add('swiper-navigation');
      advantagesWrapper.classList.add('swiper-wrapper');
      advantagesSlides.forEach((element) => {
        element.classList.add('swiper-slide');
      });

      window.addEventListener('load', () => {
        swiperMode();
      });

      window.addEventListener('resize', () => {
        swiperMode();
      });
    } else {
      return;
    }
  };
  advantagesSlider();

  const gallerySlider = () => {
    const photo = document.querySelector('.gallery__slider');
    if (photo) {
      const galleryWrapper = document.querySelector('.gallery__slider-wrapper');
      const gallerySlides = document.querySelectorAll('.gallery__slide');
      const galleryNavigation = document.querySelector('.gallery__navigation');
      const gallery = document.querySelector('.gallery');
      gallery.classList.remove('no-js');
      galleryNavigation.classList.add('swiper-navigation');
      galleryWrapper.classList.add('swiper-wrapper');
      gallerySlides.forEach((element) => {
        element.classList.add('swiper-slide');
        element.classList.remove('gallery__slide');
      });
      const slider = new Swiper('.gallery__slider', {
        // Default parameters
        slidesPerView: 'auto',
        updateOnWindowResize: true,
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
            slidesPerView: 'auto',
            spaceBetween: 5,
            autoHeight: true,
            initialSlide: 0,
            centeredSlides: false,
          },
          768: {
            updateOnWindowResize: true,
            initialSlide: 0,
            centeredSlides: false,
          },
          1200: {
            spaceBetween: 5,
            initialSlide: 2,
            centeredSlides: true,
          },
        },
      });
      slider;
    } else {
      return;
    }
  };
  gallerySlider();

  const menu = () => {
    const navigation = document.querySelector('.header__navigation');
    let desktop = window.matchMedia('(min-width: 1200px)');
    if (navigation) {
      const button = document.querySelector('.header__toggle');
      let overlays = document.querySelectorAll('.hero__overlay');
      const toggleNavigation = () => {
        navigation.classList.remove('no-js');
        button.addEventListener('click', (evt) => {
          evt.preventDefault();
          if (button.classList.contains('header__toggle--open')) {
            button.classList.add('header__toggle--closed');
            button.classList.remove('header__toggle--open');
            navigation.classList.remove('header__navigation--open');
            overlays.forEach((element) => {
              element.style.background = 'linear-gradient(143deg, rgba(15, 20, 41, 0.33) 0%, rgba(15, 20, 41, 0) 100%)';
              element.style.zIndex = '0';
            });
            document.body.style.overflow = 'visible';
          } else {
            button.classList.add('header__toggle--open');
            button.classList.remove('header__toggle--closed');
            navigation.classList.add('header__navigation--open');
            overlays.forEach((element) => {
              element.style.background = 'rgba(0, 0, 0, 0.5)';
              element.style.zIndex = '10';
            });
            document.body.style.overflow = 'hidden';
          }
        });
        window.addEventListener('resize', () => {
          if (desktop.matches) {
            overlays.forEach((element) => {
              element.style.background = 'linear-gradient(143deg, rgba(15, 20, 41, 0.33) 0%, rgba(15, 20, 41, 0) 100%)';
              element.style.zIndex = '0';
            });
            button.classList.add('header__toggle--closed');
            button.classList.remove('header__toggle--open');
            navigation.classList.remove('header__navigation--open');
            document.body.style.overflow = 'visible';
          }
        });
        const navigationList = document.querySelector('.header__navigation-list');
        navigationList.addEventListener('click', (evt) => {
          const target = evt.target;
          if (target.closest('.navigation__link')) {
            button.classList.add('header__toggle--closed');
            button.classList.remove('header__toggle--open');
            navigation.classList.remove('header__navigation--open');
            overlays.forEach((element) => {
              element.style.background = 'linear-gradient(143deg, rgba(15, 20, 41, 0.33) 0%, rgba(15, 20, 41, 0) 100%)';
              element.style.zIndex = '0';
            });
            document.body.style.overflow = 'visible';
          }
        });
      };
      toggleNavigation();
    } else {
      return;
    }
  };
  menu();

  const mapViewer = () => {
    let layer;
    let map;
    const ICON = {
      desktopIcon: L.icon({
        iconUrl: '../img/map/pin_filled.svg',
        iconSize: [48, 48], // size of the icon
        iconAnchor: [25, 45], // point of the icon which will correspond to marker's location
      }),
      tabletIcon: L.icon({
        iconUrl: '../img/map/pin_filled.svg',
        iconSize: [42, 42], // size of the icon
        iconAnchor: [21, 37], // point of the icon which will correspond to marker's location
      }),
      mobileIcon: L.icon({
        iconUrl: '../img/map/pin_filled.svg',
        iconSize: [28, 28], // size of the icon
        iconAnchor: [16, 25], // point of the icon which will correspond to marker's location
      }),
    };
    function iconMode() {
      let mobile = window.matchMedia('(min-width: 0px) and (max-width: 769px)');
      let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
      let desktop = window.matchMedia('(min-width: 1200px)');
      if (desktop.matches) {
        layer.remove();
        layer = L.marker([55.816826, 37.637276], {icon: ICON.desktopIcon}).addTo(map);
      } else if (tablet.matches) {
        layer.remove();
        layer = L.marker([55.816826, 37.637276], {icon: ICON.tabletIcon}).addTo(map);
      } else if (mobile.matches) {
        layer.remove();
        layer = L.marker([55.816826, 37.637276], {icon: ICON.mobileIcon}).addTo(map);
      }
    }
    const mapContainer = document.querySelector('#map');
    if (mapContainer) {
      map = L.map('map').setView([55.824475, 37.615238], 13);
      layer = L.marker([55.816826, 37.637276], {icon: ICON.desktopIcon}).addTo(map);
      const picture = document.querySelector('.contacts__map-container picture');
      picture.style.display = 'none';
      const displayMap = () => {
        map.scrollWheelZoom.disable();
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        window.addEventListener('load', () => {
          iconMode();
        });
        window.addEventListener('resize', () => {
          iconMode();
        });
      };
      displayMap();
    } else {
      return;
    }
  };
  mapViewer();
  let videoSrc = 'https://www.youtube.com/embed/9TZXsZItgdw?&autoplay=1';
  let audioSrc = 'https://music.yandex.ru/iframe/#track/112912322/25474374';
  let videoFrame;
  let audioFrame;
  let isActiveAudio = false;
  let isActiveVideo = false;
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();

    const playAudio = function () {
      const audioPlayer = document.querySelectorAll('.tour-card__audio');
      if (audioPlayer.length) {
        audioPlayer.forEach((item) => {
          const playButton = item.querySelector('.tour-card__play-button');
          playButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            playButton.style.display = 'none';
            const newIframe = document.createElement('iframe');
            newIframe.classList.add('video-player__audio');
            newIframe.style.display = 'block';
            newIframe.style.width = '100%';
            newIframe.style.height = '100%';
            item.style.zIndex = '6';
            newIframe.src = audioSrc;
            newIframe.title = 'Audio records';
            newIframe.insertAdjacentHTML('afterbegin', 'Слушайте <a href=\'https://music.yandex.ru/album/25474374/track/112912322\'>001. Конец фронтенда, одинаковые фреймворки и логические свойства</a> на Яндекс Музыке');
            playButton.style.display = 'none';
            item.appendChild(newIframe);
            isActiveAudio = true;
            audioFrame = newIframe;
          });
        });
      } else {
        return;
      }
    };
    playAudio();

    const playVideo = function () {
      const videoPlayer = document.querySelectorAll('.tour-card__video');
      if (videoPlayer.length) {
        videoPlayer.forEach((item) => {
          const playButton = item.querySelector('.tour-card__play-button');
          const previewer = item.querySelector('picture');
          let source = playButton.getAttribute('href');
          playButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            playButton.style.display = 'none';
            const newIframe = document.createElement('iframe');
            newIframe.classList.add('video-player__video');
            newIframe.style.display = 'block';
            newIframe.style.width = '100%';
            newIframe.style.height = '100%';
            item.style.zIndex = '6';
            newIframe.src = source;
            newIframe.title = 'YouTube video player';
            newIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            newIframe.allowFullscreen = true;
            previewer.style.display = 'none';
            item.appendChild(newIframe);
            isActiveVideo = true;
            videoFrame = newIframe;
            videoFrame.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
          });
        });
      } else {
        return;
      }
    };
    playVideo();

  });

});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
