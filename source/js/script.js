/* в этот файл добавляет скрипты*/
import toggleNavigation from "./menu.js";
import swiperHero from "./hero-slider.js";
import playVideo from "./video.js";
import upcomingSlider from "./upcoming-tours-slider.js";
import trainingSlider from "./training-slider.js";
import reviewsSlider from "./reviews-slider.js";
import advantagesSlider from  "./advantages-slider.js";
import gallerySlider from "./gallery-slider.js";
import {Form} from './vendor/form-validate/form.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

toggleNavigation();
swiperHero();
playVideo();
upcomingSlider();
trainingSlider();
reviewsSlider();
advantagesSlider();
gallerySlider();
