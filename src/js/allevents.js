const eventsContainer = document.querySelector('.allevents-container');

export const generateEventsMarkup = function (event) {
  return `
    <div class="single-event-container">
      <img src="${event.imgURL}" alt="${event.title}">
      <h2>${event.title}</h2>
      <p>${event.description}</p>
      <div class="trash-container">
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>`;
};

export const render = function (markup) {
  eventsContainer.insertAdjacentHTML('beforeend', markup);
};
