const dayEventSection = document.querySelector('.day-events-container');

export const generateVideoMarkup = function (events) {
  return `<video class="day-event-video" autoplay="autoplay" loop="loop" muted="muted">
            <source src="${events[0].videoURL}" type="video/mp4">
          </video>`;
};

export const generateInfoMarkup = function (events) {
  const firstDate = new Date(events[0].dates[0]).toLocaleDateString();
  const lastDate = new Date(
    events[0].dates[events[0].dates.length - 1]
  ).toLocaleDateString();
  return `
    <div class="day-event-info">
      <h1 class="day-event-title">${events[0].title}</h1>
      <p class="day-event-type">${events[0].type}</p>
      <p class="day-event-dates">${firstDate} - 
      ${lastDate}</p>
      <button class="tickets-btn day-tickets-btn" href="event.html">Tickets</button>
    </div>`;
};

export const render = function (markup) {
  if (!dayEventSection) return;
  dayEventSection.insertAdjacentHTML('beforeend', markup);
};

const loadEventPage = function () {
  if (!dayEventSection) return;
  dayEventSection.addEventListener('click', e => {
    const btn = e.target.closest('.day-tickets-btn');
    if (!btn) return;
    window.location.replace('event.html');
  });
};
loadEventPage();
