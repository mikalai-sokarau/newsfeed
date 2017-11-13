'use strict';
import NewsMaker from './NewsMaker';
import observe from './observer';

const appNewsMaker = new NewsMaker();
observe(appNewsMaker);

appNewsMaker.getNews()
  .then(function (news) {
    appNewsMaker.addNews(news)
  })
  .catch(function (e) {
    /* error handling */
    console.log('error: ' + e);
});