import { emptyInputValues } from '../helper.js';

const overlay = document.querySelector('.overlay');
const formWindow = document.querySelector('.form-window');
const secondSection = document.querySelector('.week-events-container');
const btnCloseModal = document.querySelector('.btn--close-modal');
const sendBtn = document.querySelector('.upload__btn');

const inputName = document.querySelector('.name');
const inputLastName = document.querySelector('.lastName');
const inputPhone = document.querySelector('.phone');
const inputEmail = document.querySelector('.email');

/**
 * A function that observe an intersection within a section and the viewport when the user is scrolling
 * @param {array} entries
 * @param {object} observer
 */
const revealSubsForm = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  toggleWindow();
  observer.unobserve(entry.target);
};

// An observer object used to handle the observe of the intersection. Here is set the intersection ratio
const sectionObserver = new IntersectionObserver(revealSubsForm, {
  root: null,
  threshold: 0.15,
});

/**
 * A function where is set the section to be observed for the intersection
 */
export const obsSect = function () {
  if (!secondSection) return;
  sectionObserver.observe(secondSection);
};

/**
 * A function to toggle the hidden class of the subscription modal form
 */
const toggleWindow = function () {
  if (!overlay || !formWindow) return;
  overlay.classList.toggle('hidden');
  formWindow.classList.toggle('hidden');
};

/**
 * A function to handle the clicks on the icon or the outside of the modal to close the modal form
 */
export const addHandlerHideForm = function () {
  if (!inputName || inputLastName || !inputPhone || !inputEmail) return;
  if (!btnCloseModal) return;
  btnCloseModal.addEventListener('click', toggleWindow);
  overlay.addEventListener('click', toggleWindow);
  emptyInputValues(inputName, inputLastName, inputPhone, inputEmail);
};

/**
 * A function to handle the clicks on the modal form send button
 */
export const sendBtnHandler = function () {
  if (!sendBtn) return;
  sendBtn.addEventListener('click', toggleWindow);
  emptyInputValues(inputName, inputLastName, inputPhone, inputEmail);
};
