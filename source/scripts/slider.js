const slider = document.querySelector('.example__slider');
const range = document.querySelector('.slider__range-js');
<<<<<<< HEAD

=======
>>>>>>> bba61ac93569807b1aee3ea99045fc99fc2fa7aa
range.addEventListener('input', () => {
  slider.style.setProperty('--value', `${range.value }%`);
});
