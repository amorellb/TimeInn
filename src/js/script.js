import * as data from './data.js';
import * as helper from './helper.js';

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
import * as loginValidation from './form-validation/login-validation.js';
import * as signupValidation from './form-validation/signup-validation.js';

// TODO: Parcel HMR (delete)
if (module.hot) {
  module.hot.accept();
}

const eventsDataCopy = [...data.theaterData.events];

// ScrollUp handler
scroll.scrollUpHandler();

// Render header and footer
const userName = helper.filterUserCookie()?.replace('user=', '');
headerFooter.renderHeader(userName);
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

//Render Calendar
calendar.render(calendar.createCalendar());
calendar.addEventCalendar();

//Render the fourth section: news
newsSection
  .filterNews(data.theaterData.news)
  .slice(0, 4)
  .reverse()
  .forEach(news => newsSection.render(newsSection.generateNewsMarkup(news)));

// Generate cookie and render subscription modal
const cookies = helper.getCookies();
if (!cookies.includes('session=Cookie')) {
  // One week = 604800 seconds
  helper.setCookie('session=Cookie; max-age=604800; path=/; SameSite=Lax;');

  // Render modal form for subscription
  subscription.obsSect();
  subscription.addHandlerHideForm();
  subscription.sendBtnHandler();
}

// Render the event when a tickets button is clicked
eventPage.render(eventPage.generateEventMarkup(data.theaterData.events));

// Render all events into all-events page
data.theaterData.events.forEach(event =>
  allEventsPage.render(allEventsPage.generateEventsMarkup(event))
);
// Filter events by type
allEventsPage.renderFilterButtons(
  allEventsPage.generateFilterMarkup(data.theaterData.events)
);
allEventsPage.filterHandler(data.theaterData.events);
// Search events
allEventsPage.searchHandler(data.theaterData.events);
// Filter events by date
allEventsPage.btnFindHandler(data.theaterData.events);
// Upload and save new event
allEventsPage.uploadBtnHandler(eventsDataCopy);

// Render the all-news Page
newsSection
  .filterNews(data.theaterData.news)
  .forEach(news => newsPage.render(newsPage.generateAllNews(news)));
newsPage.showContent();

// Login
loginValidation.checkboxHandler();
loginValidation.sendToSignUpPage();
const usersData = helper.getLocalStorage(data.users);
loginValidation.loginBtnHandler(usersData);

// Signup
signupValidation.emailFocusHandler(usersData);
signupValidation.nameFocusHandler();

signupValidation.signupBtnHandler(usersData);

signupValidation.passwFocusHandler();
signupValidation.passwMatchFocusHandler();

//Show passw
signupValidation.showPassw();
