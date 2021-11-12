const eventContainer = document.querySelector('.all-news-container');

export const generateAllNews = function (singleNews) {
  return `
      <div class="news-info">
          <img class="news-image" src="${singleNews.imgURL}" alt="News Image">
          <p class="news-title">${singleNews.title}</p>
          <p class="news-content">${singleNews.content}</p>
          <p class="news-date">${singleNews.publicationDate}</p>
          </div>`;
};

export const render = function (markup) {
  if (!eventContainer) return;
  eventContainer.insertAdjacentHTML('beforeend', markup);
};
