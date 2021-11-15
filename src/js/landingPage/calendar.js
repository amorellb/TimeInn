const dayContainer = document.querySelector('.day-container');

export const createCalendar = function () {
  let buttons = '';
  for (let i = 1; i <= 35; i++) {
    if (i <= 31) {
      buttons += `<button class="calendar-btn calendar-${i}">${i}</button>`;
    } else {
      buttons += `<button class="calendar-btn calendar-${i}"></button>`;
    }
  }
  return buttons;
};

export function addEventCalendar() {
  if (document.querySelector('.calendar-28')) {
    document
      .querySelector('.calendar-28')
      .addEventListener('click', function () {
        window.location.assign('allevents.html');
      });
  }
}
/* export function addEventCalendar() {
  for (let i = 1; i <= 35; i++){
    if (document.querySelector(`.calendar-${i}`)) {
      document
        .querySelector(`.calendar-${i}`)
        .addEventListener('click', function () {
          window.location.assign('event.html');
        });
    }}
  } */

export const render = function (markup) {
  if (!dayContainer) return;
  dayContainer.insertAdjacentHTML('beforeend', markup);
};
