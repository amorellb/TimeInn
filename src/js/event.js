const eventContainer = document.querySelector('.event-container');

/**
 * A function that given an array of objects, will return a html as a string with all the data of an event
 * @param {array} events
 * @returns
 */
export const generateEventMarkup = function (events) {
  return `
  <section class="event">
        <h1 class="event-title">${events[0].title}</h1>
        <img class="event-img" src="${events[0].imgURL}" alt="${
    events[0].title
  }">
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
        <h2>Price</h2>
        <p>${events[0].price} €</p>
        <h2>Dates</h2>
        <p>${events[0].dates
          .map(date => new Date(date).toLocaleDateString())
          .join(', ')}</p>
        <h2>Author</h2>
        <p>${events[0].author}</p>
          <h2>Description</h2>
          <p>${events[0].description}</p>
          <h2>Duration</h2>
        <p>${events[0].duration} min</p>
        </div>
      </section>
  `;
};

/**
 * A function that given a string containing the html will render it within the event container of the event page
 * @param {string} markup
 * @returns
 */
export const render = function (markup) {
  if (!eventContainer) return;
  eventContainer.insertAdjacentHTML('afterbegin', markup);
};
