import * as data from './data.js';
import * as dayEvents from './landingPage/dayEvents.js';
import * as weekEvents from './landingPage/weekEvents.js';
import * as event from './event.js';
import * as news from './landingPage/outstandingNews.js';


// Render the first section: events of the day
dayEvents.render(dayEvents.generateVideoMarkup(data.theaterData.events));
dayEvents.render(dayEvents.generateInfoMarkup(data.theaterData.events));

// Render the second section: events of the week
weekEvents.generateImgBkg(data.theaterData.events);
weekEvents.render(weekEvents.generateInfoMarkup(data.theaterData.events));

// Render the event when a tickets button is clicked
// event.ticketsBtnHandler();
event.render(event.generateEventMarkup(data.theaterData.events));

//Render the fourth section: news

//data.theaterData.news.forEach(singleNews => news.render(news.generateNewsMarkup(singleNews)))

/* (data.theaterData.news).slice(0,4).forEach(singleNews => news.render(news.generateNewsMarkup(singleNews))) */

news.filterNews(data.theaterData.news).slice(0,4).forEach(singleNews => news.render(news.generateNewsMarkup(singleNews))); 
console.log(news.filterNews(data.theaterData.news));
