/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NewsMaker__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observer__ = __webpack_require__(3);




const appNewsMaker = new __WEBPACK_IMPORTED_MODULE_0__NewsMaker__["a" /* default */]();
Object(__WEBPACK_IMPORTED_MODULE_1__observer__["a" /* default */])(appNewsMaker);

appNewsMaker.getNews()
  .then(function (news) {
    appNewsMaker.addNews(news)
  })
  .catch(function (e) {
    /* error handling */
    console.log('error: ' + e);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templateBuilder__ = __webpack_require__(2);



const API_KEY = '96be30eda92847a2b5edd3f3a907e3bd',
      DEFAULT_LINK = `https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=${API_KEY}`,
      NEWS_CONTAINER = document.querySelector('.news');

/* harmony default export */ __webpack_exports__["a"] = (class {
  addNews(JSONobj) {
    const articles = JSON.parse(JSONobj).articles,
      mainArticle = Object(__WEBPACK_IMPORTED_MODULE_0__templateBuilder__["a" /* default */])(articles.pop(), 'main-news-item');

    NEWS_CONTAINER.innerHTML = "";
    NEWS_CONTAINER.appendChild(mainArticle);
    articles.forEach(item => {
      const newsDiv = Object(__WEBPACK_IMPORTED_MODULE_0__templateBuilder__["a" /* default */])(item, 'news-item');
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
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const DATE_LOCALE = 'en-US',
      DATE_OPTIONS = {
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      };

/* harmony default export */ __webpack_exports__["a"] = ((article, className) => {
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
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const dropdownMenu = document.querySelector('.dropdown-menu'),
      dropdownHeader = document.querySelector('.resource-name'),
      NEWS_SOURCES = {
        'BBC News': 'bbc-news',
        'CNN': 'cnn',
        'The Guardian': 'the-guardian-uk',
        'The New York Times': 'the-new-york-times',
        'USA Today': 'usa-today'
      };

/* harmony default export */ __webpack_exports__["a"] = ((classInstance) => {
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
});


/***/ })
/******/ ]);