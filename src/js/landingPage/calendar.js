const dayContainer = document.querySelector('.day-container');

/**
 * A function that generates the html of the buttons of the calendar. This buttons will represent the days of the month
 * @returns A string with all the buttons that will be rendered within the calendar as the days
 */
export const createCalendar = function () {
  let buttons = '';
  for (let i = 1; i <= 35; i++) {
    if (i <= 31) {
      buttons += `<button class="calendar-btn calendar-${i}">${i}</button>`;
    } else if (i > 31) {
      buttons += `<button class="calendar-btn calendar-empty"></button>`;
    }
  }
  return buttons;
};

/**
 * A function that renders the buttons (days) of the calendar
 * @param {string} markup
 */
export const render = function (markup) {
  if (!dayContainer) return;
  dayContainer.insertAdjacentHTML('beforeend', markup);
};

/**
 * A function to handle the clicks on the buttons (days) of the calendar
 */
export function addEventCalendar() {
  if (!dayContainer) return;
  dayContainer.addEventListener('click', e => {
    const btn = e.target.closest('.calendar-btn');
    if (!btn) return;
    if (btn.classList.contains('calendar-empty')) return;
    if (btn.classList.contains('calendar-28'))
      window.location.assign('event.html');
  });
}
