const eventsContainer = document.querySelector('.allevents-container');
const addEventBtn = document.querySelector('.add-event-btn');

const btnCloseModal = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');
const formWindow = document.querySelector('.form-window');
const addEventForm = document.querySelector('.upload');
const uploadBtn = document.querySelector('.upload__btn');

export const generateEventsMarkup = function (event) {
  return `
    <div class="single-event-container">
      <img src="${event.imgURL}" alt="${event.title}">
      <h2>${event.title}</h2>
      <p>${event.description}</p>
        <i class="fas fa-trash-alt trash-icon"></i>
    </div>`;
};

export const render = function (markup) {
  if (!eventsContainer) return;
  eventsContainer.insertAdjacentHTML('beforeend', markup);
};

const toggleWindow = function () {
  if (!overlay || !formWindow) return;
  overlay.classList.toggle('hidden');
  formWindow.classList.toggle('hidden');
};

const addHandlerShowForm = function () {
  if (!addEventBtn) return;
  addEventBtn.addEventListener('click', toggleWindow);
};
addHandlerShowForm();

const addHandlerHideForm = function () {
  if (!btnCloseModal) return;
  btnCloseModal.addEventListener('click', toggleWindow);
  overlay.addEventListener('click', toggleWindow);
};
addHandlerHideForm();

const uploadEvent = function () {
  if (!uploadBtn || !eventsContainer) return;
  uploadBtn.addEventListener('click', e => {
    e.preventDefault();
    const formData = getFormData();
    const markup = generateEventsMarkup(formData);
    eventsContainer.insertAdjacentHTML('afterbegin', markup);
    toggleWindow();
  });
};
uploadEvent();

const getFormData = function () {
  const formData = new FormData(addEventForm);
  if (!formData) return;
  const data = Object.fromEntries(formData);
  return data;
};

const deleteEvent = function () {
  if (!eventsContainer) return;
  eventsContainer.addEventListener('click', e => {
    const trashIcon = e.target.closest('.trash-icon');
    if (!trashIcon) return;
    e.target.parentElement.outerHTML = '';
  });
};
deleteEvent();
