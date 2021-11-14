const weekEventSection = document.querySelector('.week-events-container');
let eventNum = 0;

export const generateImgBkg = function (events, posNum = 0) {
  if (!weekEventSection) return;
  weekEventSection.style.backgroundImage = `url(${events[posNum].imgURL})`;
};

export const generateInfoMarkup = function (events, posNum = 0) {
  const eventDate = `<p class="week-event-dates">${events[posNum].dates[0]}</p>`;
  const eventDates = `<p class="week-event-dates">${events[posNum].dates[0]} - 
  ${events[posNum].dates[events[posNum].dates.length - 1]}</p>`;
  return `<div class="week-event-info">
            <button class="slider-btn slider-btn-right"><i class="fas fa-chevron-right"></i></button>
            <button class="slider-btn slider-btn-left"><i class="fas fa-chevron-left"></i></button>
            <a class="all-events-btn" href="allEvents.html">All events</a>
            <p class="week-event-type">${events[posNum].type}</p>
            <h1 class="week-event-title">${events[posNum].title}</h1>
            <p class="week-event-author">${events[posNum].author}</p>
            ${events[posNum].dates.length === 1 ? eventDate : eventDates}
            <a class="tickets-btn week-tickets-btn" href="event.html">Tickets</a>
          </div>`;
};

export const render = function (markup) {
  if (!weekEventSection) return;
  weekEventSection.insertAdjacentHTML('afterbegin', markup);
};

export const displayEventHandler = function (events) {
  if (!weekEventSection) return;
  weekEventSection.addEventListener('click', e => {
    e.preventDefault();
    const btn = e.target.closest('.slider-btn');
    if (!btn) return;
    if (btn.classList.contains('slider-btn-right')) {
      renderNextEvent(events);
    } else if (btn.classList.contains('slider-btn-left')) {
      renderPrevEvent(events);
    }
  });
};

const renderNextEvent = function (events) {
  if (eventNum >= events.length - 1) return;
  weekEventSection.innerHTML = '';
  eventNum += 1;
  render(generateImgBkg(events, eventNum));
  render(generateInfoMarkup(events, eventNum));
};

const renderPrevEvent = function (events) {
  if (eventNum === 0) return;
  weekEventSection.innerHTML = '';
  eventNum -= 1;
  render(generateImgBkg(events, eventNum));
  render(generateInfoMarkup(events, eventNum));
};
