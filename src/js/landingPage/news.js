const newsSection = document.querySelector('.news-container');




export const generateNews = function (news) {

    let sponsoredNews = news.filter(function(n){
        return n.sponsored == true;
    })
    let notSponsoredNews = news.filter(function(n){
        return n.sponsored == false;
    })
    let newArrayNews = sponsoredNews.concat(notSponsoredNews)
    console.log(newArrayNews);

    return `
    <div class="news-info">
        <img class="news-image" src="${newArrayNews[0].imgURL}" alt="News Image">
        <p class="news-title">${newArrayNews[0].title}</p>
        <p class="news-content">${newArrayNews[0].content}</p>
        <p class="news-title">${newArrayNews[0].publicationDate}</p>
   </div>;
   
    <div class="news-info">
        <img class="news-image" src="${newArrayNews[1].imgURL}" alt="News Image">
        <p class="news-title">${newArrayNews[1].title}</p>
        <p class="news-content">${newArrayNews[1].content}</p>
        <p class="news-title">${newArrayNews[1].publicationDate}</p>
   </div>;
   
    <div class="news-info">
        <img class="news-image" src="${newArrayNews[2].imgURL}" alt="News Image">
        <p class="news-title">${newArrayNews[2].title}</p>
        <p class="news-content">${newArrayNews[2].content}</p>
        <p class="news-title">${newArrayNews[2].publicationDate}</p>
   </div>;
   
    <div class="news-info">
        <img class="news-image" src="${newArrayNews[3].imgURL}" alt="News Image">
        <p class="news-title">${newArrayNews[3].title}</p>
        <p class="news-content">${newArrayNews[3].content}</p>
        <p class="news-title">${newArrayNews[3].publicationDate}</p>
   </div>`;
}


export const render = function (markup) {
  if (!newsSection) return;
  newsSection.insertAdjacentHTML('beforeend', markup);
};
