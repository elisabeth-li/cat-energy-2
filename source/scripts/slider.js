const slider = document.querySelector('.example__slider');
const range = document.querySelector('.slider__range-js');

range.addEventListener('input', () => {
  slider.style.setProperty('--value', `${range.value }%`);
});
