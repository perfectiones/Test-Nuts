// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const block = document.querySelector('.mission__body .text');
const block2 = document.querySelector('.mission__body .steps');
const blockTop = block.offsetTop;
const blockTop2 = block2.offsetTop;
const block3 = document.querySelector('.bottom');
const blockTop3 = block3.offsetTop;
const block4 = document.querySelector('.footer');
const blockTop4 = block4.offsetTop;

const burgerDiv = document.querySelector(".header__burger");

burgerDiv.addEventListener('click', () => {
  document.querySelector(".header__mob").classList.toggle("active");
  burgerDiv.classList.toggle("active");
  document.querySelector("body").classList.toggle("lock")
})

document.addEventListener('scroll', () => {
  if (window.scrollY > blockTop4 - window.innerHeight / 2) {
    block4.classList.add('visible');
  }
});

document.addEventListener('scroll', () => {
  if (window.scrollY > blockTop3 - window.innerHeight / 2) {
    block3.classList.add('visible');
  }
});

document.addEventListener('scroll', () => {
  if (window.scrollY > blockTop - window.innerHeight / 2) {
    block.classList.add('visible');
  }
});

document.addEventListener('scroll', () => {
    if (window.scrollY > blockTop2 - window.innerHeight / 2) {
        block2.classList.add('visible');
    }
  });
