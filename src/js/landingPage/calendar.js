const dayContainer = document.querySelector('.day-container');

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

export const render = function (markup) {
  if (!dayContainer) return;
  dayContainer.insertAdjacentHTML('beforeend', markup);
};

export function addEventCalendar() {
  if (!dayContainer) return;
  dayContainer.addEventListener('click', e => {
    const btn = e.target.closest('.calendar-btn');
    if (!btn) return;
    if (btn.classList.contains('calendar-empty')) return;
    if (btn.classList.contains('calendar-28'))
      window.location.assign('allevents.html');
  });
}
