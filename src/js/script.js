import * as data from './data.js';
import * as dayEvents from './landingPage/dayEvents.js';
import * as weekEvents from './landingPage/weekEvents.js';
import * as subscription from './landingPage/subsModal.js';
import * as event from './event.js';
import * as newsEvents from './news.js';
import * as news from './landingPage/outstandingNews.js';
import * as allevents from './allevents.js';
import * as menu from './landingPage/nav.js';
import * as scroll from './landingPage/scroll-up.js';

// Render the first section: events of the day
dayEvents.render(dayEvents.generateVideoMarkup(data.theaterData.events));
dayEvents.render(dayEvents.generateInfoMarkup(data.theaterData.events));

// Render the second section: events of the week
window.addEventListener('load', () => {
  weekEvents.generateImgBkg(data.theaterData.events);
  weekEvents.render(weekEvents.generateInfoMarkup(data.theaterData.events));
});
weekEvents.displayEventHandler(data.theaterData.events);

// Render the event when a tickets button is clicked
// event.ticketsBtnHandler();
event.render(event.generateEventMarkup(data.theaterData.events));

// Render all events into all-events page
data.theaterData.events.forEach(event =>
  allevents.render(allevents.generateEventsMarkup(event))
);

//Render the fourth section: news
news
  .filterNews(data.theaterData.news)
  .slice(0, 4)
  .reverse()
  .forEach(singleNews => news.render(news.generateNewsMarkup(singleNews)));

// Render the all News Page
news
  .filterNews(data.theaterData.news)
  .forEach(singleNews =>
    newsEvents.render(newsEvents.generateAllNews(singleNews))
  );
