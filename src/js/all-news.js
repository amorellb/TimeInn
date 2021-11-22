const eventContainer = document.querySelector('.all-news-container');

/**
 * A function that generates the html of a single news from the data object content
 * @param {object} singleNews
 * @returns A string with the html of a news element
 */
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

/**
 * A function that given the news' html string renders it into the page
 * @param {string} markup
 */
export const render = function (markup) {
  if (!eventContainer) return;
  eventContainer.insertAdjacentHTML('beforeend', markup);
};

/**
 * A function that toggle the news content when the button 'read more...' is clicked
 */
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
