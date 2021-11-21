import { sortByDate } from '../helper.js';

const newsSection = document.querySelector('.news-section');
const newsContainer = document.querySelector('.news-container');

/**
 * A function that given an array of news, will split it by sponsored and non sponsored and the sort both array by date.
 * Finally it concat both arrays in one.
 * @param {array} news
 * @returns An array of sponsored news sorted by date
 */
export const filterNews = function (news) {
  const sponsoredNews = news.filter(function (n) {
    return n.sponsored == true;
  });
  const notSponsoredNews = news.filter(function (n) {
    return n.sponsored == false;
  });

  sortByDate(sponsoredNews, sponsoredNews.publicationDate);
  sortByDate(notSponsoredNews, notSponsoredNews.publicationDate);
  const sortedNews = sponsoredNews.concat(notSponsoredNews);
  return sortedNews;
};

/**
 * A function to generate the html of a given news object
 * @param {object} singleNews
 * @returns A string of the news' html
 */
export const generateNewsMarkup = function (singleNews) {
  const localePubDate = new Date(
    singleNews.publicationDate
  ).toLocaleDateString();
  return `
    <div class="news-info">
      <img class="news-image" src="${singleNews.imgURL}" alt="News Image">
      <p class="news-title">${singleNews.title}</p>
      <p class="news-date">${localePubDate}</p>
    </div>`;
};

/**
 * A function to render the news data given its html string
 * @param {string} markup
 */
export const render = function (markup) {
  if (!newsContainer) return;
  newsContainer.insertAdjacentHTML('afterbegin', markup);
};

// /**
//  * A function that sorts and array of news by date
//  * @param {array} news
//  */
// function filterDate(news) {
//   news.sort(function (a, b) {
//     return (
//       new Date(a.publicationDate).getTime() -
//       new Date(b.publicationDate).getTime()
//     );
//   });
// }

/**
 * A function to handle click on all news button and send the user to it
 */
const loadNewsPage = function () {
  if (!newsSection) return;
  newsSection.addEventListener('click', e => {
    const btn = e.target.closest('.all-news-btn');
    if (!btn) return;
    window.location.replace('all-news.html');
  });
};
loadNewsPage();
