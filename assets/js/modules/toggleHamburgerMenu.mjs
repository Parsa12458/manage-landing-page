export default function () {
  const toggleBtn = document.querySelector('.header__ham-icon');
  const navWindow = document.querySelector('.header__nav-container');

  const iconCloseUrl = new URL('../../images/icon-close.svg', import.meta.url)
    .href;
  const iconHamburgerUrl = new URL(
    '../../images/icon-hamburger.svg',
    import.meta.url
  ).href;
  toggleBtn.addEventListener('click', () => {
    // Toggle Icon
    if (toggleBtn.getAttribute('src') === iconCloseUrl) {
      toggleBtn.setAttribute('src', iconHamburgerUrl);
    } else {
      toggleBtn.setAttribute('src', iconCloseUrl);
    }

    // Show/Hide the navigation
    navWindow.classList.toggle('hidden');
  });
}
