'use script';

let btnsModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let btnClose = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

//Adding open modal functionality to all show modal buttons
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsModal.length; i++) {
  btnsModal[i].addEventListener('click', openModal);
}

//Adding close functionality to close button
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnClose.addEventListener('click', closeModal);

//Adding close functionality to overlay area
overlay.addEventListener('click', closeModal);

//Adding Escape keypress close modal functionality
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
