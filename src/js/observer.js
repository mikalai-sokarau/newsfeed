'use strict';

const dropdownMenu = document.querySelector('.dropdown-menu'),
      dropdownHeader = document.querySelector('.resource-name'),
      NEWS_SOURCES = {
        'BBC News': 'bbc-news',
        'CNN': 'cnn',
        'The Guardian': 'the-guardian-uk',
        'The New York Times': 'the-new-york-times',
        'USA Today': 'usa-today'
      };

export default (classInstance) => {
  dropdownMenu.addEventListener('click', (event) => {
    const newsSourceName = event.target.textContent,
          link = classInstance.getLink(NEWS_SOURCES[newsSourceName]);

    dropdownHeader.textContent = newsSourceName;

    classInstance.getNews(link)
      .then(function (news) {
        classInstance.addNews(news)
      })
      .catch(function (e) {
        console.log('error: ' + e);
      });
  });
};
