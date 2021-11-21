const eventContainer = document.querySelector('.all-news-container');

export const generateAllNews = function (singleNews) {
  const localePubDate = new Date(
    singleNews.publicationDate
  ).toLocaleDateString();
  return `
      <div class="news-info">
          <img class="news-image" src="${singleNews.imgURL}" alt="News Image">
          <p class="news-title">${singleNews.title}</p>
          <p class="news-content hidden">${singleNews.content}</p>
          <p class="news-date">${localePubDate}</p>
          <button class="btn-readmore">Read More...</button>
          </div>
          `;
};

export const render = function (markup) {
  if (!eventContainer) return;
  eventContainer.insertAdjacentHTML('beforeend', markup);
};

export const showContent = function () {
  if (!eventContainer) return;
  eventContainer.addEventListener('click', e => {
    const btn = e.target.closest('.btn-readmore');
    if (!btn) return;
    const newsContent = e.target.parentElement.childNodes[5];
    if (newsContent.classList.contains('hidden')) {
      newsContent.classList.toggle('hidden');
    } else {
      newsContent.classList.toggle('hidden');
    }
  });
};
