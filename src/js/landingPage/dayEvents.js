const dayEventSection = document.querySelector('.day-event-container');

export const generateVideoMarkup = function (events) {
  return `<video class="day-event-video" autoplay="autoplay" loop="loop" muted="muted">
            <source src="${events[0].videoURL}" type="video/mp4">
          </video>`;
};

export const generateInfoMarkup = function (events) {
  return `<div class="day-event-info">
            <h1 class="event-title">${events[0].title}</h1>
            <p class="event-type">${events[0].type}</p>
            <p class="event-dates">${events[0].dates[0]} - 
            ${events[0].dates[events[0].dates.length - 1]}</p>
            <a class="tickets-btn" href="event.html">Tickets</a>
          </div>`;
};

export const render = function (markup) {
  dayEventSection.insertAdjacentHTML('beforeend', markup);
};
