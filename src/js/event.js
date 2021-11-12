const eventContainer = document.querySelector('.event-container');
const navIcon = document.querySelector('.fa-bars');

// TODO: Add more data to the description (author, dates, duration, price, ...)
export const generateEventMarkup = function (events) {
  // const event = filterEvents(getDayTicketsBtnClass(), events);
  return `
  <section class="event">
        <h1 class="event-title">${events[0].title}</h1>
        <img class="event-img" src="${events[0].imgURL}" alt="${events[0].title}">
        <aside class="event-form">
          <form action="post">
            <input class="event-form-input" type="text" name="name" id="name" placeholder="Name"/>
            <input class="event-form-input" type="text" name="lastName" id="lastName" placeholder="Last name"/>
            <input class="event-form-input" type="text" name="phone" id="phone" placeholder="Phone"/>
            <input class="event-form-input" type="text" name="email" id="email" placeholder="Email"/>
            <input class="event-form-input" type="number" name="numTickets" id="numTickets" value="1" min="1"/>
            <button class="event-form-btn" type="submit">Add to cart</button>
          </form>
        </aside>
        <div class="event-description">
          <h2>Description</h2>
          <p>${events[0].description}</p>
        </div>
      </section>
  `;
};

export const render = function (markup) {
  if (!eventContainer) return;
  eventContainer.insertAdjacentHTML('afterbegin', markup);
};

// export const dayTicketsBtnHandler = function (renderFunction) {
//   const btn = document.querySelector('.day-tickets-btn');
//   if (!btn) return;
//   btn.addEventListener('click', renderFunction);
// };

// const weekTicketsBtnHandler = function (renderFunction) {
//   const btn = document.querySelector('.week-tickets-btn');
//   if (!btn) return;
//   btn.addEventListener('click', renderFunction);
// };

// const getDayTicketsBtnClass = function () {
//   const btn = document.querySelector('.day-tickets-btn');
//   if (!btn) return;
//   const btnClasses = btn.className.split(' ');
//   return btnClasses.filter(btnClass => btnClass.startsWith('id-'));
// };

// const getWeekTicketsBtnClass = function () {
//   const btn = document.querySelector('.week-tickets-btn');
//   if (!btn) return;
//   const btnClasses = btn.className.split(' ');
//   return btnClasses.filter(btnClass => btnClass.startsWith('id-'));
// };

// const filterEvents = function (btnClass, events) {
//   console.log(btnClass);
//   return events.filter(event => event.id === btnClass);
// };
