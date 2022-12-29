const more = document.getElementById('more');
const moreSpeakers = document.querySelector('.add-speaker-sec');

more.addEventListener("click", () => {
    more.classList.toggle('open');
    moreSpeakers.classList.toggle('open');
});