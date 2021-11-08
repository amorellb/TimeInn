const newsSection = document.querySelector('.news-container');

// probar for of, for in, for each
export const generateNews = function (news) {
    return `
    <div class="news-info">
        <img class="news-image" src="${news[0].imgURL}" alt="News Image">
        <p class="news-title">${news[0].title}</p>
        <p class="news-content">${news[0].content}</p>
        <p class="news-title">${news[0].publicationDate}</p>
   </div>;
   
    <div class="news-info">
        <img class="news-image" src="${news[1].imgURL}" alt="News Image">
        <p class="news-title">${news[1].title}</p>
        <p class="news-content">${news[1].content}</p>
        <p class="news-title">${news[1].publicationDate}</p>
   </div>;
   
    <div class="news-info">
        <img class="news-image" src="${news[2].imgURL}" alt="News Image">
        <p class="news-title">${news[2].title}</p>
        <p class="news-content">${news[2].content}</p>
        <p class="news-title">${news[2].publicationDate}</p>
   </div>;
   
    <div class="news-info">
        <img class="news-image" src="${news[3].imgURL}" alt="News Image">
        <p class="news-title">${news[3].title}</p>
        <p class="news-content">${news[3].content}</p>
        <p class="news-title">${news[3].publicationDate}</p>
   </div>`;
}


export const render = function (markup) {
  if (!newsSection) return;
  newsSection.insertAdjacentHTML('beforeend', markup);
};
