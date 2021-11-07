const weekEventSection = document.querySelector('.week-events-container');

export const generateImgMarkup = function (events) {
  weekEventSection.style.backgroundImage = `url(${events[0].imgURL})`;
  console.log(events[0].imgURL);
  console.log(weekEventSection.style);
  // return `<img class="week-event-img" src="${events[0].imgURL}" alt="event">`;
};

// TODO: refactor: same function in both day and weekEvents.js
export const generateInfoMarkup = function (events) {
  return `<div class="week-event-info">
            <a class="all-events-btn" href="allEvents.html">All events</a>
            <p class="week-event-type">${events[0].type}</p>
            <h1 class="week-event-title">${events[0].title}</h1>
            <p class="week-event-author">${events[0].author}</p>
            <p class="week-event-dates">${events[0].dates[0]} - 
            ${events[0].dates[events[0].dates.length - 1]}</p>
            <a class="week-tickets-btn" href="event.html">Tickets</a>
          </div>`;
};

// TODO: refactor: same function in both day and weekEvents.js
export const render = function (markup) {
  weekEventSection.insertAdjacentHTML('afterbegin', markup);
};
