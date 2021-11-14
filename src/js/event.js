const eventContainer = document.querySelector('.event-container');

// TODO: Add more data to the description (author, dates, duration, price, ...)
export const generateEventMarkup = function (events) {
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
