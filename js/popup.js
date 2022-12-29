const popup = document.querySelector('.popup');
const join = document.querySelector('.join-btn');

join.addEventListener('click', () => {
    popup.classList.remove('mob-none');
});

const btnClosePopup = document.querySelector('.popup-close');
btnClosePopup.addEventListener('click', () => {
    popup.classList.add('mob-none');
})