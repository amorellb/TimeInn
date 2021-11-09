const newsSection = document.querySelector('.news-container');

/* export const filterNews = function (news) {
  let sponsoredNews = news.filter(function (n) {
    return n.sponsored == true;
  });
  let notSponsoredNews = news.filter(function (n) {
    return n.sponsored == false;
  });

  let newArrayNews = sponsoredNews.concat(notSponsoredNews);
}; */

export const generateNewsMarkup = function (singleNews) {
  return `
    <div class="news-info">
        <img class="news-image" src="${singleNews.imgURL}" alt="News Image">
        <p class="news-title">${singleNews.title}</p>
        <p class="news-date">${singleNews.publicationDate}</p>
        </div>`;
  /*<p class="news-content">${singleNews.content}</p>*/
};

export const render = function (markup) {
  if (!newsSection) return;
  newsSection.insertAdjacentHTML('beforeend', markup);
};
