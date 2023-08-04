export default function (e) {
  e.preventDefault();
  const errorMsg = document.querySelector('.footer__form-error');
  const input = document.querySelector('.footer__input');

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;

  if (!input.value === '' || !emailRegex.test(input.value)) {
    errorMsg.textContent = 'Please insert a valid email.';
    errorMsg.style.color = 'var(--bright-red)';
    input.classList.add('footer__input--error');
  } else {
    input.classList.remove('footer__input--error');
    errorMsg.style.color = 'green';
    errorMsg.textContent = 'Email Submitted!';
    input.value = '';
    input.blur();
    setTimeout(() => {
      errorMsg.style.display = 'none';
    }, 2000);
  }
  errorMsg.style.display = 'block';
}
