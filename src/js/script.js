import * as data from './data.js';
import * as dayEvents from './landingPage/dayEvents.js';
import * as weekEvents from './landingPage/weekEvents.js';
import * as event from './event.js';
import * as allevents from './allevents.js';

// Render the first section: events of the day
dayEvents.render(dayEvents.generateVideoMarkup(data.theaterData.events));
dayEvents.render(dayEvents.generateInfoMarkup(data.theaterData.events));

// Render the second section: events of the week
weekEvents.generateImgBkg(data.theaterData.events);
weekEvents.render(weekEvents.generateInfoMarkup(data.theaterData.events));

// Render the event when a tickets button is clicked
// event.ticketsBtnHandler();
event.render(event.generateEventMarkup(data.theaterData.events));

// Render all events into all-events page
data.theaterData.events.forEach(event =>
  allevents.render(allevents.generateEventsMarkup(event))
);
