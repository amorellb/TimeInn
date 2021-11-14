const eventContainer = document.querySelector('.all-news-container');

export const generateAllNews = function (singleNews) {
  const localePubDate = new Date(
    singleNews.publicationDate
  ).toLocaleDateString();
  return `
      <div class="news-info">
          <img class="news-image" src="${singleNews.imgURL}" alt="News Image">
          <p class="news-title">${singleNews.title}</p>
          <p class="news-content">${singleNews.content}</p>
          <p class="news-date">${localePubDate}</p>
          </div>`;
};

export const render = function (markup) {
  if (!eventContainer) return;
  eventContainer.insertAdjacentHTML('beforeend', markup);
};
