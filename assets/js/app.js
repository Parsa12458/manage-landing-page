import toggleHamburgerMenu from './modules/toggleHamburgerMenu.mjs';
import revealSection from './modules/revealSections.mjs';

const allSections = document.querySelectorAll('.section');

const init = function () {
  revealSection(allSections);
  toggleHamburgerMenu();
};
init();
