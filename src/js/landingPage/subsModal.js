const overlay = document.querySelector('.overlay');
const formWindow = document.querySelector('.form-window');
const secondSection = document.querySelector('.week-events-container');
const btnCloseModal = document.querySelector('.btn--close-modal');

const revealSubsForm = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  toggleWindow();
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSubsForm, {
  root: null,
  threshold: 0.15,
});

const obsSect = function () {
  if (!secondSection) return;
  sectionObserver.observe(secondSection);
};
obsSect();

const toggleWindow = function () {
  if (!overlay || !formWindow) return;
  overlay.classList.toggle('hidden');
  formWindow.classList.toggle('hidden');
};

const addHandlerHideForm = function () {
  if (!btnCloseModal) return;
  btnCloseModal.addEventListener('click', toggleWindow());
  overlay.addEventListener('click', toggleWindow());
};
addHandlerHideForm();
