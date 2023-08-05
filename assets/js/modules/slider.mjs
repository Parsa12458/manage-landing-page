import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export default new Swiper('.swiper', {
  direction: 'horizontal',

  // Infinite loop
  loop: true,

  // Grab cursor
  grabCursor: true,

  // Pagination
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} dot ${
        index === this.realIndex ? 'dot--active' : ''
      }"></span>`;
    },
  },

  on: {
    paginationRender: function () {
      const bullets = document.querySelectorAll('.swiper-pagination .dot');
      bullets.forEach((bullet, index) => {
        if (index === this.realIndex) {
          bullet.classList.add('dot--active');
        } else {
          bullet.classList.remove('dot--active');
        }
      });
    },
  },
});
