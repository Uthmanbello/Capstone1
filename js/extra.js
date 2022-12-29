const more = document.getElementById('more');
const moreSpeakers = document.querySelector('.add-speaker-sec');
// const moreButton = document.querySelector('.sec3-link');

more.addEventListener("click", () => {
    moreSpeakers.classList.toggle('open');  
});