import * as data from './data.js';
import * as dayEvents from './landingPage/dayEvents.js';
import * as weekEvents from './landingPage/weekEvents.js';

// Render the first section: events of the day
dayEvents.render(dayEvents.generateVideoMarkup(data.theaterData.events));
dayEvents.render(dayEvents.generateInfoMarkup(data.theaterData.events));

// Render the first section: events of the day
// weekEvents.render(weekEvents.generateImgMarkup(data.theaterData.events));
weekEvents.generateImgMarkup(data.theaterData.events);
weekEvents.render(weekEvents.generateInfoMarkup(data.theaterData.events));
