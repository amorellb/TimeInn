const newsSection = document.querySelector('.news-container');


export const filterNews = function (news) {
  let sponsoredNews = news.filter(function (n) {
    return (n.sponsored == true) ;
  });

  let notSponsoredNews = news.filter(function (n) {
    return (n.sponsored == false) ;
  });
  let orderedNews = sponsoredNews.concat(notSponsoredNews);
  return orderedNews;

/* export const filterNews = function (news) {
  let sponsoredNews = news.filter(function (n) {
    return ((n.sponsored == true) && news.sort((a, b) => a - b));
  });

  let notSponsoredNews = news.filter(function (n) {
    return (n.sponsored == false) && news.sort((a, b) => a - b);
  });

  let orderedNews = sponsoredNews.concat(notSponsoredNews);
  return orderedNews; */
  

  /* newArrayNews.sort(function(a,b){
    new Date(a.publicationDate)- new Date(b.publicationDate)
return newArrayNews
  }) */
};


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
