'use strict';
import templateBuilder from './templateBuilder';

const API_KEY = '96be30eda92847a2b5edd3f3a907e3bd',
      DEFAULT_LINK = `https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=${API_KEY}`,
      NEWS_CONTAINER = document.querySelector('.news');

export default class {
  addNews(JSONobj) {
    const articles = JSON.parse(JSONobj).articles,
      mainArticle = templateBuilder(articles.pop(), 'main-news-item');

    NEWS_CONTAINER.innerHTML = "";
    NEWS_CONTAINER.appendChild(mainArticle);
    articles.forEach(item => {
      const newsDiv = templateBuilder(item, 'news-item');
      NEWS_CONTAINER.appendChild(newsDiv);
    });
  }

  getNews(link = DEFAULT_LINK) {
    const request = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
      request.onload = function() {
        resolve(this.responseText);
      };
      request.onerror = reject;
      request.open('GET', link, true);
      request.send();
    })
  }

  getLink(newsSource) {
    return `https://newsapi.org/v1/articles?source=${newsSource}&sortBy=top&apiKey=${API_KEY}`;
  }
}
