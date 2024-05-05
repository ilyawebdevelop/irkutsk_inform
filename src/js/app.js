import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/inputmask.min.js";

import { Fancybox } from "./modules/fancybox.esm.js";

import "./modules/bootstrap.bundle.min.js";
import './components.js';

import AirDatepicker from 'air-datepicker';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// contentSlider
const contentSlider = document.querySelector('.contentSlider');
var mySwiperContent = new Swiper(contentSlider, {
  slidesPerView: 2,
  speed: 800,
  spaceBetween: 23,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
    },
  },
  navigation: {
    prevEl: document.querySelector('.contentSliderW .navArrowPrev'),
    nextEl: document.querySelector('.contentSliderW .navArrowNext'),
  },
});

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header .headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');
const overlay = document.querySelector('.overlay');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  overlay.classList.add('active');
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
  overlay.classList.remove('active');
});

let headerSearchBtn = document.querySelector('.headerSearchBtn');
let headerSearch = document.querySelector('.headerSearch');
let headerSearchClose = document.querySelector('.headerSearchClose');
headerSearchBtn.addEventListener('click', () => {
  headerSearch.classList.toggle('active');
});
headerSearchClose.addEventListener('click', () => {
  headerSearch.classList.toggle('active');
});

// filter show portal page
let filterBtn = document.querySelector('.filterBtn');
let filterPortal = document.querySelector('.filterPortal');
filterBtn?.addEventListener('click', () => {
  filterPortal.classList.toggle('active');
});

overlay?.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.classList.remove('active');
  menu.classList.remove('active');
  btnMenu.classList.remove('active');
  bodyEl.classList.remove('hidden');
});

// Calendar Datepicker
new AirDatepicker('#airdatepicker');
new AirDatepicker('#airdatepicker_after', {
  
});