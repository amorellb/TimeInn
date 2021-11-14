const dayEventSection = document.querySelector('.day-events-container');

export const generateVideoMarkup = function (events) {
  return `<video class="day-event-video" autoplay="autoplay" loop="loop" muted="muted">
            <source src="${events[0].videoURL}" type="video/mp4">
          </video>`;
};

// TODO: refactor: same function in both day and weekEvents.js
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
      <a class="tickets-btn day-tickets-btn" href="event.html">Tickets</a>
    </div>`;
};

// TODO: refactor: same function in both day and weekEvents.js
export const render = function (markup) {
  if (!dayEventSection) return;
  dayEventSection.insertAdjacentHTML('beforeend', markup);
};
