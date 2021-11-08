const newsSection = document.querySelector('.news-container');


export const generateNews = function (news) {
    return `
    <div class="news-info">
        <img class="news-image" src="${news[0].imgURL}" alt="News Image">
        <p class="news-title">${news[0].title}</p>
        <p class="news-content">${news[0].content}</p>
        <p class="news-title">${news[0].publicationDate}</p>
   </div>`;
}


export const render = function (markup) {
  if (!newsSection) return;
  newsSection.insertAdjacentHTML('beforeend', markup);
};
