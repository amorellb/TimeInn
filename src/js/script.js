import * as data from './data.js';
import * as headerFooter from './header-footer.js';
import * as firstSection from './landingPage/firstSection.js';
import * as secondSection from './landingPage/secondSection.js';
import * as subscription from './landingPage/subsModal.js';
import * as calendar from './landingPage/calendar.js';
import * as newsSection from './landingPage/outstandingNews.js';
import * as scroll from './landingPage/scroll-up.js';
import * as eventPage from './event.js';
import * as allEventsPage from './all-events.js';
import * as newsPage from './all-news.js';

// Render header and footer
headerFooter.renderHeader();
headerFooter.renderFooter();

// Render the first section: events of the day
firstSection.render(firstSection.generateVideoMarkup(data.theaterData.events));
firstSection.render(firstSection.generateInfoMarkup(data.theaterData.events));

// Render the second section: events of the week
window.addEventListener('load', () => {
  secondSection.generateImgBkg(data.theaterData.events);
  secondSection.render(
    secondSection.generateInfoMarkup(data.theaterData.events)
  );
});
secondSection.displayEventHandler(data.theaterData.events);

// Render the event when a tickets button is clicked
eventPage.render(eventPage.generateEventMarkup(data.theaterData.events));

// Render all events into all-events page
data.theaterData.events.forEach(event =>
  allEventsPage.render(allEventsPage.generateEventsMarkup(event))
);
allEventsPage.renderFilterButtons(
  allEventsPage.generateFilterMarkup(data.theaterData.events)
);
allEventsPage.filterHandler(data.theaterData.events);

//Render the fourth section: news
newsSection
  .filterNews(data.theaterData.news)
  .slice(0, 4)
  .reverse()
  .forEach(news => newsSection.render(newsSection.generateNewsMarkup(news)));

// Render the all News Page
newsSection
  .filterNews(data.theaterData.news)
  .forEach(news => newsPage.render(newsPage.generateAllNews(news)));
newsPage.showContent();

//Render Calendar
calendar.render(calendar.createCalendar());
calendar.addEventCalendar();

if (!document.cookie) {
  // One week = 604800 seconds
  document.cookie = 'name=Cookie; max-age=604800; path=/; SameSite=Lax';

  // Render modal form for subscription
  subscription.obsSect();
  subscription.addHandlerHideForm();
}
