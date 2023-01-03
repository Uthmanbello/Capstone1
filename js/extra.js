const more = document.getElementById('more');
const moreSpeakers = document.querySelector('.add-speaker-sec');
const showLess = document.querySelector('.less-info');
const showMore = document.querySelector('.more-info');
// const moreButton = document.querySelector('.sec3-link');

more.addEventListener('click', () => {
  moreSpeakers.classList.toggle('open');
  showLess.classList.toggle('open');
  showMore.classList.toggle('open');
});