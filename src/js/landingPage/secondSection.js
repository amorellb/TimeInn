import { sortByDate } from '../helper.js';

const secondSection = document.querySelector('.week-events-container');
let eventNum = 0;

/**
 * A function that set an event's img as the background of the section
 * @param {array} events
 * @param {integer} posNum
 */
export const generateImgBkg = function (events, posNum = 0) {
  if (!secondSection) return;
  secondSection.style.backgroundImage = `url(${events[posNum].imgURL})`;
};

/**
 * A function that given the array of events and a position number into the array, will return
 * the object of this position
 * @param {array} events
 * @param {integer} posNum
 * @returns A string of the html of the section to render
 */
export const generateInfoMarkup = function (events, posNum = 0) {
  const nearEvents = sortByDate(events, events[posNum].dates[0]).slice(0, 3);
  const firstDate = new Date(nearEvents[posNum].dates[0]).toLocaleDateString();
  const lastDate = new Date(
    nearEvents[posNum].dates[nearEvents[posNum].dates.length - 1]
  ).toLocaleDateString();
  const eventDate = `<p class="week-event-dates">${firstDate}</p>`;
  const eventDates = `<p class="week-event-dates">${firstDate} - 
  ${lastDate}</p>`;
  return `<div class="week-event-info">
            <button class="btn slider-btn slider-btn-right"><i class="fas fa-chevron-right"></i></button>
            <button class="btn slider-btn slider-btn-left"><i class="fas fa-chevron-left"></i></button>
            <button class="btn all-events-btn">All events</button>
            <p class="week-event-type">${nearEvents[posNum].type}</p>
            <h1 class="week-event-title">${nearEvents[posNum].title}</h1>
            <p class="week-event-author">${nearEvents[posNum].author}</p>
            ${nearEvents[posNum].dates.length === 1 ? eventDate : eventDates}
            <button class="btn tickets-btn week-tickets-btn" href="event.html" id="toCalendar">Tickets</button>
          </div>`;
};

/**
 * A function to render the event data into the section
 * @param {string} markup
 */
export const render = function (markup) {
  if (!secondSection || !markup) return;
  secondSection.insertAdjacentHTML('afterbegin', markup);
};

/**
 * A section to handle the clicks on the arrow buttons to switch between the events of the section. It also handle
 * the click on the buttons used to navigate to the all events page and the event page
 * @param {array} events
 */
export const displayEventHandler = function (events) {
  if (!secondSection) return;
  secondSection.addEventListener('click', e => {
    e.preventDefault();
    const btn = e.target.closest('.btn');
    if (!btn) return;
    if (btn.classList.contains('slider-btn-right')) {
      renderNextEvent(events);
    } else if (btn.classList.contains('slider-btn-left')) {
      renderPrevEvent(events);
    } else if (btn.classList.contains('all-events-btn')) {
      window.location.replace('all-events.html');
    } else if (btn.classList.contains('week-tickets-btn')) {
      window.location.replace('event.html');
    }
  });
};

/**
 * A function to render the next event when the right arrow button is clicked
 * @param {array} events
 */
const renderNextEvent = function (events) {
  if (eventNum >= 2) return;
  secondSection.innerHTML = '';
  eventNum += 1;
  render(generateImgBkg(events, eventNum));
  render(generateInfoMarkup(events, eventNum));
};

/**
 * A function to render the previous event when the left arrow button is clicked
 * @param {array} events
 */
const renderPrevEvent = function (events) {
  if (eventNum === 0) return;
  secondSection.innerHTML = '';
  eventNum -= 1;
  render(generateImgBkg(events, eventNum));
  render(generateInfoMarkup(events, eventNum));
};
