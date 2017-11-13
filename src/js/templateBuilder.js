'use strict';

const DATE_LOCALE = 'en-US',
      DATE_OPTIONS = {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      };

export default (article, className) => {
  const author = article.author,
    title = article.title,
    description = article.description,
    url = article.url,
    image = article.urlToImage,
    date = new Date(article.publishedAt).toLocaleString(DATE_LOCALE, DATE_OPTIONS) || 'recently',
    div = document.createElement('div');

  div.classList.add(className);
  div.innerHTML = `<a href="${url}"><img src="${image}"></a>
    <h2>${title}</h2>
    <p>${description}</p>
    ${author ? '<p>Author: ' + author + '</p>' : ''}
    <p>Published: ${date}</p>
    <iframe id="twitter-widget-18" scrolling="no" frameborder="0" allowtransparency="true"class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" title="Twitter Tweet Button"src="https://platform.twitter.com/widgets/tweet_button.b7974b8ae7c1ae9cc22c4e8064c094ca.ru.html#dnt=true&amp;id=twitter-widget-18&amp;lang=en&amp;original_referer=https%3A%2F%2Fabout.twitter.com%2Fru%2Fresources%2Fbuttons%23tweet&amp;size=l&amp;text=${title}&amp;time=1507474313858&amp;type=share&amp;url=${url}&amp;style="position: static; visibility: visible; width: 95px; height: 28px;" data-url="${url}"></iframe>`;

  return div;
}