const newsSection = document.querySelector('.news-container');

export const filterNews = function (news) {
  let sponsoredNews = news.filter(function (n) {
    return n.sponsored == true;
  });
  let notSponsoredNews = news.filter(function (n) {
    return n.sponsored == false;
  });

  filterDate(sponsoredNews);
  filterDate(notSponsoredNews);
  let orderedNews = sponsoredNews.concat(notSponsoredNews);
  return orderedNews;
};

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

export const render = function (markup) {
  if (!newsSection) return;
  newsSection.insertAdjacentHTML('afterbegin', markup);
};

function filterDate(news) {
  news.sort(function (a, b) {
    return (
      new Date(a.publicationDate).getTime() -
      new Date(b.publicationDate).getTime()
    );
  });
}
