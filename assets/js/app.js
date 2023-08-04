import toggleHamburgerMenu from './modules/toggleHamburgerMenu.mjs';
import revealSection from './modules/revealSections.mjs';
import checkValidation from './modules/checkValidation.mjs';

const allSections = document.querySelectorAll('.section');
const form = document.querySelector('.footer__form');

const init = function () {
  revealSection(allSections);
  toggleHamburgerMenu();
  form.addEventListener('submit', checkValidation);
};
init();
