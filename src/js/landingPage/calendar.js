const dayContainer = document.querySelector('.day-container');

export const createCalendar = function () {
  let buttons = '';
  for (let i = 1; i <= 31; i++) {
    buttons += `<button class="calendar-btn calendar-${i}">${i}</button>`;
  }
  return buttons;
};

export const render = function (markup) {
  if (!dayContainer) return;
  dayContainer.insertAdjacentHTML('beforeend', markup);
};
