import * as data from './data.js';
import * as dayEvents from './landingPage/dayEvents.js';

dayEvents.render(dayEvents.generateVideoMarkup(data.theaterData.events));

dayEvents.render(dayEvents.generateInfoMarkup(data.theaterData.events));
