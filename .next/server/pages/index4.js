module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index4": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index4.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Common/AccountCreateArea.js":
/*!************************************************!*\
  !*** ./components/Common/AccountCreateArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AccountCreateArea extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "account-create-area"
    }, __jsx("div", {
      className: "container account-create-content"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-8"
    }, __jsx("h2", null, "Apply for an account in minutes"), __jsx("p", null, "Get your Luvion account today!")), __jsx("div", {
      className: "col-lg-4"
    }, __jsx("div", {
      className: "create-account"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Your Account")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AccountCreateArea);

/***/ }),

/***/ "./components/Common/BlogCard.js":
/*!***************************************!*\
  !*** ./components/Common/BlogCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BlogCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "blog-area ptb-70 pb-50"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "The news from our blog"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/1.jpg */ "./images/blog-image/1.jpg"),
      alt: "image"
    })))), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", {
      className: "entry-meta"
    }, __jsx("li", null, __jsx("i", {
      className: "far fa-user"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Admin"))), __jsx("li", null, __jsx("i", {
      className: "far fa-calendar"
    }), "December 15, 2019")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "The security risks of changing package owners"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/2.jpg */ "./images/blog-image/2.jpg"),
      alt: "image"
    })))), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", {
      className: "entry-meta"
    }, __jsx("li", null, __jsx("i", {
      className: "far fa-user"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Admin"))), __jsx("li", null, __jsx("i", {
      className: "far fa-calendar"
    }), "December 16, 2019")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Tips to protecting business and family"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/3.jpg */ "./images/blog-image/3.jpg"),
      alt: "image"
    })))), __jsx("div", {
      className: "blog-post-content"
    }, __jsx("ul", {
      className: "entry-meta"
    }, __jsx("li", null, __jsx("i", {
      className: "far fa-user"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Admin"))), __jsx("li", null, __jsx("i", {
      className: "far fa-calendar"
    }), "December 16, 2019")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Protect your workplace from cyber attacks"))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BlogCard);

/***/ }),

/***/ "./components/Common/CustomersFeedback.js":
/*!************************************************!*\
  !*** ./components/Common/CustomersFeedback.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 0,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
};

class CustomersFeedback extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx("section", {
      className: "feedback-area ptb-70 bg-f7fafd"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "What customers say about Us"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "feedback-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "item"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("i", {
      className: "fas fa-quote-left quote-icon"
    }), __jsx("p", null, __jsx("q", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "client-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client-image/1.jpg */ "./images/client-image/1.jpg"),
      alt: "image"
    }), __jsx("h3", null, "John Lucy"), __jsx("span", null, "Founder & Consultant")))), __jsx("div", {
      className: "item"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("i", {
      className: "fas fa-quote-left quote-icon"
    }), __jsx("p", null, __jsx("q", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "client-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client-image/2.jpg */ "./images/client-image/2.jpg"),
      alt: "image"
    }), __jsx("h3", null, "John Smith"), __jsx("span", null, "CTO  & Consultant")))), __jsx("div", {
      className: "item"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("i", {
      className: "fas fa-quote-left quote-icon"
    }), __jsx("p", null, __jsx("q", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "client-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client-image/3.jpg */ "./images/client-image/3.jpg"),
      alt: "image"
    }), __jsx("h3", null, "Maxwel Warner"), __jsx("span", null, "Chief Manager")))), __jsx("div", {
      className: "item"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("i", {
      className: "fas fa-quote-left quote-icon"
    }), __jsx("p", null, __jsx("q", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "client-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client-image/4.jpg */ "./images/client-image/4.jpg"),
      alt: "image"
    }), __jsx("h3", null, "Ross Taylor"), __jsx("span", null, "Web Developer")))), __jsx("div", {
      className: "item"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("i", {
      className: "fas fa-quote-left quote-icon"
    }), __jsx("p", null, __jsx("q", null, "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "client-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/client-image/5.jpg */ "./images/client-image/5.jpg"),
      alt: "image"
    }), __jsx("h3", null, "James Anderson"), __jsx("span", null, "Web Developer"))))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomersFeedback);

/***/ }),

/***/ "./components/Common/EasyPaymentBorrow.js":
/*!************************************************!*\
  !*** ./components/Common/EasyPaymentBorrow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class EasyPaymentBorrow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "invoicing-area ptb-70"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "invoicing-content"
    }, __jsx("h2", null, "Easy Payment to borrow free get a better filling at home"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx("p", null, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started")))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "invoicing-image"
    }, __jsx("div", {
      className: "main-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.7s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/invoicing-image/1.png */ "./images/invoicing-image/1.png"),
      alt: "image"
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "1s",
      animation: "fadeInLeft"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/invoicing-image/2.png */ "./images/invoicing-image/2.png"),
      alt: "image"
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "1.3s",
      animation: "fadeInLeft"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/invoicing-image/3.png */ "./images/invoicing-image/3.png"),
      alt: "image"
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "1s",
      animation: "fadeInRight"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/invoicing-image/4.png */ "./images/invoicing-image/4.png"),
      alt: "image"
    }))), __jsx("div", {
      className: "main-mobile-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_2___default.a, {
      delay: "0.7s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/invoicing-image/main-pic.png */ "./images/invoicing-image/main-pic.png"),
      alt: "image"
    }))), __jsx("div", {
      className: "circle-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/invoicing-image/circle1.png */ "./images/invoicing-image/circle1.png"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/invoicing-image/circle2.png */ "./images/invoicing-image/circle2.png"),
      alt: "image"
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EasyPaymentBorrow);

/***/ }),

/***/ "./components/Common/OurFeaturesContent.js":
/*!*************************************************!*\
  !*** ./components/Common/OurFeaturesContent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class OurFeaturesContent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "features-area ptb-70 bg-f6f4f8"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Our features"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-features-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-settings"
    })), __jsx("h3", null, "Incredible infrastructure"), __jsx("p", null, "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-features-box"
    }, __jsx("div", {
      className: "icon bg-f78acb"
    }, __jsx("i", {
      className: "flaticon-envelope-of-white-paper"
    })), __jsx("h3", null, "Email notifications"), __jsx("p", null, "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-features-box"
    }, __jsx("div", {
      className: "icon bg-cdf1d8"
    }, __jsx("i", {
      className: "flaticon-menu"
    })), __jsx("h3", null, "Simple dashboard"), __jsx("p", null, "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-features-box"
    }, __jsx("div", {
      className: "icon bg-c679e3"
    }, __jsx("i", {
      className: "flaticon-info"
    })), __jsx("h3", null, "Information retrieval"), __jsx("p", null, "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-features-box"
    }, __jsx("div", {
      className: "icon bg-eb6b3d"
    }, __jsx("i", {
      className: "flaticon-cursor"
    })), __jsx("h3", null, "Drag and drop functionality"), __jsx("p", null, "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-features-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-alarm"
    })), __jsx("h3", null, "Deadline reminders"), __jsx("p", null, "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OurFeaturesContent);

/***/ }),

/***/ "./components/Common/PartnerContent.js":
/*!*********************************************!*\
  !*** ./components/Common/PartnerContent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PartnerContent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "partner-area ptb-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Our trusted partner"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\u200B")), __jsx("div", {
      className: "partner-inner"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/1.png */ "./images/partner-image/1.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/1.png */ "./images/partner-image/1.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/2.png */ "./images/partner-image/2.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/2.png */ "./images/partner-image/2.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/3.png */ "./images/partner-image/3.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/3.png */ "./images/partner-image/3.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/4.png */ "./images/partner-image/4.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/4.png */ "./images/partner-image/4.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/5.png */ "./images/partner-image/5.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/5.png */ "./images/partner-image/5.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/6.png */ "./images/partner-image/6.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/6.png */ "./images/partner-image/6.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/7.png */ "./images/partner-image/7.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/7.png */ "./images/partner-image/7.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/8.png */ "./images/partner-image/8.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/8.png */ "./images/partner-image/8.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/9.png */ "./images/partner-image/9.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/9.png */ "./images/partner-image/9.png"),
      alt: "Partner"
    })))), __jsx("div", {
      className: "single-partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/10.png */ "./images/partner-image/10.png"),
      alt: "Partner"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner-image/10.png */ "./images/partner-image/10.png"),
      alt: "Partner"
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PartnerContent);

/***/ }),

/***/ "./components/Common/ServicesCard.js":
/*!*******************************************!*\
  !*** ./components/Common/ServicesCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class ServicesCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "services-area ptb-70"
    }, __jsx("div", {
      className: "container-fluid p-0"
    }, __jsx("div", {
      className: "overview-box"
    }, __jsx("div", {
      className: "overview-content"
    }, __jsx("div", {
      className: "content left-content"
    }, __jsx("h2", null, "Freelancers, entrepreneurs, and sole traders"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("ul", {
      className: "services-list"
    }, __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Free plan available")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Full data privacy compliance")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "100% transparent costs")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Commitment-free")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Real-time spending overview")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Debit Mastercard included"))))), __jsx("div", {
      className: "overview-image"
    }, __jsx("div", {
      className: "image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/1.png */ "./images/1.png"),
      alt: "image"
    }), __jsx("div", {
      className: "circle-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/circle.png */ "./images/circle.png"),
      alt: "image"
    }))))))), __jsx("div", {
      className: "services-area ptb-70 bg-f7fafd"
    }, __jsx("div", {
      className: "container-fluid p-0"
    }, __jsx("div", {
      className: "overview-box"
    }, __jsx("div", {
      className: "overview-image"
    }, __jsx("div", {
      className: "image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/2.png */ "./images/2.png"),
      alt: "image"
    }), __jsx("div", {
      className: "circle-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/circle.png */ "./images/circle.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "overview-content"
    }, __jsx("div", {
      className: "content"
    }, __jsx("h2", null, "Small to medium-sized businesses"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("ul", {
      className: "services-list"
    }, __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Easy transfers")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Deposit checks instantly")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "A powerful open API")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Coverage around the world")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Business without borders")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Affiliates and partnerships")))))))), __jsx("div", {
      className: "services-area ptb-70"
    }, __jsx("div", {
      className: "container-fluid p-0"
    }, __jsx("div", {
      className: "overview-box"
    }, __jsx("div", {
      className: "overview-content"
    }, __jsx("div", {
      className: "content left-content"
    }, __jsx("h2", null, "Large or enterprise level businesses"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), __jsx("ul", {
      className: "services-list"
    }, __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Corporate Cards")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "International Payments")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Automated accounting")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Request Features")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Premium Support")), __jsx("li", null, __jsx("span", null, __jsx("i", {
      className: "flaticon-check-mark"
    }), "Direct Debit"))))), __jsx("div", {
      className: "overview-image"
    }, __jsx("div", {
      className: "image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/3.png */ "./images/3.png"),
      alt: "image"
    }), __jsx("div", {
      className: "circle-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/circle.png */ "./images/circle.png"),
      alt: "image"
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ServicesCard);

/***/ }),

/***/ "./components/HomeFour/AppDownloadContent.js":
/*!***************************************************!*\
  !*** ./components/HomeFour/AppDownloadContent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AppDownloadContent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "app-download-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "app-image"
    }, __jsx("div", {
      className: "main-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/mobile-app1.png */ "./images/mobile-app1.png"),
      className: "wow fadeInLeft",
      "data-wow-delay": "0.6s",
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/mobile-app2.png */ "./images/mobile-app2.png"),
      className: "wow fadeInUp",
      "data-wow-delay": "0.9s",
      alt: "image"
    })), __jsx("div", {
      className: "main-mobile-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/main-mobile.png */ "./images/main-mobile.png"),
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "image"
    })), __jsx("div", {
      className: "circle-img"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/circle.png */ "./images/circle.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "app-download-content"
    }, __jsx("h2", null, "You can find all the thing you need to payout"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."), __jsx("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."), __jsx("div", {
      className: "btn-box"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "app-store-btn"
    }, __jsx("i", {
      className: "flaticon-apple"
    }), "Download on", __jsx("span", null, "App Store"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "play-store-btn"
    }, __jsx("i", {
      className: "flaticon-play-store"
    }), "Download on", __jsx("span", null, "Google play")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AppDownloadContent);

/***/ }),

/***/ "./components/HomeFour/FunFacts.js":
/*!*****************************************!*\
  !*** ./components/HomeFour/FunFacts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FunFacts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "funfacts-area ptb-70 pt-0"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "We always try to understand customers expectation"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-sm-3 col-md-3 col-6"
    }, __jsx("div", {
      className: "funfact"
    }, __jsx("h3", null, __jsx("span", null, "180"), "K"), __jsx("p", null, "Downloaded"))), __jsx("div", {
      className: "col-lg-3 col-sm-3 col-md-3 col-6"
    }, __jsx("div", {
      className: "funfact"
    }, __jsx("h3", null, __jsx("span", null, "20"), "K"), __jsx("p", null, "Feedback"))), __jsx("div", {
      className: "col-lg-3 col-sm-3 col-md-3 col-6"
    }, __jsx("div", {
      className: "funfact"
    }, __jsx("h3", null, __jsx("span", null, "500"), "+"), __jsx("p", null, "Workers"))), __jsx("div", {
      className: "col-lg-3 col-sm-3 col-md-3 col-6"
    }, __jsx("div", {
      className: "funfact"
    }, __jsx("h3", null, __jsx("span", null, "70"), "+"), __jsx("p", null, "Contributors")))), __jsx("div", {
      className: "contact-cta-box"
    }, __jsx("h3", null, "Have any questions about us?"), __jsx("p", null, "Don't hesitate to contact us"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Contact Us"))), __jsx("div", {
      className: "map-bg"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/map.png */ "./images/map.png"),
      alt: "map"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FunFacts);

/***/ }),

/***/ "./components/HomeFour/InformationArea.js":
/*!************************************************!*\
  !*** ./components/HomeFour/InformationArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class InformationArea extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "information-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-information-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-piggy-bank"
    })), __jsx("h3", null, "$0.00 / mo"), __jsx("p", null, "Free account available"))), __jsx("div", {
      className: "col-lg-3 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-information-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-user"
    })), __jsx("h3", null, "10 minutes"), __jsx("p", null, "Apply for account"))), __jsx("div", {
      className: "col-lg-3 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-information-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-shield"
    })), __jsx("h3", null, "$100,000"), __jsx("p", null, "Guarantee on deposits"))), __jsx("div", {
      className: "col-lg-3 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-information-box"
    }, __jsx("div", {
      className: "btn-box"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "app-store-btn"
    }, __jsx("i", {
      className: "flaticon-apple"
    }), "Download on", __jsx("span", null, "App Store"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "play-store-btn"
    }, __jsx("i", {
      className: "flaticon-play-store"
    }), "Download on", __jsx("span", null, "Google play")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (InformationArea);

/***/ }),

/***/ "./components/HomeFour/MainBanner.js":
/*!*******************************************!*\
  !*** ./components/HomeFour/MainBanner.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MainBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "banner-section"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row m-0 align-items-center"
    }, __jsx("div", {
      className: "col-lg-5 col-md-12 p-0"
    }, __jsx("div", {
      className: "hero-content"
    }, __jsx("h1", null, "Fast and easy business banking"), __jsx("p", null, "Get the financial tools and insights to start, build, and grow your business."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Create your account")))), __jsx("div", {
      className: "col-lg-7 col-md-12 p-0"
    }, __jsx("div", {
      className: "hero-image"
    }, __jsx("div", {
      className: "main-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
      delay: "0.7s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/banner-image/1.png */ "./images/banner-image/1.png"),
      alt: "image"
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
      delay: "1.3s",
      animation: "fadeInLeft"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/banner-image/2.png */ "./images/banner-image/2.png"),
      alt: "image"
    })), __jsx(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
      delay: "1s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/banner-image/3.png */ "./images/banner-image/3.png"),
      alt: "image"
    }))), __jsx("div", {
      className: "main-mobile-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
      delay: "0.7s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/banner-image/main-pic.png */ "./images/banner-image/main-pic.png"),
      alt: "image"
    }))), __jsx("div", {
      className: "circle-image"
    }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
      delay: "1s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/banner-image/circle1.png */ "./images/banner-image/circle1.png"),
      alt: "image"
    }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#play-video"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.openModal();
      },
      className: "video-btn"
    }, __jsx("i", {
      className: "fas fa-play mr-2"
    }), "Play Video"))))))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_2___default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "szuchBiLrEM",
      onClose: () => this.setState({
        isOpen: false
      })
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainBanner);

/***/ }),

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let currentYear = new Date().getFullYear();
    return __jsx("footer", {
      className: "footer-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
      alt: "logo"
    }))), __jsx("p", null, "Quis ipsum suspendisse ultrices gravida commodo. Risus commodo veliliee vel viverra maecenas accumsan lacus vel facilisis")), __jsx("ul", {
      className: "social-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-facebook-f"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-linkedin-in"
    }))))))), __jsx("div", {
      className: "col-lg-3 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-5"
    }, __jsx("h3", null, "Company"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Services"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Features"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Our Pricing"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Latest News")))))), __jsx("div", {
      className: "col-lg-3 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Support"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Privacy Policy"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Terms & Condition"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Community"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Contact Us")))))), __jsx("div", {
      className: "col-lg-3 col-sm-6 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Address"), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx("span", {
      className: "mr-1"
    }, "Location:"), "27 Division St, New York, NY 10002, USA"), __jsx("li", null, __jsx("span", {
      className: "mr-1"
    }, "Email:"), "infohaiper@haiper.com"), __jsx("li", null, __jsx("span", {
      className: "mr-1"
    }, "Phone:"), "+ (321) 984 754"), __jsx("li", null, __jsx("span", {
      className: "mr-1"
    }, "Fax:"), "+1-212-9876543"))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("p", null, "\xA9 ", currentYear, " Haiper - All rights Reserved"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/NavbarTwo.js":
/*!*****************************************!*\
  !*** ./components/Layouts/NavbarTwo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class NavbarTwo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      id: "navbar",
      className: "navbar-area navbar-style-two"
    }, __jsx("div", {
      className: "luvion-nav"
    }, __jsx("div", {
      className: "container"
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/"
    }, __jsx("a", {
      className: "navbar-brand"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/black-logo.png */ "./images/black-logo.png"),
      alt: "logo"
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "navbar-toggler-icon"
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, __jsx("ul", {
      className: "navbar-nav"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home ", __jsx("i", {
      className: "fas fa-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home one"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/index2",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home two"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/index3",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home three"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/index4",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home four"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/about-us",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "About us"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Features ", __jsx("i", {
      className: "fas fa-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/features-one",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Features style one"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/features-two",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Features style two"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pages ", __jsx("i", {
      className: "fas fa-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/about-us",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "About us"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/team",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Team"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/pricing",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pricing"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/faq",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "FAQ"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/sign-up",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Signup"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/login",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Login"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/error",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "404 error"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/pricing",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pricing"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog ", __jsx("i", {
      className: "fas fa-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/blog-one",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog grid"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/blog-two",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog right sidebar"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/single-blog",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog details"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/contact",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Contact")))), __jsx("div", {
      className: "others-options"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/login"
    }, __jsx("a", {
      className: "login-btn"
    }, __jsx("i", {
      className: "flaticon-user"
    }), " Login")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavbarTwo);

/***/ }),

/***/ "./components/Rates/Rates.js":
/*!***********************************!*\
  !*** ./components/Rates/Rates.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Rates extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      rates: {},
      updateDate: null
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.exchangeratesapi.io/latest?base=USD').then(res => {
      console.log(res.data.base);
      this.setState({
        rates: res.data.rates,
        updateDate: res.data.date
      });
    });
  }

  render() {
    let {
      rates,
      updateDate
    } = this.state;
    let tablHead = [];
    let tableData = [];
    Object.keys(rates).forEach(function (rate) {
      tablHead.push(rate); // key

      tableData.push(rates[rate]);
    });
    return __jsx("section", {
      className: "currency-rates-area pt-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Currency Rates"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Latest Currency Rates Based on ", __jsx("strong", null, "USA"))), __jsx("div", {
      className: "table-responsive currency-rates-table"
    }, __jsx("table", {
      className: "table"
    }, __jsx("thead", null, __jsx("tr", null, tablHead.length ? tablHead.map((head, i) => __jsx("th", {
      key: i,
      scope: "col"
    }, head)) : null)), __jsx("tbody", null, __jsx("tr", null, tableData.length ? tableData.map((data, i) => __jsx("td", {
      key: i
    }, data.toFixed(3))) : null)))), __jsx("div", {
      className: "row currency-rates-info"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6 col-6"
    }, __jsx("a", {
      href: "https://exchangeratesapi.io/",
      target: "_blank"
    }, "Source")), __jsx("div", {
      className: "col-lg-6 col-md-6 col-6 text-right"
    }, __jsx("p", null, "Date: ", updateDate)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Rates);

/***/ }),

/***/ "./images/1.png":
/*!**********************!*\
  !*** ./images/1.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/2.png":
/*!**********************!*\
  !*** ./images/2.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/3.png":
/*!**********************!*\
  !*** ./images/3.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/banner-image/1.png":
/*!***********************************!*\
  !*** ./images/banner-image/1.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-8e33409802cc598e9a04ff0fc6e41d82.png";

/***/ }),

/***/ "./images/banner-image/2.png":
/*!***********************************!*\
  !*** ./images/banner-image/2.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAEYCAYAAABycGI8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OTNEQTRGOUUzNjUxMUU5OEVERThEMkZFRTI0QUJCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OTNEQTRGQUUzNjUxMUU5OEVERThEMkZFRTI0QUJCMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5M0RBNEY3RTM2NTExRTk4RURFOEQyRkVFMjRBQkIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk5M0RBNEY4RTM2NTExRTk4RURFOEQyRkVFMjRBQkIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++pDx+QAADYNJREFUeNrs3Q2O2zgS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"

/***/ }),

/***/ "./images/banner-image/3.png":
/*!***********************************!*\
  !*** ./images/banner-image/3.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAAEXCAYAAABs5LvXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMDk5NTY4RUUzNjUxMUU5QkQ5MkE2RkEzNThFRDM0RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMDk5NTY4RkUzNjUxMUU5QkQ5MkE2RkEzNThFRDM0RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEwOTk1NjhDRTM2NTExRTlCRDkyQTZGQTM1OEVEMzRGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEwOTk1NjhERTM2NTExRTlCRDkyQTZGQTM1OEVEMzRGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gAaqTQAADYZJREFUeNrs3QuO20gS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"

/***/ }),

/***/ "./images/banner-image/circle1.png":
/*!*****************************************!*\
  !*** ./images/banner-image/circle1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/banner-image/main-pic.png":
/*!******************************************!*\
  !*** ./images/banner-image/main-pic.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-pic-8dff1a153f1a930ceaed4b1fbc75adf3.png";

/***/ }),

/***/ "./images/black-logo.png":
/*!*******************************!*\
  !*** ./images/black-logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/blog-image/1.jpg":
/*!*********************************!*\
  !*** ./images/blog-image/1.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB9AH+AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKjuH8u2lfONqE/pXOwJqlzH5kUkzLnGfNx/M0AdNRXO/ZNY/vTf9/v8A69dAmRGu7qBzmgB1FUb7UYILdwsitIRhVU5Oah0H/jxf/rqf5CgDUoorC1C7nurs2dqTgcHacZPfn0oA3aK5qSyvtPXzw/A6lGzj61uWN0Ly1WXo3Rh6GgCzRRRQAUUUUAFFFFABRWfrMzw2QMbsjM4GVOD3rMW21dlDB5sEZH77/wCvQB0dFYlnb6ml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FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSMwVSzEAAZJPagBaKRmCqWYgADJJ7UtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWfIxM1wEM5lDgR7d20fKvXt1rQpqoqliBgscn3OAP6CgCv9olz5mE8rzPLxg7uu3OfrQbspKI2UZ3kMR2XjB/Vf1qX7PF5vmbfmznqcZ9cdM0PbxOZCyZMi7W56igCBruQRw4ADSgsCEZsDtwOe4pxnmaKAqgV5HKnepGMA8469qmeGORQrDhemCQR9CKUQoAgA+4cryeuCP6mgCrJdypI6hdxjwGCxMdxxngjgde9JeSSvBdqmwIiFW3A5Py54/A1Ze3jkfcwOehwxGfrjrSS2sMxJkTO4YOGIz9cUAJe/wDHjcf9cm/lSJJMJPLfy9zIWUqDgYxwfXqKmdFkjZGGVYEEe1MSBIQxiT5sYG5j+XfAoAZDcmZkVQAQCZR/dPTH55/KiaR0u4gqO4KPlVI9V55I/wAmnW8JiVi2PMdizEdM1IUUyByPmAIB9jjP8hQBWXNxcyrIssYCIQu/HduflP8AnFRBD/ZkTCWUPKItzeYSeSM4yeOtXgiiQuB8xABPsM4/maTyYxEsW35ExtGemOn8qAKLzyS+WAxQxOgl2nGWLAY+nU/lVuFiZbgEkgSAD2+VakdFcYYZGQfxByKja1jZ2f8AeAscnbIy54x0B9qAC4ZsRoGK732lh1AwT/TH40jL9mgldC7EKSAzFuQPenmGNg4Kghzls9zgD+gojhSLO3dz1LMWP60AQFDCI5VmkdmZQdzZDZOOnb14qFJ5IvMBYsZXcRZOcMGIx9Oh/OraWsMbhlTkdMsSB9B0FSIioMKMDJP4k5NAENnuFthnZyruu5jknDEVYpqIqDCjAyT+JOTTqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"

/***/ }),

/***/ "./images/blog-image/2.jpg":
/*!*********************************!*\
  !*** ./images/blog-image/2.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB9AH+AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKjuH8u2lfONqE/pXOwJqlzH5kUkzLnGfNx/M0AdNRXO/ZNY/vTf9/v8A69dAmRGu7qBzmgB1FUb7UYILdwsitIRhVU5Oah0H/jxf/rqf5CgDUoorC1C7nurs2dqTgcHacZPfn0oA3aK5qSyvtPXzw/A6lGzj61uWN0Ly1WXo3Rh6GgCzRRRQAUUUUAFFFFABRWfrMzw2QMbsjM4GVOD3rMW21dlDB5sEZH77/wCvQB0dFYlnb6ml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FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSMwVSzEAAZJPagBaKRmCqWYgADJJ7UtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWfIxM1wEM5lDgR7d20fKvXt1rQpqoqliBgscn3OAP6CgCv9olz5mE8rzPLxg7uu3OfrQbspKI2UZ3kMR2XjB/Vf1qX7PF5vmbfmznqcZ9cdM0PbxOZCyZMi7W56igCBruQRw4ADSgsCEZsDtwOe4pxnmaKAqgV5HKnepGMA8469qmeGORQrDhemCQR9CKUQoAgA+4cryeuCP6mgCrJdypI6hdxjwGCxMdxxngjgde9JeSSvBdqmwIiFW3A5Py54/A1Ze3jkfcwOehwxGfrjrSS2sMxJkTO4YOGIz9cUAJe/wDHjcf9cm/lSJJMJPLfy9zIWUqDgYxwfXqKmdFkjZGGVYEEe1MSBIQxiT5sYG5j+XfAoAZDcmZkVQAQCZR/dPTH55/KiaR0u4gqO4KPlVI9V55I/wAmnW8JiVi2PMdizEdM1IUUyByPmAIB9jjP8hQBWXNxcyrIssYCIQu/HduflP8AnFRBD/ZkTCWUPKItzeYSeSM4yeOtXgiiQuB8xABPsM4/maTyYxEsW35ExtGemOn8qAKLzyS+WAxQxOgl2nGWLAY+nU/lVuFiZbgEkgSAD2+VakdFcYYZGQfxByKja1jZ2f8AeAscnbIy54x0B9qAC4ZsRoGK732lh1AwT/TH40jL9mgldC7EKSAzFuQPenmGNg4Kghzls9zgD+gojhSLO3dz1LMWP60AQFDCI5VmkdmZQdzZDZOOnb14qFJ5IvMBYsZXcRZOcMGIx9Oh/OraWsMbhlTkdMsSB9B0FSIioMKMDJP4k5NAENnuFthnZyruu5jknDEVYpqIqDCjAyT+JOTTqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"

/***/ }),

/***/ "./images/blog-image/3.jpg":
/*!*********************************!*\
  !*** ./images/blog-image/3.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB9AH+AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKjuH8u2lfONqE/pXOwJqlzH5kUkzLnGfNx/M0AdNRXO/ZNY/vTf9/v8A69dAmRGu7qBzmgB1FUb7UYILdwsitIRhVU5Oah0H/jxf/rqf5CgDUoorC1C7nurs2dqTgcHacZPfn0oA3aK5qSyvtPXzw/A6lGzj61uWN0Ly1WXo3Rh6GgCzRRRQAUUUUAFFFFABRWfrMzw2QMbsjM4GVOD3rMW21dlDB5sEZH77/wCvQB0dFYlnb6ml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FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSMwVSzEAAZJPagBaKRmCqWYgADJJ7UtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWfIxM1wEM5lDgR7d20fKvXt1rQpqoqliBgscn3OAP6CgCv9olz5mE8rzPLxg7uu3OfrQbspKI2UZ3kMR2XjB/Vf1qX7PF5vmbfmznqcZ9cdM0PbxOZCyZMi7W56igCBruQRw4ADSgsCEZsDtwOe4pxnmaKAqgV5HKnepGMA8469qmeGORQrDhemCQR9CKUQoAgA+4cryeuCP6mgCrJdypI6hdxjwGCxMdxxngjgde9JeSSvBdqmwIiFW3A5Py54/A1Ze3jkfcwOehwxGfrjrSS2sMxJkTO4YOGIz9cUAJe/wDHjcf9cm/lSJJMJPLfy9zIWUqDgYxwfXqKmdFkjZGGVYEEe1MSBIQxiT5sYG5j+XfAoAZDcmZkVQAQCZR/dPTH55/KiaR0u4gqO4KPlVI9V55I/wAmnW8JiVi2PMdizEdM1IUUyByPmAIB9jjP8hQBWXNxcyrIssYCIQu/HduflP8AnFRBD/ZkTCWUPKItzeYSeSM4yeOtXgiiQuB8xABPsM4/maTyYxEsW35ExtGemOn8qAKLzyS+WAxQxOgl2nGWLAY+nU/lVuFiZbgEkgSAD2+VakdFcYYZGQfxByKja1jZ2f8AeAscnbIy54x0B9qAC4ZsRoGK732lh1AwT/TH40jL9mgldC7EKSAzFuQPenmGNg4Kghzls9zgD+gojhSLO3dz1LMWP60AQFDCI5VmkdmZQdzZDZOOnb14qFJ5IvMBYsZXcRZOcMGIx9Oh/OraWsMbhlTkdMsSB9B0FSIioMKMDJP4k5NAENnuFthnZyruu5jknDEVYpqIqDCjAyT+JOTTqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"

/***/ }),

/***/ "./images/circle.png":
/*!***************************!*\
  !*** ./images/circle.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/circle-260a8d627a87e93e6d2f89410b9e0702.png";

/***/ }),

/***/ "./images/client-image/1.jpg":
/*!***********************************!*\
  !*** ./images/client-image/1.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./images/client-image/2.jpg":
/*!***********************************!*\
  !*** ./images/client-image/2.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./images/client-image/3.jpg":
/*!***********************************!*\
  !*** ./images/client-image/3.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./images/client-image/4.jpg":
/*!***********************************!*\
  !*** ./images/client-image/4.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./images/client-image/5.jpg":
/*!***********************************!*\
  !*** ./images/client-image/5.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAXwBfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKilmERUbHdmzhVHOB1NAEtFQNcgMgSN5NwDZTGAD9TUrSIpIZ1GBk5Pb1oAdRUUs4iKgI7s2SFQc4HemtcgMgSN5NwDZTGAD9TQBPRRRQAUUUUAFFFFABVa6jd2jZFckZGUYAjP17VZooAoSWjbI4xCHZY1RZc/cI7/AP6qku4ZJXjKICIzu6/e5Hy/59BVuigCtdRu7RsiuSMjKMARn69qhktG2RxiEOyxqiy5+4R3/wD1VfooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="

/***/ }),

/***/ "./images/invoicing-image/1.png":
/*!**************************************!*\
  !*** ./images/invoicing-image/1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-6f92545c82ffc3a80c99a8b58cf6f2fd.png";

/***/ }),

/***/ "./images/invoicing-image/2.png":
/*!**************************************!*\
  !*** ./images/invoicing-image/2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-6b240270fce1d627e504e49161dab4ee.png";

/***/ }),

/***/ "./images/invoicing-image/3.png":
/*!**************************************!*\
  !*** ./images/invoicing-image/3.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-5591dfd14d6b7d624be625301de20f68.png";

/***/ }),

/***/ "./images/invoicing-image/4.png":
/*!**************************************!*\
  !*** ./images/invoicing-image/4.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-cd905bd60dbae99a2079de9b72343d20.png";

/***/ }),

/***/ "./images/invoicing-image/circle1.png":
/*!********************************************!*\
  !*** ./images/invoicing-image/circle1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/invoicing-image/circle2.png":
/*!********************************************!*\
  !*** ./images/invoicing-image/circle2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/invoicing-image/main-pic.png":
/*!*********************************************!*\
  !*** ./images/invoicing-image/main-pic.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-pic-cebbc168a752f4187e72b62fe3b091ff.png";

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/main-mobile.png":
/*!********************************!*\
  !*** ./images/main-mobile.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-mobile-5fe2d93998b84a35efaa382e203bfc7a.png";

/***/ }),

/***/ "./images/map.png":
/*!************************!*\
  !*** ./images/map.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-3f6e1ddb342185a26c476daa59c3a805.png";

/***/ }),

/***/ "./images/mobile-app1.png":
/*!********************************!*\
  !*** ./images/mobile-app1.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mobile-app1-b8bc6b9570242bed1f4549737c54363d.png";

/***/ }),

/***/ "./images/mobile-app2.png":
/*!********************************!*\
  !*** ./images/mobile-app2.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mobile-app2-4ccb0410188c8b7c79626fd81622245a.png";

/***/ }),

/***/ "./images/partner-image/1.png":
/*!************************************!*\
  !*** ./images/partner-image/1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/10.png":
/*!*************************************!*\
  !*** ./images/partner-image/10.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/2.png":
/*!************************************!*\
  !*** ./images/partner-image/2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/3.png":
/*!************************************!*\
  !*** ./images/partner-image/3.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/4.png":
/*!************************************!*\
  !*** ./images/partner-image/4.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/5.png":
/*!************************************!*\
  !*** ./images/partner-image/5.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/6.png":
/*!************************************!*\
  !*** ./images/partner-image/6.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/7.png":
/*!************************************!*\
  !*** ./images/partner-image/7.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/8.png":
/*!************************************!*\
  !*** ./images/partner-image/8.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner-image/9.png":
/*!************************************!*\
  !*** ./images/partner-image/9.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABGBAMAAAB7zMYFAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAChklEQVRYhe2UzW+bQBDF32K+jkAS28clSVsfSdtIPS615bPtQ85YteQcwZV8xuk/3pmFKNDUliVQmkr7JO8aBua3y8w+wMjIyMjIyMjIyMjo3+khWgC7YQl48WPjvheSZBXpKjeMh5QwHgNFFDYSakhWRbqq2NhxLsZeBIRlIf8I1pGuWpc4JMUCd8q7wuCyHfwIHekMiQGR3ZWUbTAGcWj5GQ6ZjjmX0JHOkB8MWQNp4gawL+iOO+btsdIEOtIZQioS2k6aWQQZ0qUfeRdVYKmgIz0w/LCMeDtCAgzB3a4uDV3pSA+Q5QhtSBpWVfDGvUHmUYnW54JTNy0VqafPZccboFV4Op9Kh7ji/RTe4q5ttTAOcZV2maOnFi44YfswxvPKSdYKPR1GzoSWrXgXvi4NFx392Er8YoO1QVqXWNOHqrqgH4NsGHpt9csFDpLz6wL1YvVG71yi/v0vkDD6eh6EDFIIanE+lmSfgb45jbfkquEGQmr/PKLA/nI+RI90VvY1xP6gftEwWynxCG99HILv+HwDS3n0x7lOIFYBT4PrJUNWN3BzijQgowzbGjJYVIOTiD3c4hTE2cwXgzzFTzzM7iE2enqY8cIEhXyJ+yYkmPiyhliqGmwprPLpeAHpc1nKln6yyr/hltYslJ5ukTKEQtjSr7KcCrJ38xoinodAeNn2OIQKrxcoJ5nkRPwOT8FzTQI8DfLWTqwdXu8En+SJnfBTvNzsMaPl60w8NXZirdCCOFd4XROy0pMQrglW+W6BvZpyJp5eagJv1IboCz02ugunDhU/TN2Fg0oV+fuEH+Xppbvgyb9Aqk86DZ/PyUnIGXLzLm+fqd0bMMTkDSBGRu9HvwGElm+JyllKJQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index4.js":
/*!*************************!*\
  !*** ./pages/index4.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_NavbarTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layouts/NavbarTwo */ "./components/Layouts/NavbarTwo.js");
/* harmony import */ var _components_HomeFour_MainBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeFour/MainBanner */ "./components/HomeFour/MainBanner.js");
/* harmony import */ var _components_HomeFour_InformationArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeFour/InformationArea */ "./components/HomeFour/InformationArea.js");
/* harmony import */ var _components_Common_ServicesCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ServicesCard */ "./components/Common/ServicesCard.js");
/* harmony import */ var _components_Common_OurFeaturesContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/OurFeaturesContent */ "./components/Common/OurFeaturesContent.js");
/* harmony import */ var _components_Common_EasyPaymentBorrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/EasyPaymentBorrow */ "./components/Common/EasyPaymentBorrow.js");
/* harmony import */ var _components_HomeFour_FunFacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeFour/FunFacts */ "./components/HomeFour/FunFacts.js");
/* harmony import */ var _components_Common_CustomersFeedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/CustomersFeedback */ "./components/Common/CustomersFeedback.js");
/* harmony import */ var _components_Common_PartnerContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/PartnerContent */ "./components/Common/PartnerContent.js");
/* harmony import */ var _components_HomeFour_AppDownloadContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/HomeFour/AppDownloadContent */ "./components/HomeFour/AppDownloadContent.js");
/* harmony import */ var _components_Common_AccountCreateArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Common/AccountCreateArea */ "./components/Common/AccountCreateArea.js");
/* harmony import */ var _components_Common_BlogCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Common/BlogCard */ "./components/Common/BlogCard.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_Rates_Rates__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Rates/Rates */ "./components/Rates/Rates.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















class Index4 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layouts_NavbarTwo__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_HomeFour_MainBanner__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_HomeFour_InformationArea__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Rates_Rates__WEBPACK_IMPORTED_MODULE_14__["default"], null), __jsx(_components_Common_ServicesCard__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Common_OurFeaturesContent__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_Common_EasyPaymentBorrow__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_HomeFour_FunFacts__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_Common_CustomersFeedback__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_Common_PartnerContent__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_HomeFour_AppDownloadContent__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_Common_AccountCreateArea__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_components_Common_BlogCard__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index4);

/***/ }),

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-wow":
/*!****************************!*\
  !*** external "react-wow" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL0FjY291bnRDcmVhdGVBcmVhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL0Jsb2dDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL0N1c3RvbWVyc0ZlZWRiYWNrLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL0Vhc3lQYXltZW50Qm9ycm93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL091ckZlYXR1cmVzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9QYXJ0bmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9TZXJ2aWNlc0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lRm91ci9BcHBEb3dubG9hZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lRm91ci9GdW5GYWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVGb3VyL0luZm9ybWF0aW9uQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVGb3VyL01haW5CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dHMvTmF2YmFyVHdvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmF0ZXMvUmF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzLzEucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy8yLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvMy5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jhbm5lci1pbWFnZS8xLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmFubmVyLWltYWdlLzIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9iYW5uZXItaW1hZ2UvMy5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jhbm5lci1pbWFnZS9jaXJjbGUxLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmFubmVyLWltYWdlL21haW4tcGljLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmxhY2stbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2ctaW1hZ2UvMS5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2ctaW1hZ2UvMi5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2ctaW1hZ2UvMy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2NpcmNsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2NsaWVudC1pbWFnZS8xLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvY2xpZW50LWltYWdlLzIuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9jbGllbnQtaW1hZ2UvMy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2NsaWVudC1pbWFnZS80LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvY2xpZW50LWltYWdlLzUuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbnZvaWNpbmctaW1hZ2UvMS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2ludm9pY2luZy1pbWFnZS8yLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW52b2ljaW5nLWltYWdlLzMucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9pbnZvaWNpbmctaW1hZ2UvNC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2ludm9pY2luZy1pbWFnZS9jaXJjbGUxLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW52b2ljaW5nLWltYWdlL2NpcmNsZTIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9pbnZvaWNpbmctaW1hZ2UvbWFpbi1waWMucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbWFpbi1tb2JpbGUucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9tYXAucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9tb2JpbGUtYXBwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL21vYmlsZS1hcHAyLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGFydG5lci1pbWFnZS8xLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGFydG5lci1pbWFnZS8xMC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMy5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNy5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvOC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvOS5wbmciLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXg0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL0FjdGl2ZUxpbmsuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbW9kYWwtdmlkZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtd293XCIiXSwibmFtZXMiOlsiQWNjb3VudENyZWF0ZUFyZWEiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJCbG9nQ2FyZCIsInJlcXVpcmUiLCJPd2xDYXJvdXNlbCIsImR5bmFtaWMiLCJvcHRpb25zIiwiaXRlbXMiLCJsb29wIiwibmF2IiwiZG90cyIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImF1dG9wbGF5IiwibWFyZ2luIiwibmF2VGV4dCIsIkN1c3RvbWVyc0ZlZWRiYWNrIiwiZGlzcGxheSIsImNvbXBvbmVudERpZE1vdW50IiwiX2lzTW91bnRlZCIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJzdGF0ZSIsIkVhc3lQYXltZW50Qm9ycm93IiwiT3VyRmVhdHVyZXNDb250ZW50IiwiUGFydG5lckNvbnRlbnQiLCJTZXJ2aWNlc0NhcmQiLCJBcHBEb3dubG9hZENvbnRlbnQiLCJGdW5GYWN0cyIsIkluZm9ybWF0aW9uQXJlYSIsIk1haW5CYW5uZXIiLCJpc09wZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJvcGVuTW9kYWwiLCJGb290ZXIiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIk5hdmJhclR3byIsImNvbGxhcHNlZCIsImVsZW1lbnRJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvIiwiY2xhc3NPbmUiLCJjbGFzc1R3byIsInRvZ2dsZU5hdmJhciIsIlJhdGVzIiwicmF0ZXMiLCJ1cGRhdGVEYXRlIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJiYXNlIiwiZGF0ZSIsInRhYmxIZWFkIiwidGFibGVEYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJyYXRlIiwicHVzaCIsImxlbmd0aCIsIm1hcCIsImhlYWQiLCJpIiwidG9GaXhlZCIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkluZGV4NCIsIkFjdGl2ZUxpbmsiLCJvbmx5IiwiY2xhc3NOYW1lIiwiYWN0aXZlQ2xhc3NOYW1lIiwidHJpbSIsImNsb25l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RUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BMYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyw0R0FBK0I7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXFJLE1BQU4sU0FBcUIzVywrQ0FBckIsQ0FBK0I7QUFDM0JDLFFBQU0sR0FBRztBQUNMLFdBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDSSxNQUFDLHFFQUFELE9BREosRUFFSSxNQUFDLHVFQUFELE9BRkosRUFHSSxNQUFDLDRFQUFELE9BSEosRUFJSSxNQUFDLGdFQUFELE9BSkosRUFLSSxNQUFDLHVFQUFELE9BTEosRUFNSSxNQUFDLDZFQUFELE9BTkosRUFPSSxNQUFDLDRFQUFELE9BUEosRUFRSSxNQUFDLHFFQUFELE9BUkosRUFTSSxNQUFDLDRFQUFELE9BVEosRUFVSSxNQUFDLHlFQUFELE9BVkosRUFXSSxNQUFDLGdGQUFELE9BWEosRUFZSSxNQUFDLDZFQUFELE9BWkosRUFhSSxNQUFDLG9FQUFELE9BYkosRUFjSSxNQUFDLG1FQUFELE9BZEosQ0FESjtBQWtCSDs7QUFwQjBCOztBQXVCaEIwVyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsVUFBb0M7QUFBQSxNQUFuQztBQUFFcFIsVUFBRjtBQUFVZ0M7QUFBVixHQUFtQztBQUFBLE1BQVpmLEtBQVk7O0FBQ25ELFFBQU1nQixLQUFLLEdBQUdDLDhDQUFRLENBQUNtUCxJQUFULENBQWNyUCxRQUFkLENBQWQ7QUFFQSxNQUFJc1AsU0FBUyxHQUFHclAsS0FBSyxDQUFDaEIsS0FBTixDQUFZcVEsU0FBWixJQUF5QixFQUF6Qzs7QUFDQSxNQUFJdFIsTUFBTSxDQUFDNEIsUUFBUCxLQUFvQlgsS0FBSyxDQUFDZixJQUExQixJQUFrQ2UsS0FBSyxDQUFDc1EsZUFBNUMsRUFBNkQ7QUFDekRELGFBQVMsR0FBSSxHQUFFQSxTQUFVLElBQUdyUSxLQUFLLENBQUNzUSxlQUFnQixFQUF0QyxDQUF3Q0MsSUFBeEMsRUFBWjtBQUNIOztBQUVELFNBQU92USxLQUFLLENBQUNzUSxlQUFiO0FBRUEsU0FBTyxNQUFDLGdEQUFELEVBQVV0USxLQUFWLGVBQWtCUyw0Q0FBSyxDQUFDK1AsWUFBTixDQUFtQnhQLEtBQW5CLEVBQTBCO0FBQUVxUDtBQUFGLEdBQTFCLENBQWxCLENBQVA7QUFDSCxDQVhEOztBQWFlSSw2SEFBVSxDQUFDTixVQUFELENBQXpCLEU7Ozs7Ozs7Ozs7O0FDakJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InBhZ2VzL2luZGV4NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4NFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleDQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBBY2NvdW50Q3JlYXRlQXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWNyZWF0ZS1hcmVhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWNjb3VudC1jcmVhdGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+QXBwbHkgZm9yIGFuIGFjY291bnQgaW4gbWludXRlczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2V0IHlvdXIgTHV2aW9uIGFjY291bnQgdG9kYXkhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5HZXQgWW91ciBBY2NvdW50PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRDcmVhdGVBcmVhOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBCbG9nQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1hcmVhIHB0Yi03MCBwYi01MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlRoZSBuZXdzIGZyb20gb3VyIGJsb2c8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1ibG9nLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9ibG9nLWltYWdlLzEuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZW50cnktbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5BZG1pbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY2VtYmVyIDE1LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5UaGUgc2VjdXJpdHkgcmlza3Mgb2YgY2hhbmdpbmcgcGFja2FnZSBvd25lcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlJlYWQgTW9yZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWJsb2ctcG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Jsb2ctaW1hZ2UvMi5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJlbnRyeS1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFkbWluPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVjZW1iZXIgMTYsIDIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlRpcHMgdG8gcHJvdGVjdGluZyBidXNpbmVzcyBhbmQgZmFtaWx5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5SZWFkIE1vcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgb2Zmc2V0LWxnLTAgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1ibG9nLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9ibG9nLWltYWdlLzMuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZW50cnktbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5BZG1pbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY2VtYmVyIDE2LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Qcm90ZWN0IHlvdXIgd29ya3BsYWNlIGZyb20gY3liZXIgYXR0YWNrczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UmVhZCBNb3JlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dDYXJkOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydCgncmVhY3Qtb3dsLWNhcm91c2VsMycpKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBpdGVtczogMSxcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgbWFyZ2luOiAwLFxuICAgIG5hdlRleHQ6IFtcbiAgICAgICAgXCI8aSBjbGFzcz0nZmFzIGZhLWNoZXZyb24tbGVmdCc+PC9pPlwiLFxuICAgICAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiXG4gICAgXSxcbn1cblxuY2xhc3MgQ3VzdG9tZXJzRmVlZGJhY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHN0YXRlID0ge1xuICAgICAgICBkaXNwbGF5OmZhbHNlXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXsgXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5OiB0cnVlIH0pIFxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWVkYmFjay1hcmVhIHB0Yi03MCBiZy1mN2ZhZmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5XaGF0IGN1c3RvbWVycyBzYXkgYWJvdXQgVXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IDxPd2xDYXJvdXNlbCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlZWRiYWNrLXNsaWRlcyBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXF1b3RlLWxlZnQgcXVvdGUtaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cT5RdWlzIGlwc3VtIHN1c3BlbmRpc3NlIHVsdHJpY2VzIGdyYXZpZGEuIFJpc3VzIGNvbW1vZG8gdml2ZXJyYSBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cyB2ZWwgZmFjaWxpc2lzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2NsaWVudC1pbWFnZS8xLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkpvaG4gTHVjeTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Gb3VuZGVyICYgQ29uc3VsdGFudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXF1b3RlLWxlZnQgcXVvdGUtaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cT5RdWlzIGlwc3VtIHN1c3BlbmRpc3NlIHVsdHJpY2VzIGdyYXZpZGEuIFJpc3VzIGNvbW1vZG8gdml2ZXJyYSBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cyB2ZWwgZmFjaWxpc2lzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2NsaWVudC1pbWFnZS8yLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkpvaG4gU21pdGg8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q1RPICAmIENvbnN1bHRhbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1xdW90ZS1sZWZ0IHF1b3RlLWljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHE+UXVpcyBpcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhLiBSaXN1cyBjb21tb2RvIHZpdmVycmEgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuPC9xPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9jbGllbnQtaW1hZ2UvMy5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NYXh3ZWwgV2FybmVyPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNoaWVmIE1hbmFnZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1xdW90ZS1sZWZ0IHF1b3RlLWljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHE+UXVpcyBpcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhLiBSaXN1cyBjb21tb2RvIHZpdmVycmEgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpcy4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuPC9xPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9jbGllbnQtaW1hZ2UvNC5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Sb3NzIFRheWxvcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5XZWIgRGV2ZWxvcGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcXVvdGUtbGVmdCBxdW90ZS1pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxPlF1aXMgaXBzdW0gc3VzcGVuZGlzc2UgdWx0cmljZXMgZ3JhdmlkYS4gUmlzdXMgY29tbW9kbyB2aXZlcnJhIG1hZWNlbmFzIGFjY3Vtc2FuIGxhY3VzIHZlbCBmYWNpbGlzaXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLjwvcT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvY2xpZW50LWltYWdlLzUuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SmFtZXMgQW5kZXJzb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2ViIERldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD4gOiAnJ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyc0ZlZWRiYWNrOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0V09XIGZyb20gJ3JlYWN0LXdvdydcblxuY2xhc3MgRWFzeVBheW1lbnRCb3Jyb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludm9pY2luZy1hcmVhIHB0Yi03MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludm9pY2luZy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FYXN5IFBheW1lbnQgdG8gYm9ycm93IGZyZWUgZ2V0IGEgYmV0dGVyIGZpbGxpbmcgYXQgaG9tZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJ1dCBJIG11c3QgZXhwbGFpbiB0byB5b3UgaG93IGFsbCB0aGlzIG1pc3Rha2VuIGlkZWEgb2YgZGVub3VuY2luZyBwbGVhc3VyZSBhbmQgcHJhaXNpbmcgcGFpbiB3YXMgYm9ybiBhbmQgSSB3aWxsIGdpdmUgeW91IGEgY29tcGxldGUgYWNjb3VudCBvZiB0aGUgc3lzdGVtLCBhbmQgZXhwb3VuZCB0aGUgYWN0dWFsIHRlYWNoaW5ncyBvZiB0aGUgZ3JlYXQgZXhwbG9yZXIuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5HZXQgU3RhcnRlZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvaWNpbmctaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RXT1cgZGVsYXk9JzAuN3MnIGFuaW1hdGlvbj0nem9vbUluJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnZvaWNpbmctaW1hZ2UvMS5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RXT1c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFdPVyBkZWxheT0nMXMnIGFuaW1hdGlvbj0nZmFkZUluTGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvaW52b2ljaW5nLWltYWdlLzIucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RXT1cgZGVsYXk9JzEuM3MnIGFuaW1hdGlvbj0nZmFkZUluTGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvaW52b2ljaW5nLWltYWdlLzMucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RXT1cgZGVsYXk9JzFzJyBhbmltYXRpb249J2ZhZGVJblJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnZvaWNpbmctaW1hZ2UvNC5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RXT1c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1tb2JpbGUtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFdPVyBkZWxheT0nMC43cycgYW5pbWF0aW9uPSd6b29tSW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2ludm9pY2luZy1pbWFnZS9tYWluLXBpYy5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RXT1c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnZvaWNpbmctaW1hZ2UvY2lyY2xlMS5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2ludm9pY2luZy1pbWFnZS9jaXJjbGUyLnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVhc3lQYXltZW50Qm9ycm93OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE91ckZlYXR1cmVzQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZXMtYXJlYSBwdGItNzAgYmctZjZmNGY4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+T3VyIGZlYXR1cmVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmVhdHVyZXMtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc2V0dGluZ3NcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5JbmNyZWRpYmxlIGluZnJhc3RydWN0dXJlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3IgYW1ldCwgYWRpcGlzY2luZywgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGRvbG9yZSBtYWduYSBhbGlxdWEuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mZWF0dXJlcy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGJnLWY3OGFjYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tZW52ZWxvcGUtb2Ytd2hpdGUtcGFwZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5FbWFpbCBub3RpZmljYXRpb25zPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3IgYW1ldCwgYWRpcGlzY2luZywgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGRvbG9yZSBtYWduYSBhbGlxdWEuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mZWF0dXJlcy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGJnLWNkZjFkOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tbWVudVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNpbXBsZSBkYXNoYm9hcmQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBhbWV0LCBhZGlwaXNjaW5nLCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZlYXR1cmVzLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gYmctYzY3OWUzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1pbmZvXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SW5mb3JtYXRpb24gcmV0cmlldmFsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3IgYW1ldCwgYWRpcGlzY2luZywgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGRvbG9yZSBtYWduYSBhbGlxdWEuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mZWF0dXJlcy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGJnLWViNmIzZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY3Vyc29yXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RHJhZyBhbmQgZHJvcCBmdW5jdGlvbmFsaXR5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3IgYW1ldCwgYWRpcGlzY2luZywgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGRvbG9yZSBtYWduYSBhbGlxdWEuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mZWF0dXJlcy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1hbGFybVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRlYWRsaW5lIHJlbWluZGVyczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIGFtZXQsIGFkaXBpc2NpbmcsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBkb2xvcmUgbWFnbmEgYWxpcXVhLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE91ckZlYXR1cmVzQ29udGVudDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgUGFydG5lckNvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1hcmVhIHB0Yi03MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk91ciB0cnVzdGVkIHBhcnRuZXI8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLuKAizwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMS5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMS5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMi5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMi5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMy5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMy5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNC5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNC5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNS5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNS5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNi5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNi5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNy5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvNy5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvOC5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvOC5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvOS5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvOS5wbmdcIil9IGFsdD1cIlBhcnRuZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXItaW1hZ2UvMTAucG5nXCIpfSBhbHQ9XCJQYXJ0bmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9wYXJ0bmVyLWltYWdlLzEwLnBuZ1wiKX0gYWx0PVwiUGFydG5lclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFydG5lckNvbnRlbnQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU2VydmljZXNDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgey8qIFJpZ2h0IEltYWdlIFN0eWxlICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtYXJlYSBwdGItNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcnZpZXctY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgbGVmdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RnJlZWxhbmNlcnMsIGVudHJlcHJlbmV1cnMsIGFuZCBzb2xlIHRyYWRlcnM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlcnZpY2VzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY2hlY2stbWFya1wiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmVlIHBsYW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jaGVjay1tYXJrXCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bGwgZGF0YSBwcml2YWN5IGNvbXBsaWFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWNoZWNrLW1hcmtcIj48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB0cmFuc3BhcmVudCBjb3N0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY2hlY2stbWFya1wiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21taXRtZW50LWZyZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWNoZWNrLW1hcmtcIj48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhbC10aW1lIHNwZW5kaW5nIG92ZXJ2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jaGVjay1tYXJrXCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlYml0IE1hc3RlcmNhcmQgaW5jbHVkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcnZpZXctaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvMS5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2NpcmNsZS5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBMZWZ0IEltYWdlIFN0eWxlICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMtYXJlYSBwdGItNzAgYmctZjdmYWZkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzLzIucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9jaXJjbGUucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+U21hbGwgdG8gbWVkaXVtLXNpemVkIGJ1c2luZXNzZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlcnZpY2VzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY2hlY2stbWFya1wiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFYXN5IHRyYW5zZmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY2hlY2stbWFya1wiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXBvc2l0IGNoZWNrcyBpbnN0YW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWNoZWNrLW1hcmtcIj48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBwb3dlcmZ1bCBvcGVuIEFQSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY2hlY2stbWFya1wiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3ZlcmFnZSBhcm91bmQgdGhlIHdvcmxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jaGVjay1tYXJrXCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2luZXNzIHdpdGhvdXQgYm9yZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY2hlY2stbWFya1wiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZmZpbGlhdGVzIGFuZCBwYXJ0bmVyc2hpcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBSaWdodCBJbWFnZSBTdHlsZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLWFyZWEgcHRiLTcwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGxlZnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxhcmdlIG9yIGVudGVycHJpc2UgbGV2ZWwgYnVzaW5lc3NlczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2VydmljZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jaGVjay1tYXJrXCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnBvcmF0ZSBDYXJkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY2hlY2stbWFya1wiPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnRlcm5hdGlvbmFsIFBheW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jaGVjay1tYXJrXCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1dG9tYXRlZCBhY2NvdW50aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jaGVjay1tYXJrXCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgRmVhdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWNoZWNrLW1hcmtcIj48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJlbWl1bSBTdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jaGVjay1tYXJrXCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpcmVjdCBEZWJpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy8zLnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvY2lyY2xlLnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzQ2FyZDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgQXBwRG93bmxvYWRDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1kb3dubG9hZC1hcmVhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbW9iaWxlLWFwcDEucG5nXCIpfSBjbGFzc05hbWU9XCJ3b3cgZmFkZUluTGVmdFwiIGRhdGEtd293LWRlbGF5PVwiMC42c1wiIGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL21vYmlsZS1hcHAyLnBuZ1wiKX0gY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCIgZGF0YS13b3ctZGVsYXk9XCIwLjlzXCIgYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbW9iaWxlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9tYWluLW1vYmlsZS5wbmdcIil9IGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiIGRhdGEtd293LWRlbGF5PVwiMC42c1wiIGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9jaXJjbGUucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtZG93bmxvYWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+WW91IGNhbiBmaW5kIGFsbCB0aGUgdGhpbmcgeW91IG5lZWQgdG8gcGF5b3V0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwLjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUgYWIgaWxsbyBpbnZlbnRvcmUgdmVyaXRhdGlzIGV0IHF1YXNpIGFyY2hpdGVjdG8gYmVhdGFlIHZpdGFlIGRpY3RhIHN1bnQuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcHAtc3RvcmUtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWFwcGxlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BcHAgU3RvcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBsYXktc3RvcmUtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXBsYXktc3RvcmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkdvb2dsZSBwbGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERvd25sb2FkQ29udGVudDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgRnVuRmFjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZ1bmZhY3RzLWFyZWEgcHRiLTcwIHB0LTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5XZSBhbHdheXMgdHJ5IHRvIHVuZGVyc3RhbmQgY3VzdG9tZXJzIGV4cGVjdGF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS0zIGNvbC1tZC0zIGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5mYWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3Bhbj4xODA8L3NwYW4+SzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvd25sb2FkZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tMyBjb2wtbWQtMyBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuZmFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4+MjA8L3NwYW4+SzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZlZWRiYWNrPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTMgY29sLW1kLTMgY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bmZhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuPjUwMDwvc3Bhbj4rPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V29ya2VyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS0zIGNvbC1tZC0zIGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5mYWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3Bhbj43MDwvc3Bhbj4rPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29udHJpYnV0b3JzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+SGF2ZSBhbnkgcXVlc3Rpb25zIGFib3V0IHVzPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb24ndCBoZXNpdGF0ZSB0byBjb250YWN0IHVzPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Db250YWN0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1iZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbWFwLnBuZ1wiKX0gYWx0PVwibWFwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGdW5GYWN0czsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgSW5mb3JtYXRpb25BcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9ybWF0aW9uLWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pbmZvcm1hdGlvbi1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1waWdneS1iYW5rXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQwLjAwIC8gbW88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVlIGFjY291bnQgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pbmZvcm1hdGlvbi1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjEwIG1pbnV0ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BcHBseSBmb3IgYWNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5mb3JtYXRpb24tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc2hpZWxkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxMDAsMDAwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R3VhcmFudGVlIG9uIGRlcG9zaXRzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pbmZvcm1hdGlvbi1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFwcC1zdG9yZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tYXBwbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFwcCBTdG9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGxheS1zdG9yZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tcGxheS1zdG9yZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R29vZ2xlIHBsYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb3JtYXRpb25BcmVhOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nO1xuaW1wb3J0IFJlYWN0V09XIGZyb20gJ3JlYWN0LXdvdydcblxuY2xhc3MgTWFpbkJhbm5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9XG4gICAgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc09wZW46IHRydWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTAgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtMTIgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+RmFzdCBhbmQgZWFzeSBidXNpbmVzcyBiYW5raW5nPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB0aGUgZmluYW5jaWFsIHRvb2xzIGFuZCBpbnNpZ2h0cyB0byBzdGFydCwgYnVpbGQsIGFuZCBncm93IHlvdXIgYnVzaW5lc3MuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5DcmVhdGUgeW91ciBhY2NvdW50PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTEyIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFdPVyBkZWxheT0nMC43cycgYW5pbWF0aW9uPSd6b29tSW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9iYW5uZXItaW1hZ2UvMS5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0V09XIGRlbGF5PScxLjNzJyBhbmltYXRpb249J2ZhZGVJbkxlZnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9iYW5uZXItaW1hZ2UvMi5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0V09XIGRlbGF5PScxcycgYW5pbWF0aW9uPSdmYWRlSW5VcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Jhbm5lci1pbWFnZS8zLnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RXT1c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW1vYmlsZS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFdPVyBkZWxheT0nMC43cycgYW5pbWF0aW9uPSdmYWRlSW5VcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Jhbm5lci1pbWFnZS9tYWluLXBpYy5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0V09XPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0V09XIGRlbGF5PScxcycgYW5pbWF0aW9uPSdmYWRlSW5VcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Jhbm5lci1pbWFnZS9jaXJjbGUxLnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RXT1c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNwbGF5LXZpZGVvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLm9wZW5Nb2RhbCgpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheSBtci0yXCI+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheSBWaWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogSWYgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSB2aWRlbyBuZWVkIHRvIHVwZGF0ZSBiZWxvdyB2aWRlb0lEICovfVxuICAgICAgICAgICAgICAgIDxNb2RhbFZpZGVvIFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsPSd5b3V0dWJlJyBcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9J3N6dWNoQmlMckVNJyBcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7aXNPcGVuOiBmYWxzZX0pfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5CYW5uZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3Rlci1hcmVhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvLnBuZ1wiKX0gYWx0PVwibG9nb1wiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UXVpcyBpcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhIGNvbW1vZG8uIFJpc3VzIGNvbW1vZG8gdmVsaWxpZWUgdmVsIHZpdmVycmEgbWFlY2VuYXMgYWNjdW1zYW4gbGFjdXMgdmVsIGZhY2lsaXNpczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXQgcGwtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29tcGFueTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VydmljZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5GZWF0dXJlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk91ciBQcmljaW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TGF0ZXN0IE5ld3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U3VwcG9ydDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZBUSdzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5UZXJtcyAmIENvbmRpdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbW11bml0eTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbnRhY3QgVXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWRkcmVzczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTFcIj5Mb2NhdGlvbjo8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI3IERpdmlzaW9uIFN0LCBOZXcgWW9yaywgTlkgMTAwMDIsIFVTQVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xXCI+RW1haWw6PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvaGFpcGVyQGhhaXBlci5jb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMVwiPlBob25lOjwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoMzIxKSA5ODQgNzU0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTFcIj5GYXg6PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArMS0yMTItOTg3NjU0M1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7CqSB7Y3VycmVudFllYXJ9IEhhaXBlciAtIEFsbCByaWdodHMgUmVzZXJ2ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL3V0aWxzL0FjdGl2ZUxpbmsnO1xuXG5jbGFzcyBOYXZiYXJUd28gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLy8gTmF2YmFyIFxuICAgIF9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZVxuICAgIH07XG4gICAgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIXRoaXMuc3RhdGUuY29sbGFwc2VkLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImlzLXN0aWNreVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGNsYXNzT25lID0gY29sbGFwc2VkID8gJ2NvbGxhcHNlIG5hdmJhci1jb2xsYXBzZScgOiAnY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIHNob3cnO1xuICAgICAgICBjb25zdCBjbGFzc1R3byA9IGNvbGxhcHNlZCA/ICduYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCBjb2xsYXBzZWQnIDogJ25hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0JztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXItYXJlYSBuYXZiYXItc3R5bGUtdHdvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHV2aW9uLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvYmxhY2stbG9nby5wbmdcIil9IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2YmFyfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NUd299XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzT25lfSBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWUgb25lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4MlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWUgdHdvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4M1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWUgdGhyZWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXg0XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SG9tZSBmb3VyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0LXVzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkFib3V0IHVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXMgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZlYXR1cmVzLW9uZVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZlYXR1cmVzIHN0eWxlIG9uZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZlYXR1cmVzLXR3b1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZlYXR1cmVzIHN0eWxlIHR3bzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZXMgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0LXVzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWJvdXQgdXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+VGVhbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaWNpbmdcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5QcmljaW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFxXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RkFRPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNpZ251cDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lcnJvclwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPjQwNCBlcnJvcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpY2luZ1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5QcmljaW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLW9uZVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkJsb2cgZ3JpZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctdHdvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QmxvZyByaWdodCBzaWRlYmFyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2luZ2xlLWJsb2dcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5CbG9nIGRldGFpbHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzLW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ2luLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tdXNlclwiPjwvaT4gTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJUd287IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFJhdGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgcmF0ZXM6IHt9LFxuICAgICAgICB1cGRhdGVEYXRlOiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9iYXNlPVVTRCcpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmJhc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmF0ZXM6IHJlcy5kYXRhLnJhdGVzLFxuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGU6IHJlcy5kYXRhLmRhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHJhdGVzLCB1cGRhdGVEYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgdGFibEhlYWQgPSBbXTtcbiAgICAgICAgbGV0IHRhYmxlRGF0YSA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhyYXRlcykuZm9yRWFjaChmdW5jdGlvbiAocmF0ZSkge1xuICAgICAgICAgICAgdGFibEhlYWQucHVzaChyYXRlKTsgLy8ga2V5XG4gICAgICAgICAgICB0YWJsZURhdGEucHVzaChyYXRlc1tyYXRlXSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjdXJyZW5jeS1yYXRlcy1hcmVhIHB0LTcwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q3VycmVuY3kgUmF0ZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhdGVzdCBDdXJyZW5jeSBSYXRlcyBCYXNlZCBvbiA8c3Ryb25nPlVTQTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZSBjdXJyZW5jeS1yYXRlcy10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibEhlYWQubGVuZ3RoID8gdGFibEhlYWQubWFwKChoZWFkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2l9IHNjb3BlPVwiY29sXCI+e2hlYWR9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YS5sZW5ndGggPyB0YWJsZURhdGEubWFwKChkYXRhLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2l9PntkYXRhLnRvRml4ZWQoMyl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGN1cnJlbmN5LXJhdGVzLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTYgY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9leGNoYW5nZXJhdGVzYXBpLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlNvdXJjZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02IGNvbC02IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EYXRlOiB7dXBkYXRlRGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRlczsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJMQUFBQU1nQkFNQUFBREJ6b1l4QUFBQUcxQk1WRVhNek15V2xwYWNuSnlxcXFyRnhjV3hzYkdqbzZPM3Q3ZSt2cjZIZTNLb0FBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFQKzBsRVFWUjRuTzNkVFhQYlJwb0FZRWlpTEIwRk9YSDJLRHFaakkvbXpHUW5SeXJKWm53MHZWWFpIS1ZNVXM3UjlNNWtyMUkrYXYvMml2aHNkQU4waVFLa2VQWjVxbUtMQkFpOGNiOTZ1OUVBZ1N3REFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdkNURuZWMvYnM5LytmWjQvL2VHcTl6Ty9mVGMvL2ZzL2VoY2RmL00wLy9Tdnk3R2lPLzd6ZC9tbm56MTBGT3hndnpleC9uYVpsLzZhTGp0ZWxJcys3OW5hTCtXaXgxZmpCUGRURmNYckI0MkNYWnozSmRaLzVJMW44Ykxab2w3MGZmSzVMK3RGVDVaanhQYTJpZUtQRHhnRk8xbjNKTmJSdkUyc3BPSFc3YUkzOGVmYVJSK05FTnJYUVJSeGZ0OWZGT3ptc2lleEZubW8yM0FId1pMSFd6NzMvTTZSSGY4dW9tQTNzenhOcks4N0xacC8yRm5ZU2JwdXU0V3RuVFQzN2EzejRlM2RYeFRzNWloTnJObGwzdlV5V05ocHRtMnRmZWRpY1pUbmc5dTd2eWpZMGFNMHNSNUZMZG9acVhUTFNLZURPaHIrMUM3T2Z4ZFJzS1ByTkxGV2NXTGx5MmJaY2JUa2czaFR2Wi9heVR6YVhINzFFRkd3bzNtU1dGV3JQZm4ycTluL1ZwM2lSYk93ckdhbjN5NWZ2Q3JYQ2o1WXJ2eUhYMmUvemFOUDdhTHE3VjcvT3F0MmxaODlRQlRzNkRCUEVxdHN0Y2ZMNHNXcWVORU8zOHZYUmRmenR2MHgyRlRSOVpUVEZYZnJoY3FlOEMvRnp6L24zZTNkWHhUc2FKMG1WdkhXNlZYNW9oekluOWJMaW1QSS9KTmcwVm56dVNJVFRwZkZ6MTkzUHJXVHhXWVQvMWE5V0QxVUZPeW1HdWwyM3B1M3JaYlZQVkpkRVE2RFpzdSs2Q2xtMWVkbXhVYkNvOG5iS3BObjJZbnovcU5nTi9YRVF2amVjZGhxV1ZVNXpxb1hSVDJvaDhxem5qS3lERmM4eTNaMzJPM0dpaWpxcVlQN2k0S2ROR2Vhd3pjUG9vSEpmdElsTlFPYWRWSkdtczhkM1hWNFU0ejBMcnBSbk4xN0ZOemVpMy8rS2ErRjcrOTFXN1NzWVBVVTVMd3phTmtQViswMGZibG1lTEIyVzBVWVY4M0xvekM5N3k4S2JxMHovUmd1V0hkYnREeCtyNXJ4dUZzQmpzSXU2YnBUUnNyTkxIZVA3enJ2anJ2bjdVanFIcVBnMWdZVGF4RzFhTmc0QjFFMXUyeGJ1L2hjVUJ5S3J1d080K1pWM2oxVnMyaGYzMk1VM05wZ1lnV2xvYlRmRm9IZ3g4STZTTUo1ZHpoejFPMlRibTJScHlkeG5pUUJUUjBGdHphVVdMTndNRk1JZnV1dm81N2x2SDE5SEhaSTlYYkNVeTIzZEptbloycE8yeC92S1FwdWJTaXhqcFBmOGVKQXF6elNYM1U3bWpMbjNyUnJYUVRMTHZNN0haRE5vNHc0YnhQckhxUGcxb1lTNnlodW1qTFZ5bmZpWmpwcWN5NW8zZEk2NzdzYXFqeGZGS3hYVG4xZUpTdHVFdXNrZUwzWHhubjNLSmpPVUdJRjlha3lheE1yN2xobWJYbmJpL3Fuc01RRXlqUGNaKzBieFlDcHArbnpLTEhPMnpqdkhnWFRHVXFzZy9oM1BtaTN0SnRzTzZ4NGVxRE1tR1d5MzBYZXJUZnJPRTBxOGR0dGhvd1JCWk01K3AvU09rcXNSMm5QMUJTUG9NK3B0TDFTMHVja3ZWS3BQRW5jdmg0Nm5iZDVQenlHYUZObWpDaVkzTjR0RXVzZ1NZSlZYczlOTFBKb2x1S3dQMlBLeTFwZWRsNzI5Vlh4ck1kbVQrV0lmWXdvbUZ4dllpMDdxelNKbFNiZGRWTWhMcU1LVS9aWVBWZWN6enVkM0huVU16WXU4L1Q2dmNkdGhIZU5ncW5GaVpVT1N0b3hWcnJzdkduK2VIb2dIUE4zRkgxdlUxVVd5WUNwc3VydWE5WW00Q2hSTUxYZXhPcXMwUTZXOTVKdWE3OTVKMDJRZVgvS0ZEdW9FNk84eXVXcUo2NTF0dzg3YU92Y0tGRXd0U1N4bnQ3b3JOSE9ZN1dWb1ZtN1RwS2V5cEJVajJCemRlOVU1RXZ2UE5OZXA4Y01yNndhSlFxbUZpZFdxcDNadWs2YXRCbnZIS2RObW94M2d2ZnJ0cjdPaDlxOVNMbDJaOEhCNHpoUk1MRjNKMVo3cm5DZGxKZG0xaXVkQTBoT0k5Zk9nNVM1N0haNGdVNWhxeWJzbDlsNFVUQ3hkeWZXZWQxc3dXRjlyVG1hN3ptc1Q5Y3VIYlRqcXZneTZOQmxrSC9sSmRRZkRtMTNseWlZMkxzVGE5RVVpL1MzdnlrUjZZVDk0R202Y3NCK3NmbXhLRVFEOWFUNGtrUjErNkoxM2c2eFJvcUNpYjB6c1k3YnlyRkl4aXZIblNhOTZpeTdIbXJTVFJFcHQ3TU84cVYzdjhVM1QxOVUxMUF2c3pHallGcnZUS3pnNjFYcFFMaHAwcDRKKzhFbUxRN2lpdW1CZWZxcFZsbW1XdldlUjRxQ2FiMHpzWUtEdUlFbXZjZ0dtN1QzaXd6Tmx3UVA4NkZWbW0wSDZxMlBGQVhUZWxkaWxjZGo1WkZXZkZWbk1ISFVjeVlvblcrcVhWWTk0SDZlYkREVXZVM1hzL0RUWTBUQnBONlZXSmZCOENhZGJHeWF0T2Z5bE9FbXZhNTYxMVdiczczQ3pyRHR6c2FLZ2ttOUk3SEtxbEVkcnc4MDZWazIyS1Q5MTlnVlkrelRaZmtkNW1YdktvVlZrRmoxelNUR2k0SkpiVStzNDJKNFhVOW1qOVdrNVlURHkvZzcxN0dmTzExaFU3SWsxbnRoZTJKVm5kR3lmTFg1OGFTN1F2MVd6MmEyYkxrb1JSOEU1Ly82eExlS3ZJaDJlZWNvbU5MV2YvaHErRnhYbGRHYXRMelF2UmkrWFExR3RvZ1NxNzVwdThSNkwyejdoNjg2d21ZdWU3UW1iWXZSOExpNmUvL2FvR1JKclBmQ3RuLzRSYmRnamRpa2wzV3lERTgyck1vVmZ2aDErYUo2OE1uanNhTmdRbHYrNGV2QmMzUHliYnhoODNXZFdJT1REZFgwYUhtcnlPb0pMRmNqUjhHRWhoUHJzR3I3ZHBaN3ZDWnQrcm5sd0FyVmhhYjFyR2c1MkRzYk9Rb21OSmhZOWQzK2dvbW04WnAwVnVYVjhBVXRxKzYrZyt0bUpOWjdZVEN4MWxYYkI4OW9HdkZrU2pXQ09odU1xemh1YU82RVdtNy9kT3dvbU01UVl0VW42c0thTXVMcDMvSnFxK0d2a2g1RkhlV3NYZDFKNlBmQ1FHTFZFd0x0bVpSczFDWXR0ei9jNG8vaXBGN1hlNUpZNzRlQnhGcFVpZlU4ZnJQYnBOMXJONjg2eXphcE1Id2xWTkhWRFgvTFlTL3VLSXZoMDhuWVVUQ1ovc1NxTzhMdWcwMDNUVHJTUmNIbGJNSndpeGZ6RWVIVjY0ZE5JbzRZQmRQcFRheDZ5ajE2OU8wcUgrMXJET1Zzd3ZBSm5WVjNpRlVOc2o0Y09RcW0wNXRZOWZ4bE5MWk9mL3QzL3VMVnV0ekJ4ZER5UlRJMG10YzdIekVLcHRPWFdQVkZ3ZkhUb05PQjhLNWZGWjFWSlhGd2tIV1pGSm9tMWNhTGdnbjFKZFoxM3dBcjY1dHM3SDY1L2F5ekxKM0liTld6K29OVGwvT2swS3pyMWNlTGdnbjFKRlpWVHFJQlZ0WjNPNDcyMDJtVGJ0NkpUaFkzenZQK3pyWXhUd3JOZGIzejhhSmdRajJKVlQyNk4vM21lenF4M1ZhUFpENjhwM3EwRm5WaWZUS3dRbHBvenV0QXg0dUNDZlVrMXFwbzhtZnB1dWswMFhVemtGN0VKV2JiTGMvYWIzWU5IYkNsaGFaSnJOR2lZRXBwWWgwUGRJUjlSL09ySmpkV2NaWnN1MGxqVVhTZTVFbnBhYVdKMWZTQW8wWEJsTkxFS3FlWStuN0wwM3ZBYjdxZTlyYXluV08xYmJlVlhSY2JtbStwSm1sWDJDVFdhRkV3cFRTeGlsYnZuYXhPQnl4dCt5ZkhhdHR1aEYyazFGV3hvNEdwZ1A0eDFwTlJvMkJLU1dMTnRoU1N1TG1ETms1YWNNdUZVSWRsNmhZZkdUaEJuRTQvdGRlL2pCUUZrMG9TYTlzTkZkbytweFQwU3IwUEd4bllUREVPL3lCNjBQUDJQY1czUmg0aENpYVZKRmJ4U3o4d0M3Q0ttaWw0TUZqdjQ1RUdqdmtXVlUyOFREcTF6aXJkN25qZEdhR1BFQVdUU2hLckdQbGM5YTk4SHZVMHdldjRBVzViSHVqV1BCQzhtT0h2Yi9aVjBvVXRtczV4bkNpWVZwSllsME5EOTJ5c1IxQSt5cXRkaEhjV2pjVEpFejRPeklNdzN3ZHhZbTM5SFk5N21yQ2ppVHFvTFEvTnZhNTMwYjJCYmNkK3ZDUzQwL1k0VVRDdE9MSFN4OG9GZ3VkRGJIUWU4MzNlclNQcndXSVUzQ3A1TVpqRnhmUjZPRU1heERWT0ZFd3JUcXllTDdvRUxqdERuLzJ3ZER6cTlqcnpmT2h3TFBpZVJKRUd3M2Y5QzRkZis4SFFiNHdvbUZpY1dPbTFBNkYxcHlCMFhoMTE2a2ozVmNkK216UEJuYmtqeWJOUUZrRmNZMFRCeE9MRXVzNjNIWjkzYnU1WTNqaXRXVFlQYTkzNThLaDVNd3lxNWpPQ08zUEhGdTFhRzhkaGlvd1JCUk9MRTJ1MTlYZThmTHpnc253UjNFKzUvbVNkQ3VYMGZlK291YnJyV3ZDWjN0MmRoM3VxQnZ6MW1HdUVLSmhhbkZqRnlEcFZ0K2s4S0RmenNIRFVkOWxlRmorWDMwZGQ5dTN3SUt3dysrR0xkTFhtMnAxeVhOWWNVOXc5Q3FZV0o5WjhlMkt0aTNZclJqUnZpd1h0RVZqWitNWDF6RWZ6d1VyVWZmVGxVVmkrT3FxN08veFl2RGkrN05hdnUwZkIxT0xFNnMrckpySEtPYzNUYjVjdlhoVS94UTlCTFI0bDhWdVpuUmU5Tyt5ZXg0bnFUV0NWVjV0YmZsVnRyejBwZmZjb21GcVVXUEZkKytQRWlwZkh6d01QWGZYdDc3aGJZWXJhMHp2Ui95aUo0WG0wa1R0RXdlU2l4SXJ2S0JzblZ2d2drdkJLZ3Vpeld5WWIybEhWOEZtZFdkd3BoME94dTBiQjVHNmJXTjFiZzNacnphS3pySC82ZnQxdDdiTDJYUFN0K1VVVVFuakZ4VjJqWUhKUlloM20vZHF6SzUxMjZ6WmJwN2tIVG1RWGRlaXNmVjBNaVhvdkk0MUtWbkFEdUx0SHdlU2l4RXJ2VlJ3bjFzR1daZ3VidTc5VWxJbDcxYjVSemxmMXJ0dU41ZnZCWmJlUGd1bmRPckhDOFUxODlXZlFrUTZNYlpLemd3ZTlHeXE5RFFLSXp3YmNLUXFtRnlWV2VpeVdKRlo5YzlMNmxzYWg1b0ZkajVmOXV5dXFTZGp6bGZOVlo3MHJ6MWI1NFBidUZBVy9TOGVMc3RrKzcxbjJTOVdpVitQc3FyckRlLzd4OGlHajRKN00vdmxkZnZyRFAzcVgvZTJiZWY3cGZ5M0gydFdMLzN5YW4vNzkyd2VPQWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF4clZYL1FlamtsamNRWDc2bDRFbFVXS2QzTHpheS9NOE84MnkvWlBOeXh0ZnpsOW4yZGY1OTluZVdaYk5wNDJVOThySjdNOERTM29TcS9qenlWWDJVNVZZc3o4c2Y3bjU0NnRYeTcwZnM2UEw2YVBsdlhHU2ZaSDk2ZU5zZjNsMDg4UGgwK2ZaM3F1VHpWOEhUMWMzUy9kZWZadzllbk96SkVpc2p5NnkxMVZpSGJ3cy96aDh2dmRUOW1qOWtQOGYvTTdjSk5iaDkxKy9QSGh6bnYxMzlzMVhuMlY3M3hkL2ZmUFZwZ0R0M1N3NlBzcyt5NExFT25sMmZGWWwxdjZ5L0dOMnRyZC85Yk1CR2EyYnJuQi9PVHM3ZnY3cXplZlpKemUxYVc5Wi9QVkpkbjZ6ZE85bVVmYjY1citid2RobWZGVWsxaytQM2xTSnRWZi9jYkozZFBGYVl0RzZHYndYaGVqczJjWFpKbmsyZWJMNTY2UWVZNTFrUHgrOHljS0t0ZjgyU3l0VzlzY3ppVVhyWkpNWm03SjA4ZVBGVFprcXNtZnpWMUN4OWw5VksxYUpkZmhobG82eHN0VkxpVVhySmtFMlk2enMxWnUzTDdPZmxsOXVzbWZ6Vnp2R3lvNCtxbGFzRXF0NFVmd1pIQlZtSnIwSWJSTGs1cWd3dTE2ZUw3T2orYk5OZW16K2FvOEtzNk96YXNVd3NjcnU4c3U4bnNmS0pCYTM5T2pOUTBmQXY2UzNEeDBBLzVMMm5qMTBCQUFBQU1EL2MvOEh4Z3NNMXdSOTV2RUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJMQUFBQU1nQkFNQUFBREJ6b1l4QUFBQUcxQk1WRVhNek15V2xwYWNuSnlxcXFyRnhjV3hzYkdqbzZPM3Q3ZSt2cjZIZTNLb0FBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFQKzBsRVFWUjRuTzNkVFhQYlJwb0FZRWlpTEIwRk9YSDJLRHFaakkvbXpHUW5SeXJKWm53MHZWWFpIS1ZNVXM3UjlNNWtyMUkrYXYvMml2aHNkQU4waVFLa2VQWjVxbUtMQkFpOGNiOTZ1OUVBZ1N3REFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdkNURuZWMvYnM5LytmWjQvL2VHcTl6Ty9mVGMvL2ZzL2VoY2RmL00wLy9Tdnk3R2lPLzd6ZC9tbm56MTBGT3hndnpleC9uYVpsLzZhTGp0ZWxJcys3OW5hTCtXaXgxZmpCUGRURmNYckI0MkNYWnozSmRaLzVJMW44Ykxab2w3MGZmSzVMK3RGVDVaanhQYTJpZUtQRHhnRk8xbjNKTmJSdkUyc3BPSFc3YUkzOGVmYVJSK05FTnJYUVJSeGZ0OWZGT3ptc2lleEZubW8yM0FId1pMSFd6NzMvTTZSSGY4dW9tQTNzenhOcks4N0xacC8yRm5ZU2JwdXU0V3RuVFQzN2EzejRlM2RYeFRzNWloTnJObGwzdlV5V05ocHRtMnRmZWRpY1pUbmc5dTd2eWpZMGFNMHNSNUZMZG9acVhUTFNLZURPaHIrMUM3T2Z4ZFJzS1ByTkxGV2NXTGx5MmJaY2JUa2czaFR2Wi9heVR6YVhINzFFRkd3bzNtU1dGV3JQZm4ycTluL1ZwM2lSYk93ckdhbjN5NWZ2Q3JYQ2o1WXJ2eUhYMmUvemFOUDdhTHE3VjcvT3F0MmxaODlRQlRzNkRCUEVxdHN0Y2ZMNHNXcWVORU8zOHZYUmRmenR2MHgyRlRSOVpUVEZYZnJoY3FlOEMvRnp6L24zZTNkWHhUc2FKMG1WdkhXNlZYNW9oekluOWJMaW1QSS9KTmcwVm56dVNJVFRwZkZ6MTkzUHJXVHhXWVQvMWE5V0QxVUZPeW1HdWwyM3B1M3JaYlZQVkpkRVE2RFpzdSs2Q2xtMWVkbXhVYkNvOG5iS3BObjJZbnovcU5nTi9YRVF2amVjZGhxV1ZVNXpxb1hSVDJvaDhxem5qS3lERmM4eTNaMzJPM0dpaWpxcVlQN2k0S2ROR2Vhd3pjUG9vSEpmdElsTlFPYWRWSkdtczhkM1hWNFU0ejBMcnBSbk4xN0ZOemVpMy8rS2ErRjcrOTFXN1NzWVBVVTVMd3phTmtQViswMGZibG1lTEIyVzBVWVY4M0xvekM5N3k4S2JxMHovUmd1V0hkYnREeCtyNXJ4dUZzQmpzSXU2YnBUUnNyTkxIZVA3enJ2anJ2bjdVanFIcVBnMWdZVGF4RzFhTmc0QjFFMXUyeGJ1L2hjVUJ5S3J1d080K1pWM2oxVnMyaGYzMk1VM05wZ1lnV2xvYlRmRm9IZ3g4STZTTUo1ZHpoejFPMlRibTJScHlkeG5pUUJUUjBGdHphVVdMTndNRk1JZnV1dm81N2x2SDE5SEhaSTlYYkNVeTIzZEptbloycE8yeC92S1FwdWJTaXhqcFBmOGVKQXF6elNYM1U3bWpMbjNyUnJYUVRMTHZNN0haRE5vNHc0YnhQckhxUGcxb1lTNnlodW1qTFZ5bmZpWmpwcWN5NW8zZEk2NzdzYXFqeGZGS3hYVG4xZUpTdHVFdXNrZUwzWHhubjNLSmpPVUdJRjlha3lheE1yN2xobWJYbmJpL3Fuc01RRXlqUGNaKzBieFlDcHArbnpLTEhPMnpqdkhnWFRHVXFzZy9oM1BtaTN0SnRzTzZ4NGVxRE1tR1d5MzBYZXJUZnJPRTBxOGR0dGhvd1JCWk01K3AvU09rcXNSMm5QMUJTUG9NK3B0TDFTMHVja3ZWS3BQRW5jdmg0Nm5iZDVQenlHYUZObWpDaVkzTjR0RXVzZ1NZSlZYczlOTFBKb2x1S3dQMlBLeTFwZWRsNzI5Vlh4ck1kbVQrV0lmWXdvbUZ4dllpMDdxelNKbFNiZGRWTWhMcU1LVS9aWVBWZWN6enVkM0huVU16WXU4L1Q2dmNkdGhIZU5ncW5GaVpVT1N0b3hWcnJzdkduK2VIb2dIUE4zRkgxdlUxVVd5WUNwc3VydWE5WW00Q2hSTUxYZXhPcXMwUTZXOTVKdWE3OTVKMDJRZVgvS0ZEdW9FNk84eXVXcUo2NTF0dzg3YU92Y0tGRXd0U1N4bnQ3b3JOSE9ZN1dWb1ZtN1RwS2V5cEJVajJCemRlOVU1RXZ2UE5OZXA4Y01yNndhSlFxbUZpZFdxcDNadWs2YXRCbnZIS2RObW94M2d2ZnJ0cjdPaDlxOVNMbDJaOEhCNHpoUk1MRjNKMVo3cm5DZGxKZG0xaXVkQTBoT0k5Zk9nNVM1N0haNGdVNWhxeWJzbDlsNFVUQ3hkeWZXZWQxc3dXRjlyVG1hN3ptc1Q5Y3VIYlRqcXZneTZOQmxrSC9sSmRRZkRtMTNseWlZMkxzVGE5RVVpL1MzdnlrUjZZVDk0R202Y3NCK3NmbXhLRVFEOWFUNGtrUjErNkoxM2c2eFJvcUNpYjB6c1k3YnlyRkl4aXZIblNhOTZpeTdIbXJTVFJFcHQ3TU84cVYzdjhVM1QxOVUxMUF2c3pHallGcnZUS3pnNjFYcFFMaHAwcDRKKzhFbUxRN2lpdW1CZWZxcFZsbW1XdldlUjRxQ2FiMHpzWUtEdUlFbXZjZ0dtN1QzaXd6Tmx3UVA4NkZWbW0wSDZxMlBGQVhUZWxkaWxjZGo1WkZXZkZWbk1ISFVjeVlvblcrcVhWWTk0SDZlYkREVXZVM1hzL0RUWTBUQnBONlZXSmZCOENhZGJHeWF0T2Z5bE9FbXZhNTYxMVdiczczQ3pyRHR6c2FLZ2ttOUk3SEtxbEVkcnc4MDZWazIyS1Q5MTlnVlkrelRaZmtkNW1YdktvVlZrRmoxelNUR2k0SkpiVStzNDJKNFhVOW1qOVdrNVlURHkvZzcxN0dmTzExaFU3SWsxbnRoZTJKVm5kR3lmTFg1OGFTN1F2MVd6MmEyYkxrb1JSOEU1Ly82eExlS3ZJaDJlZWNvbU5MV2YvaHErRnhYbGRHYXRMelF2UmkrWFExR3RvZ1NxNzVwdThSNkwyejdoNjg2d21ZdWU3UW1iWXZSOExpNmUvL2FvR1JKclBmQ3RuLzRSYmRnamRpa2wzV3lERTgyck1vVmZ2aDErYUo2OE1uanNhTmdRbHYrNGV2QmMzUHliYnhoODNXZFdJT1REZFgwYUhtcnlPb0pMRmNqUjhHRWhoUHJzR3I3ZHBaN3ZDWnQrcm5sd0FyVmhhYjFyR2c1MkRzYk9Rb21OSmhZOWQzK2dvbW04WnAwVnVYVjhBVXRxKzYrZyt0bUpOWjdZVEN4MWxYYkI4OW9HdkZrU2pXQ09odU1xemh1YU82RVdtNy9kT3dvbU01UVl0VW42c0thTXVMcDMvSnFxK0d2a2g1RkhlV3NYZDFKNlBmQ1FHTFZFd0x0bVpSczFDWXR0ei9jNG8vaXBGN1hlNUpZNzRlQnhGcFVpZlU4ZnJQYnBOMXJONjg2eXphcE1Id2xWTkhWRFgvTFlTL3VLSXZoMDhuWVVUQ1ovc1NxTzhMdWcwMDNUVHJTUmNIbGJNSndpeGZ6RWVIVjY0ZE5JbzRZQmRQcFRheDZ5ajE2OU8wcUgrMXJET1Zzd3ZBSm5WVjNpRlVOc2o0Y09RcW0wNXRZOWZ4bE5MWk9mL3QzL3VMVnV0ekJ4ZER5UlRJMG10YzdIekVLcHRPWFdQVkZ3ZkhUb05PQjhLNWZGWjFWSlhGd2tIV1pGSm9tMWNhTGdnbjFKZFoxM3dBcjY1dHM3SDY1L2F5ekxKM0liTld6K29OVGwvT2swS3pyMWNlTGdnbjFKRlpWVHFJQlZ0WjNPNDcyMDJtVGJ0NkpUaFkzenZQK3pyWXhUd3JOZGIzejhhSmdRajJKVlQyNk4vM21lenF4M1ZhUFpENjhwM3EwRm5WaWZUS3dRbHBvenV0QXg0dUNDZlVrMXFwbzhtZnB1dWswMFhVemtGN0VKV2JiTGMvYWIzWU5IYkNsaGFaSnJOR2lZRXBwWWgwUGRJUjlSL09ySmpkV2NaWnN1MGxqVVhTZTVFbnBhYVdKMWZTQW8wWEJsTkxFS3FlWStuN0wwM3ZBYjdxZTlyYXluV08xYmJlVlhSY2JtbStwSm1sWDJDVFdhRkV3cFRTeGlsYnZuYXhPQnl4dCt5ZkhhdHR1aEYyazFGV3hvNEdwZ1A0eDFwTlJvMkJLU1dMTnRoU1N1TG1ETms1YWNNdUZVSWRsNmhZZkdUaEJuRTQvdGRlL2pCUUZrMG9TYTlzTkZkbytweFQwU3IwUEd4bllUREVPL3lCNjBQUDJQY1czUmg0aENpYVZKRmJ4U3o4d0M3Q0ttaWw0TUZqdjQ1RUdqdmtXVlUyOFREcTF6aXJkN25qZEdhR1BFQVdUU2hLckdQbGM5YTk4SHZVMHdldjRBVzViSHVqV1BCQzhtT0h2Yi9aVjBvVXRtczV4bkNpWVZwSllsME5EOTJ5c1IxQSt5cXRkaEhjV2pjVEpFejRPeklNdzN3ZHhZbTM5SFk5N21yQ2ppVHFvTFEvTnZhNTMwYjJCYmNkK3ZDUzQwL1k0VVRDdE9MSFN4OG9GZ3VkRGJIUWU4MzNlclNQcndXSVUzQ3A1TVpqRnhmUjZPRU1heERWT0ZFd3JUcXllTDdvRUxqdERuLzJ3ZER6cTlqcnpmT2h3TFBpZVJKRUd3M2Y5QzRkZis4SFFiNHdvbUZpY1dPbTFBNkYxcHlCMFhoMTE2a2ozVmNkK216UEJuYmtqeWJOUUZrRmNZMFRCeE9MRXVzNjNIWjkzYnU1WTNqaXRXVFlQYTkzNThLaDVNd3lxNWpPQ08zUEhGdTFhRzhkaGlvd1JCUk9MRTJ1MTlYZThmTHpnc253UjNFKzUvbVNkQ3VYMGZlK291YnJyV3ZDWjN0MmRoM3VxQnZ6MW1HdUVLSmhhbkZqRnlEcFZ0K2s4S0RmenNIRFVkOWxlRmorWDMwZGQ5dTN3SUt3dysrR0xkTFhtMnAxeVhOWWNVOXc5Q3FZV0o5WjhlMkt0aTNZclJqUnZpd1h0RVZqWitNWDF6RWZ6d1VyVWZmVGxVVmkrT3FxN08veFl2RGkrN05hdnUwZkIxT0xFNnMrckpySEtPYzNUYjVjdlhoVS94UTlCTFI0bDhWdVpuUmU5Tyt5ZXg0bnFUV0NWVjV0YmZsVnRyejBwZmZjb21GcVVXUEZkKytQRWlwZkh6d01QWGZYdDc3aGJZWXJhMHp2Ui95aUo0WG0wa1R0RXdlU2l4SXJ2S0JzblZ2d2drdkJLZ3Vpeld5WWIybEhWOEZtZFdkd3BoME94dTBiQjVHNmJXTjFiZzNacnphS3pySC82ZnQxdDdiTDJYUFN0K1VVVVFuakZ4VjJqWUhKUlloM20vZHF6SzUxMjZ6WmJwN2tIVG1RWGRlaXNmVjBNaVhvdkk0MUtWbkFEdUx0SHdlU2l4RXJ2VlJ3bjFzR1daZ3VidTc5VWxJbDcxYjVSemxmMXJ0dU41ZnZCWmJlUGd1bmRPckhDOFUxODlXZlFrUTZNYlpLemd3ZTlHeXE5RFFLSXp3YmNLUXFtRnlWV2VpeVdKRlo5YzlMNmxzYWg1b0ZkajVmOXV5dXFTZGp6bGZOVlo3MHJ6MWI1NFBidUZBVy9TOGVMc3RrKzcxbjJTOVdpVitQc3FyckRlLzd4OGlHajRKN00vdmxkZnZyRFAzcVgvZTJiZWY3cGZ5M0gydFdMLzN5YW4vNzkyd2VPQWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF4clZYL1FlamtsamNRWDc2bDRFbFVXS2QzTHpheS9NOE84MnkvWlBOeXh0ZnpsOW4yZGY1OTluZVdaYk5wNDJVOThySjdNOERTM29TcS9qenlWWDJVNVZZc3o4c2Y3bjU0NnRYeTcwZnM2UEw2YVBsdlhHU2ZaSDk2ZU5zZjNsMDg4UGgwK2ZaM3F1VHpWOEhUMWMzUy9kZWZadzllbk96SkVpc2p5NnkxMVZpSGJ3cy96aDh2dmRUOW1qOWtQOGYvTTdjSk5iaDkxKy9QSGh6bnYxMzlzMVhuMlY3M3hkL2ZmUFZwZ0R0M1N3NlBzcyt5NExFT25sMmZGWWwxdjZ5L0dOMnRyZC85Yk1CR2EyYnJuQi9PVHM3ZnY3cXplZlpKemUxYVc5Wi9QVkpkbjZ6ZE85bVVmYjY1citid2RobWZGVWsxaytQM2xTSnRWZi9jYkozZFBGYVl0RzZHYndYaGVqczJjWFpKbmsyZWJMNTY2UWVZNTFrUHgrOHljS0t0ZjgyU3l0VzlzY3ppVVhyWkpNWm03SjA4ZVBGVFprcXNtZnpWMUN4OWw5VksxYUpkZmhobG82eHN0VkxpVVhySmtFMlk2enMxWnUzTDdPZmxsOXVzbWZ6Vnp2R3lvNCtxbGFzRXF0NFVmd1pIQlZtSnIwSWJSTGs1cWd3dTE2ZUw3T2orYk5OZW16K2FvOEtzNk96YXNVd3NjcnU4c3U4bnNmS0pCYTM5T2pOUTBmQXY2UzNEeDBBLzVMMm5qMTBCQUFBQU1EL2MvOEh4Z3NNMXdSOTV2RUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJMQUFBQU1nQkFNQUFBREJ6b1l4QUFBQUcxQk1WRVhNek15V2xwYWNuSnlxcXFyRnhjV3hzYkdqbzZPM3Q3ZSt2cjZIZTNLb0FBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFQKzBsRVFWUjRuTzNkVFhQYlJwb0FZRWlpTEIwRk9YSDJLRHFaakkvbXpHUW5SeXJKWm53MHZWWFpIS1ZNVXM3UjlNNWtyMUkrYXYvMml2aHNkQU4waVFLa2VQWjVxbUtMQkFpOGNiOTZ1OUVBZ1N3REFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdkNURuZWMvYnM5LytmWjQvL2VHcTl6Ty9mVGMvL2ZzL2VoY2RmL00wLy9Tdnk3R2lPLzd6ZC9tbm56MTBGT3hndnpleC9uYVpsLzZhTGp0ZWxJcys3OW5hTCtXaXgxZmpCUGRURmNYckI0MkNYWnozSmRaLzVJMW44Ykxab2w3MGZmSzVMK3RGVDVaanhQYTJpZUtQRHhnRk8xbjNKTmJSdkUyc3BPSFc3YUkzOGVmYVJSK05FTnJYUVJSeGZ0OWZGT3ptc2lleEZubW8yM0FId1pMSFd6NzMvTTZSSGY4dW9tQTNzenhOcks4N0xacC8yRm5ZU2JwdXU0V3RuVFQzN2EzejRlM2RYeFRzNWloTnJObGwzdlV5V05ocHRtMnRmZWRpY1pUbmc5dTd2eWpZMGFNMHNSNUZMZG9acVhUTFNLZURPaHIrMUM3T2Z4ZFJzS1ByTkxGV2NXTGx5MmJaY2JUa2czaFR2Wi9heVR6YVhINzFFRkd3bzNtU1dGV3JQZm4ycTluL1ZwM2lSYk93ckdhbjN5NWZ2Q3JYQ2o1WXJ2eUhYMmUvemFOUDdhTHE3VjcvT3F0MmxaODlRQlRzNkRCUEVxdHN0Y2ZMNHNXcWVORU8zOHZYUmRmenR2MHgyRlRSOVpUVEZYZnJoY3FlOEMvRnp6L24zZTNkWHhUc2FKMG1WdkhXNlZYNW9oekluOWJMaW1QSS9KTmcwVm56dVNJVFRwZkZ6MTkzUHJXVHhXWVQvMWE5V0QxVUZPeW1HdWwyM3B1M3JaYlZQVkpkRVE2RFpzdSs2Q2xtMWVkbXhVYkNvOG5iS3BObjJZbnovcU5nTi9YRVF2amVjZGhxV1ZVNXpxb1hSVDJvaDhxem5qS3lERmM4eTNaMzJPM0dpaWpxcVlQN2k0S2ROR2Vhd3pjUG9vSEpmdElsTlFPYWRWSkdtczhkM1hWNFU0ejBMcnBSbk4xN0ZOemVpMy8rS2ErRjcrOTFXN1NzWVBVVTVMd3phTmtQViswMGZibG1lTEIyVzBVWVY4M0xvekM5N3k4S2JxMHovUmd1V0hkYnREeCtyNXJ4dUZzQmpzSXU2YnBUUnNyTkxIZVA3enJ2anJ2bjdVanFIcVBnMWdZVGF4RzFhTmc0QjFFMXUyeGJ1L2hjVUJ5S3J1d080K1pWM2oxVnMyaGYzMk1VM05wZ1lnV2xvYlRmRm9IZ3g4STZTTUo1ZHpoejFPMlRibTJScHlkeG5pUUJUUjBGdHphVVdMTndNRk1JZnV1dm81N2x2SDE5SEhaSTlYYkNVeTIzZEptbloycE8yeC92S1FwdWJTaXhqcFBmOGVKQXF6elNYM1U3bWpMbjNyUnJYUVRMTHZNN0haRE5vNHc0YnhQckhxUGcxb1lTNnlodW1qTFZ5bmZpWmpwcWN5NW8zZEk2NzdzYXFqeGZGS3hYVG4xZUpTdHVFdXNrZUwzWHhubjNLSmpPVUdJRjlha3lheE1yN2xobWJYbmJpL3Fuc01RRXlqUGNaKzBieFlDcHArbnpLTEhPMnpqdkhnWFRHVXFzZy9oM1BtaTN0SnRzTzZ4NGVxRE1tR1d5MzBYZXJUZnJPRTBxOGR0dGhvd1JCWk01K3AvU09rcXNSMm5QMUJTUG9NK3B0TDFTMHVja3ZWS3BQRW5jdmg0Nm5iZDVQenlHYUZObWpDaVkzTjR0RXVzZ1NZSlZYczlOTFBKb2x1S3dQMlBLeTFwZWRsNzI5Vlh4ck1kbVQrV0lmWXdvbUZ4dllpMDdxelNKbFNiZGRWTWhMcU1LVS9aWVBWZWN6enVkM0huVU16WXU4L1Q2dmNkdGhIZU5ncW5GaVpVT1N0b3hWcnJzdkduK2VIb2dIUE4zRkgxdlUxVVd5WUNwc3VydWE5WW00Q2hSTUxYZXhPcXMwUTZXOTVKdWE3OTVKMDJRZVgvS0ZEdW9FNk84eXVXcUo2NTF0dzg3YU92Y0tGRXd0U1N4bnQ3b3JOSE9ZN1dWb1ZtN1RwS2V5cEJVajJCemRlOVU1RXZ2UE5OZXA4Y01yNndhSlFxbUZpZFdxcDNadWs2YXRCbnZIS2RObW94M2d2ZnJ0cjdPaDlxOVNMbDJaOEhCNHpoUk1MRjNKMVo3cm5DZGxKZG0xaXVkQTBoT0k5Zk9nNVM1N0haNGdVNWhxeWJzbDlsNFVUQ3hkeWZXZWQxc3dXRjlyVG1hN3ptc1Q5Y3VIYlRqcXZneTZOQmxrSC9sSmRRZkRtMTNseWlZMkxzVGE5RVVpL1MzdnlrUjZZVDk0R202Y3NCK3NmbXhLRVFEOWFUNGtrUjErNkoxM2c2eFJvcUNpYjB6c1k3YnlyRkl4aXZIblNhOTZpeTdIbXJTVFJFcHQ3TU84cVYzdjhVM1QxOVUxMUF2c3pHallGcnZUS3pnNjFYcFFMaHAwcDRKKzhFbUxRN2lpdW1CZWZxcFZsbW1XdldlUjRxQ2FiMHpzWUtEdUlFbXZjZ0dtN1QzaXd6Tmx3UVA4NkZWbW0wSDZxMlBGQVhUZWxkaWxjZGo1WkZXZkZWbk1ISFVjeVlvblcrcVhWWTk0SDZlYkREVXZVM1hzL0RUWTBUQnBONlZXSmZCOENhZGJHeWF0T2Z5bE9FbXZhNTYxMVdiczczQ3pyRHR6c2FLZ2ttOUk3SEtxbEVkcnc4MDZWazIyS1Q5MTlnVlkrelRaZmtkNW1YdktvVlZrRmoxelNUR2k0SkpiVStzNDJKNFhVOW1qOVdrNVlURHkvZzcxN0dmTzExaFU3SWsxbnRoZTJKVm5kR3lmTFg1OGFTN1F2MVd6MmEyYkxrb1JSOEU1Ly82eExlS3ZJaDJlZWNvbU5MV2YvaHErRnhYbGRHYXRMelF2UmkrWFExR3RvZ1NxNzVwdThSNkwyejdoNjg2d21ZdWU3UW1iWXZSOExpNmUvL2FvR1JKclBmQ3RuLzRSYmRnamRpa2wzV3lERTgyck1vVmZ2aDErYUo2OE1uanNhTmdRbHYrNGV2QmMzUHliYnhoODNXZFdJT1REZFgwYUhtcnlPb0pMRmNqUjhHRWhoUHJzR3I3ZHBaN3ZDWnQrcm5sd0FyVmhhYjFyR2c1MkRzYk9Rb21OSmhZOWQzK2dvbW04WnAwVnVYVjhBVXRxKzYrZyt0bUpOWjdZVEN4MWxYYkI4OW9HdkZrU2pXQ09odU1xemh1YU82RVdtNy9kT3dvbU01UVl0VW42c0thTXVMcDMvSnFxK0d2a2g1RkhlV3NYZDFKNlBmQ1FHTFZFd0x0bVpSczFDWXR0ei9jNG8vaXBGN1hlNUpZNzRlQnhGcFVpZlU4ZnJQYnBOMXJONjg2eXphcE1Id2xWTkhWRFgvTFlTL3VLSXZoMDhuWVVUQ1ovc1NxTzhMdWcwMDNUVHJTUmNIbGJNSndpeGZ6RWVIVjY0ZE5JbzRZQmRQcFRheDZ5ajE2OU8wcUgrMXJET1Zzd3ZBSm5WVjNpRlVOc2o0Y09RcW0wNXRZOWZ4bE5MWk9mL3QzL3VMVnV0ekJ4ZER5UlRJMG10YzdIekVLcHRPWFdQVkZ3ZkhUb05PQjhLNWZGWjFWSlhGd2tIV1pGSm9tMWNhTGdnbjFKZFoxM3dBcjY1dHM3SDY1L2F5ekxKM0liTld6K29OVGwvT2swS3pyMWNlTGdnbjFKRlpWVHFJQlZ0WjNPNDcyMDJtVGJ0NkpUaFkzenZQK3pyWXhUd3JOZGIzejhhSmdRajJKVlQyNk4vM21lenF4M1ZhUFpENjhwM3EwRm5WaWZUS3dRbHBvenV0QXg0dUNDZlVrMXFwbzhtZnB1dWswMFhVemtGN0VKV2JiTGMvYWIzWU5IYkNsaGFaSnJOR2lZRXBwWWgwUGRJUjlSL09ySmpkV2NaWnN1MGxqVVhTZTVFbnBhYVdKMWZTQW8wWEJsTkxFS3FlWStuN0wwM3ZBYjdxZTlyYXluV08xYmJlVlhSY2JtbStwSm1sWDJDVFdhRkV3cFRTeGlsYnZuYXhPQnl4dCt5ZkhhdHR1aEYyazFGV3hvNEdwZ1A0eDFwTlJvMkJLU1dMTnRoU1N1TG1ETms1YWNNdUZVSWRsNmhZZkdUaEJuRTQvdGRlL2pCUUZrMG9TYTlzTkZkbytweFQwU3IwUEd4bllUREVPL3lCNjBQUDJQY1czUmg0aENpYVZKRmJ4U3o4d0M3Q0ttaWw0TUZqdjQ1RUdqdmtXVlUyOFREcTF6aXJkN25qZEdhR1BFQVdUU2hLckdQbGM5YTk4SHZVMHdldjRBVzViSHVqV1BCQzhtT0h2Yi9aVjBvVXRtczV4bkNpWVZwSllsME5EOTJ5c1IxQSt5cXRkaEhjV2pjVEpFejRPeklNdzN3ZHhZbTM5SFk5N21yQ2ppVHFvTFEvTnZhNTMwYjJCYmNkK3ZDUzQwL1k0VVRDdE9MSFN4OG9GZ3VkRGJIUWU4MzNlclNQcndXSVUzQ3A1TVpqRnhmUjZPRU1heERWT0ZFd3JUcXllTDdvRUxqdERuLzJ3ZER6cTlqcnpmT2h3TFBpZVJKRUd3M2Y5QzRkZis4SFFiNHdvbUZpY1dPbTFBNkYxcHlCMFhoMTE2a2ozVmNkK216UEJuYmtqeWJOUUZrRmNZMFRCeE9MRXVzNjNIWjkzYnU1WTNqaXRXVFlQYTkzNThLaDVNd3lxNWpPQ08zUEhGdTFhRzhkaGlvd1JCUk9MRTJ1MTlYZThmTHpnc253UjNFKzUvbVNkQ3VYMGZlK291YnJyV3ZDWjN0MmRoM3VxQnZ6MW1HdUVLSmhhbkZqRnlEcFZ0K2s4S0RmenNIRFVkOWxlRmorWDMwZGQ5dTN3SUt3dysrR0xkTFhtMnAxeVhOWWNVOXc5Q3FZV0o5WjhlMkt0aTNZclJqUnZpd1h0RVZqWitNWDF6RWZ6d1VyVWZmVGxVVmkrT3FxN08veFl2RGkrN05hdnUwZkIxT0xFNnMrckpySEtPYzNUYjVjdlhoVS94UTlCTFI0bDhWdVpuUmU5Tyt5ZXg0bnFUV0NWVjV0YmZsVnRyejBwZmZjb21GcVVXUEZkKytQRWlwZkh6d01QWGZYdDc3aGJZWXJhMHp2Ui95aUo0WG0wa1R0RXdlU2l4SXJ2S0JzblZ2d2drdkJLZ3Vpeld5WWIybEhWOEZtZFdkd3BoME94dTBiQjVHNmJXTjFiZzNacnphS3pySC82ZnQxdDdiTDJYUFN0K1VVVVFuakZ4VjJqWUhKUlloM20vZHF6SzUxMjZ6WmJwN2tIVG1RWGRlaXNmVjBNaVhvdkk0MUtWbkFEdUx0SHdlU2l4RXJ2VlJ3bjFzR1daZ3VidTc5VWxJbDcxYjVSemxmMXJ0dU41ZnZCWmJlUGd1bmRPckhDOFUxODlXZlFrUTZNYlpLemd3ZTlHeXE5RFFLSXp3YmNLUXFtRnlWV2VpeVdKRlo5YzlMNmxzYWg1b0ZkajVmOXV5dXFTZGp6bGZOVlo3MHJ6MWI1NFBidUZBVy9TOGVMc3RrKzcxbjJTOVdpVitQc3FyckRlLzd4OGlHajRKN00vdmxkZnZyRFAzcVgvZTJiZWY3cGZ5M0gydFdMLzN5YW4vNzkyd2VPQWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF4clZYL1FlamtsamNRWDc2bDRFbFVXS2QzTHpheS9NOE84MnkvWlBOeXh0ZnpsOW4yZGY1OTluZVdaYk5wNDJVOThySjdNOERTM29TcS9qenlWWDJVNVZZc3o4c2Y3bjU0NnRYeTcwZnM2UEw2YVBsdlhHU2ZaSDk2ZU5zZjNsMDg4UGgwK2ZaM3F1VHpWOEhUMWMzUy9kZWZadzllbk96SkVpc2p5NnkxMVZpSGJ3cy96aDh2dmRUOW1qOWtQOGYvTTdjSk5iaDkxKy9QSGh6bnYxMzlzMVhuMlY3M3hkL2ZmUFZwZ0R0M1N3NlBzcyt5NExFT25sMmZGWWwxdjZ5L0dOMnRyZC85Yk1CR2EyYnJuQi9PVHM3ZnY3cXplZlpKemUxYVc5Wi9QVkpkbjZ6ZE85bVVmYjY1citid2RobWZGVWsxaytQM2xTSnRWZi9jYkozZFBGYVl0RzZHYndYaGVqczJjWFpKbmsyZWJMNTY2UWVZNTFrUHgrOHljS0t0ZjgyU3l0VzlzY3ppVVhyWkpNWm03SjA4ZVBGVFprcXNtZnpWMUN4OWw5VksxYUpkZmhobG82eHN0VkxpVVhySmtFMlk2enMxWnUzTDdPZmxsOXVzbWZ6Vnp2R3lvNCtxbGFzRXF0NFVmd1pIQlZtSnIwSWJSTGs1cWd3dTE2ZUw3T2orYk5OZW16K2FvOEtzNk96YXNVd3NjcnU4c3U4bnNmS0pCYTM5T2pOUTBmQXY2UzNEeDBBLzVMMm5qMTBCQUFBQU1EL2MvOEh4Z3NNMXdSOTV2RUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvMS04ZTMzNDA5ODAyY2M1OThlOWEwNGZmMGZjNmU0MWQ4Mi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFSVUFBQUVZQ0FZQUFBQnljR0k4QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFF5SURjNUxqRTJNRGt5TkN3Z01qQXhOeTh3Tnk4eE15MHdNVG93Tmpvek9TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG81T1RORVFUUkdPVVV6TmpVeE1VVTVPRVZFUlRoRU1rWkZSVEkwUVVKQ015SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzVPVE5FUVRSR1FVVXpOalV4TVVVNU9FVkVSVGhFTWtaRlJUSTBRVUpDTXlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qazVNMFJCTkVZM1JUTTJOVEV4UlRrNFJVUkZPRVF5UmtWRk1qUkJRa0l6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2prNU0wUkJORVk0UlRNMk5URXhSVGs0UlVSRk9FUXlSa1ZGTWpSQlFrSXpJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrK3BEeCtRQUFEWU5KUkVGVWVOcnMzUTJPMnpnU2h1RU80UXZNSlhPb25DbDMyUXNFbk0wTWtHeHZwMjJUVkJWSldjOExCRWlyN2RadnZmNktrcVV2Mzc5L2YwTU8zNzU5SzdiQ25uejkrclhhQ2psOHVhSlVGRHZJaTFUSUF1UkRLdVFCWEZFMnA1QUtpUURua2N5V1VpRVI0THlTMlVZcVJBSzhobUNXU3VVRlJVS001K1dsenRLc0ZNd1NxV3dzRTFMQVMwbHBoVnltU21VRG1aQUdMaW1kbVhLWklwVkZNaUVRRU0wQ3VhUktaYUpNQ0FSRXM0bGMwcVF5UVNnclJVSmlpdnowODg0U1M3aFVrbVh5eXFJQytTejUrOUZ5Q1MyaVJLR1U0R1V0ZC80QnV4NVRhY2RvZE4yV1hSY3NjRU9TQjNhVHpYWnlpYXpma1BZblFTaGwwWHUxU0RoYmF4TzZiQkd0ME9FQ0NSYktxSVdqUHdXS0Zna1RqNHNTY094dmsxaktaa0tadVVFSkF6dTJPVWZrc29WWWh0dWZRS0dVQ1J0djFiSkNDeFR4ZCtxS1pSMXRoWWFLWkpGUXl1RHJSNlNsOVVIV2NWRU9ITXRUUC94RzYveTJjQWRsdkg3NmhwZHlMcGsyV3ZkdDdYaGZiWnhQN1Z5bXVudHhSNlNVREVPM3ZDNnkzeDM1aDczVFJzYis2L2tia2NkNjJJZlpTTDJYellWeU5FWWVpWnJFZ09qakl2S1kzVllzdDhrN0plcDFaWWVOcmNYUkdqM1k3eEd0ejdOMnA2ZkZLVytUV3FIbUlqaVlVcUtFOHNqZ3ZmRXhLcjFJTXRkcWpTSlRTZFJ4blRIbU9Gei90MGs3SzBvb2tlL0xUQnNFODdvSjVXZ3FlWlpNN3YyK0piVnNrVmlhRHY0REtTVkNLUGRNWFFiZjkrelRTV0tSVUNLT2k3Y0R4K2FSWXo3dFE2L1ZBN2ZrblpXUlRrcnlQQ1VOOUJ3VHRlSDFvNis1bDF6S1lOcVprbGllWGxFN21GSm1DNlVrekl0NGtISDE2K2p2YThLOGh0YngyWlcyTzE3OFZwS25wOGRFdkh3NmFVMGY5MUxHczNUU09yMDBMTXRlZDlOUFNpbTl4VDVETWhJTHNoTktid3FKVEMwMWVuMGZwWlhvcEJKOTJqbFRNaElMWmlhVVI4bGlaSHJQT0V2TCtvWWxtdHNtTzZ0TW1CYVJwRWhIU21rOXBWd0dXcUNqRXVscG5lYTNQd090VDlsQUtLZElLN2ZiN1l2YW5jT1BIei8rWHRBV2piUWlkYkRGcVFmbWNhZ051dGNDUlNXVjJVTEphcFc2QkVJTyt6TzZqKzdJS0RLbFBFc1o1VTZTeVV3c0lZbG01UlcxVVVKSmI0a095a05yZEw0VzUrNCsvMFEybzJkN1NzZTBtV0xKS2ZqTzFpZnpoazFsNE9lV2FlK25sNDhIMDhkL0Q1YlgxYlhuWkhqZk5Sd2Y1YTN2aXRneWVKelByTU91SVpMYmhKMzNOaUNMWjY4SlRTdFBrb2lCMit1bWxxYXJhTjhmUHgrU3pKR1U4dG5QdllsbFNWcTVKVWxqcFZDYVpQSWtnWkRHdFZKTHIzVHV0andOZ2puUzdzd1N5eUhwckQ2bG5DMlVFaUNTblc5UmlmekUwakk0V3pvRU16SnVraVdXRlA0NHBkd3hucEtSVWxxRkVpR1RXYmRTSUp2enREdWo3MmsraGZ2SlFHL3QrTGtPdnE5ckdYdTMxY2RUeXhsSlphVlFSbVV5VXpEWXU5MTVOQWJTOHZ1SDdjMnZZL0pCY21sTktUM3BadXI0eWkxNXg0UUs1YWNSLzZNbWNFVitkaEIvSllybExYSnNaY1U5V3FNU0NuRFZoSFgweEVXcUI4cmdlRXFXdUFnRnlLMlA4RnI2Nkkzc1FjY0lpd0xJSFc0SWxkRHFCNnhMS2NBZWRWSjJFVUdVUGN1RWpRYTh1a3g2cnpxZlV1aWpyOCsrUVRXaEFQMDFrWDJYeGFWSnBRUnVLQUJqTlZTbUxrendtWitqVjl0KzluL0NBWEgwRHc5TWtjeDdmOHg0R3Qvc1d6c0NWMG9tMjlWYzJYQWpsWTJYRTloTkp0c05IMlNjcjQ0YVB5RVNJQ1p4VEwxSGMxbTg0czBtZGo5WVhKbDN4MzlKcXJObFJaK1JkTFE3UUU0N2xOMlZUREZXQ2Q0WVVnb3dubGFXUEN3dk14R01YcHdqcFFBNWFXVktuZTM4MkU4cEJlaExLeXNFdGt3V0VhZU1KUmhJSk1kU3k3d3JhZ2V2cHMwWTVDVU9ZSTlhNm43L0w0OWtYWm9mc2tLTG94NndwVHdDNnlJbHhaUlpHMEk2QWJaSUxXWEZBdXpjTXdMWXZIN0todk85Ri9GSUI2VFIxd0tWM1lvYkFGS2swdnRvVWxJRHp0bUJERDJYZkVaUmo5eGo5dDZUQmJVK3dQTVdxTGZHVWdkdWQ3c3FqenlBazllVUlnYndNbElwSjFwVzRHeTFXczZ5b012NlJ3RG5xSXZkSHRIaFc4bEFCd2NHYXkrUlZDUVM0QVhxSi9QT2I3N25BK3hiNTJtbmxjc21mME9LQVY2azFzcm1CVTRtd01scXNHeTZVY2dFT0drZGJWVzhUODc4RUEwSXBMOXVMaWNWb2dCZXJLNktqUUNRaVdJR2NGcXo3WERLbWZpQXZlcXBLRmdBTDluKytGWXljSUY2VXJnQVlxVXkrSFJDQVBpRGYzeXlvMUJJRGpoeHZSUWJEaUNRTXl3a0NRQVhyWC9GRDRCVUFKREtVOXliRm5pTitwRlVBSkFLQUZJQlFDb0FRQ29BU0FVQXFRQUFxUUFnRlFDa0FvQlVBSUJVQUpBS0FGSUJBRklCUUNvQVNBVUFTQVVBcVFBZ0ZRQ2tBZ0NrQW9CVUFKQUtBSkFLQUZJQlFDb0FRQ29BU0FVQXFRQWdGUUFnRlFDa0FvQlVBSUJVQUpBS0FGSUJBRklCUUNvQVNBVUFxUUFBcVFBZ0ZRQ2tBZ0NrQW9CVUFKQUtBSkFLQUZJQlFDb0FTQVVBU0FVQXFRQWdGUUFnRlFDa0FvQlVBSUJVQUpBS0FGSUJRQ29BUUNvQVNBVUFxUUFBcVFBZ0ZRQ2tBb0JVYkFJQXBBS0FWQUNRQ2dDUUNnQlNBVUFxQUVBcUFFZ0ZBS2tBSUJVQUlCVUFwQUtBVkFDQVZBQ1FDZ0JTQVFCU0FVQXFBRWdGQUtrQUFLa0FJQlVBcEFJQXBBS0FWQUNRU2h3L2Z2ejQyKzRBemw4L2tnb0FVZ0Z3UGFsVW14YllucFE2TFZkZWVZQUVyaUVWQWdGT1hDL2w2OWV2aWhoQUNQLzR4RUF0Z05PMlB6WDU5WUMyWjRONmtsUUFUSlZLaE4zcTR2Y0RWMDRvMDJ0YVVnSHdrdTJQTkFLOFNCMFZHd0VnbDFkTUt2L3k1SnVXQkFTaTZLK2J5MGlsSHZ3OWdFM3JxQ1NzaVBZSWVKMjY2SjVYT2NrS2tndHdrbG9yaVF0VXlRSFlWa1kxcXk3TDVpc080R1QxVXpaWTRmLzduWHZWQXUxOFVpOTFzQTVmTXFuYzJ3QVNESENpdWlnYmJCenRFZkJDOWVLN1B3Qk9MNVhsUFI5d29SUXp2YVpLOGdyV2tSVi9OL2hrWEFYNHMwN3FoenJwcmJHMDA4bXRVbW01M3FRZTNFZ0E1aVNYbnZjTlhXdG1UQVhBOXUxUFNBK29CUUthV3AvdHhpaGRVUXRjdStVNXBWUjhId2hZSzVjNnM5NUswc3FFM0p5M01lSUJseEpHWUYya3lPWmZxUXcrcFREanJ0N2tBZXhSUzkzdi8rV1JGVjhvSE4wQWhBUGkyTHoxNlpGS1hiVVJmV3NaK0IrTGh3U2E1bGtXTDRBV0NGalQrcVRWV1ptd2drYzJoTFFDdEtXVUdseVB5NlJTQTE0cnJRRDVLYVVtMWZYVTltZGs0YVFWSUNhbExHbDllcVVTRWFWNlJxS2xGV0M4UG9idUVCQlJqenMrUzFrN0JJeTFPeS96TE9VamlVTmFBVjZzNW41TFpmQ3Eyc2lWZW5ZVEdZSUJrZlRmYkduS3Q1amYrMk8zUjNRUUJ4QS9mREMxdnNxQmhlL3A5VVpXam15QVl6WFJXNE1ScDZPbkR0VFd6bmFIV0lDNGVwbFdQMW0zUHNqYWFBQzU1TlJKN0swUEVtZGVPMzhHa05zVkhLM2hQcWtFbndFNnVnTFNDaEJmSCtHMTlORWJLNzVRMkdOUllnSDY2cUlHMU9RaGJnZFdzQng0ZmMvUHYvLy83ZHUzdno2WmI3a255ZHZ0OXFXeDVTdUQ3YUZIbkZ5bmhXajlmZE5abFNjUEFxdEpRcG55SGFGYjBzNG9XV0pwZU4zdll2KzE0ejdJcFg0aWhIcEhGUFdKU0ZvM092bWNSeGFwZ21sNHF1QnNvWVIzQUYrK2YvLyt4OFNmaWFBRUZFdExJdWg5VGVuOGV5M0paV1E5eU9QYXN1bStCdXVnVEhxRk12cWE3dTN4MlRqc2JjR09LMDlTVFd0aWFmMzVqK1R5SUwyODNWbWVWbmtZOTdtbWJGcEZNaXFBREtHa2NRdVdSRVFiRkNHV3QyZlRHZ1h6OW1BZEpCYnRVS3RJZXBMQ0xLR2tYYzUvbTdERHNzVHk5dURucnJHVEI0SjV0SUZMMWs3QnVZVFRLWktJdEpJcGxNT1UxajVwUWdGRmJlaVdhZStuMTQ4SHlNZC9ENWEzNVIvMmxNWFF2bXM0UG1yRE1kY3lMWEo4SkNXNTNmUEViZElPTEkzVGV4UEw0WlRTMHZMY0U4dURnVitwNWVSMDNMNDA5ZFR6QWFIVVZjZmpMVmtjbVdKNWEyeWhua21rZGN5a0hEandSbVNFdVhLSS9CU3ZBWkk1SW85Um9ZUUk1OU5UeXIvb09MWGNNczd3NlBkbHdyU2p5eGo5SHB4NEhDV3dXT3VFYWVGQ2VUUkVzdnFVOHRIRWNyVFZHVTRwV2h6U21aQldUdFB5WkVxbDkvTDlLSW1NVEg4Nmx0SzRVNlFVYWFYMVBUVnhlcDI4dm1QdHoyQUxkTFRGS01uVGUwUkFHTmc5c1l6T1kxZ296ODRPM3hidWtHZXBvRFMrcHpha2tLNnpQUklLRWhOTDl0bWk1VzM1MDZTU21GWkdFMDFKbmlkaFlGYmJjeVJ0MUVuTDFaVlNzcE5LeS9oS2JVZ0tvMk1rTGVtak42R1FEWG5NbEUzbUpmWnBLYWFwU0E3Y0VTNnE3NndkMDF0Ly8vNDE5Y0RyWFVWN2Zsa2MzYWVqcjg4NDV0T0UwdXFCbFZmVTlyN3UyZGhKYStvWU9UMGM5U2dUWEMreFJINjRaczlqWGxJNW1GWWlWN2craVlTdGtiTTNVVWdvRXN1UlkrWXQrYmhPRjBwUC9kOG03N1RTc2VKbDhHKzFqSmxFcGhJSkJiT3ZheG1aNzU3UC9RbTQyMzdrUm1qNUpJaE9KWkJrc3ROTHo3ak1GS0gwMW4zSm5rSEF4cWhCcjRzUVJEM3dEK2RwY1dyUzhUTHJXRjhtbE5udFQyK0xjNlIxR20xOWpyWS9XaVB0VCtiNzZobU90NkVDQ256b1dFWnFPZEw2YUgrUWZWd2NhWnVtQ21XMHpwdXVxTDNINEpXMmtZSXJrK2NIekVxbmRmTDh3b0pEV1RYandJMFlPVDRDdkMwK251cmJpWVVTOG1tZElKWjZjSWRtUlZ6aUlZeXM0NklHSFB0YkNPVncrNVBZQ2tXMktOb2N2RkpiRko1TW9nTkMyVzJCRWl3c2JlQVYycUtVWkpKUnYyWFhCVXZla0ZvYnpHcVJkcTJCdExvTmEzOG10VU83dERWYUtxM0s2ZWVkRlFMU3BESkpMSW9jSkxaWFY1RXJsUVZ5SVJvUXlDS1pUSlhLWXJrUURhN2VSazJSeVJLcGJDUVgwc0ZMU1dNSG1TeVZ5Z25rUWtxa2NHcFd5R1FMcWJ5NFlJRExpR1JMcVJBTWNGNlJiQzhWa2dIT0k1RlRTb1ZrUUNMbjRaUlNJUnVRQjZtUUQ4amlJbHhTS3VTRkt4YjdMUDRyd0FEWjBqNnBYR1RBL3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVJRQUFBRVhDQVlBQUFCczVMdlhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEJNRGs1TlRZNFJVVXpOalV4TVVVNVFrUTVNa0UyUmtFek5UaEZSRE0wUmlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwQk1EazVOVFk0UmtVek5qVXhNVVU1UWtRNU1rRTJSa0V6TlRoRlJETTBSaUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tFd09UazFOamhEUlRNMk5URXhSVGxDUkRreVFUWkdRVE0xT0VWRU16UkdJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa0V3T1RrMU5qaEVSVE0yTlRFeFJUbENSRGt5UVRaR1FUTTFPRVZFTXpSR0lpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtnQWFxVFFBQURZWkpSRUZVZU5yczNRdU8yMGdTUlZFNW9RMzBKcjBvcjhsN21RMFk3T21aZ1JzMTFTVXBQeEdaU2ZGY3dJQkxSUlcvY2ZVaVNaSGZmdjc4ZVVNT1AzNzhLTGJDZm56Ly92MndGWEw0ZGtXaEtIUVFGNkVRQllpSFVJZ0R1SXBvVGlFVUFnSE9JWmd0aFVJZ3dEa0ZzNDFRU0FRNHYxeVdDdVVOSlVLSzUrU3R6c2FzbE1zU29Xd3NFa0xBMndocGhWaW1DbVVEa1JBR0xpZWNtV0taSXBSRklpRVBrTXhrc2FRS1phSkl5QU1rczRGWTBvUXlRU1lySlVKZ0N2elU4ODZTU3JoUWtrWHl6cElDOFV6Lys5RmlDUzJnUkptVTRHVXRELzRCT3g1UGFjZG5kTTJXWFJjc2NFTVNCM1lTelhaaWlhemRrSlluUVNabDBYdTFSVGhUT3hPNmJCSHR6M0J4Qk11azE4RFJud0JGVzRSSngwUUpPTzYzU1NwbE01bk0zS0JrZ2QxYW14R3hiQ0dWN3BZblVDWmx3c1pidGF6UTlveituV1BGc3ZhMlAxMEZza2dtcFhQNkhtRnBkNUJ4VEpTQjQzanFoMTV2amQ4WDdxQ002YWR2ZU9ubWNpbWpkcjhlRGU4N0t1ZHpOQzdUc1h0aFI2U1RERHZYVEJmWjQvYjh3NzRwSTJQZnRmeU55T004N0VPc3A5Ykw1aklaalk4akVaTVVFSGxNUkI2djIwcmxQbm1uUkUxWGR0alkyaHJ0MElOOUh0SHV2R3B4V3RxYWNwdlUvbFFYd0dBNmlaTEpNM3UzeHNhbzFDTEJYS2NkaWt3alVjZDB4dmhpZCszZkorMnNLSmxFdmk4elpaRExleWFUMFRUeUtwRTgrbjFOV3RraXFWUWQrQVBwSkVJbWp5eGRPdC8zNnBOSlVwRk1SbytKMjhCeE9YSzhwMzNZMVRyZ25yeXpNbEpKU1o2bmhJSGE0K0dvbUw1M21rZUpwWFNtbkNsSjVlV1ZzcDNwWkxaTVNzSzhTRWM3RlAyZTN0OGZDZlBxV3NkWFY5RHVlR0ZiU1g0OVBSN2lyVk5KYmVwNGxDNWVwWkxhMTB2RnN1eDExL3VrZE5KYTZETUVJNmtnTTVtMHBvL0l0SEpFcisremxCS2RVS0pQTFdjS1JsTEJyR1R5TEZIMHZONHlybEt6dm1GSjVyN0p6aW9UWG90SVVJUno3WFJTZTlxNGRMUTlvd0pwYVpmbXR6d2Q3VTdaUUNhblNDbjMrLzJiMnMzbjE2OWZmeTVvaFhyYWo2T3pyVGtHNWpIVStqeHFlNklTeW15WlpMVkhUZklnaHIzcDNUOFBSQlNaVGw2bGkvSWd3V1FtbFpBa3MvSksyU2lacExkQmcrTFFEcDJyclhtNHY3OFFUZTlabmRMdzJreXA1QlI3WTd1VGViT2wwdkZ6eldzZlh5K2ZENmJQLzU0c3I2dG16MGYzZnFzNE5zcXQ3VXJYMG5tTXo2ekJwaUdSKzRTZGQrc1F4YXRwUWxQS2l3UmlrUGFhYWFYcTZ0aVB4ODZuQkRPU1RyNzZ1VFdwTEVrcDl5UmhySlJKbFVoZUpBL0N1RTVhYVJYT3d6YW5RaTRqTGM0c3FRd0paL1ZwNDJ5WmxBQ0o3SHhiU2VRbWxacUIyTklnbDU1eGtpeXBwUENQMDhZTjR5Y1o2YVJXSmhFaW1YVTdCS0k1UjR2VCs1N3EwN1JmRE9vZURUOGZuZTlyV3NiV2JmWDU5SEZHUWxrcGsxNlJ6SlFMOW0xeG5vMTUxUHorYVV2eiszaDhrbGhxMDBsTHFwazZubkpQM2pHaE12bkxodjlTRTdnYWYzVU5meVJLNVJZNWxyTGlucXBSeVFTNFlySWFQVUdSNm9EU09YNlNKUzB5QWZKcUk3eU9QanVqVEJSRXIwRUJyS201M09meUpQOHQ2UVJZVXlObEZ3bEVtYk5NMkdqQU80dWs5VXJ5S1VYZU8zMzJ6YVRKQktUU1h6OGo5Vm9pQkRGVFhNUUI1SXVtVEYyWTRETThvMWZSZnZWL3NzSFZwZEU2SERCRk1CL2RNZU1wZWJOdnh3aGNKWkZzVjI5bHc0MVVObDVPWUNlUmJEZGNrSEZPT21xOGhFU0E4YVF4OVg3S1pmR0tWMXZZL1Z0eFZUNGMreVdweHBZVmZFYkMwZUlBOFMxUWRpY3l4VllsZUdOSUowQmZTbG55RUx2TUpOQjc4WTEwQXNTbmxDazF0dk9qT0tVVG9ENmxySkRYTWxGRW5CYVdYQ0NKOUtlVmVWZktkbDRsbXpHZ1N4ckEranBxZnY5dmgyUmRiaCt5UW9zakhyQ2RPQUpySWlXOWxGa2JRaW9CbHFlVnNtSUJkdTRUQVd4Y08yWEQrVDZLZG9TRHF3dWpwZTBwdXhVMkFJUUxwZlZ4b1lRR25LL3I2SHBHK0l5Qzdya243S01uL21sM2dPZHRUMnQ5cFE3UzduYkZIWEVBSjY0bkJRemdMWVJTVHJTc3dFMnRuTHRJalo4QUo2dUozUjZqNGR2RlFDVURBN09YU0NpU0NIRHkyc204WTV2djdRQjcxbmphcWVPeXlkK1FYb0EzcUxPeWVYRVRDWENpK2l1YmJoUWlBVTVZUTFzVjdvc3pQQ1FEOG1pcm1jc0poU1NBTjZxcFlpTUFSS0tRQVp6T2FqdWNWaVk5WUo5YUtvb1Z3TnUxUEw1ZERMeDVMU2xhQUhGQzZYeHFJQUQ4SC85eHlZNHlJVGpncExWU2JEaEFEZXkra0FRQVhMRDJGVDRBUWdGQUtBOXhMMW5nL0xVam9RQWdGQUNFQW9CUUFJQlFBQkFLQUVJQlFDZ0FRQ2dBQ0FVQW9RQUFvUUFnRkFDRUFvQlFBSUJRQUJBS0FFSUJBRUlCUUNnQUNBVUFvUUFBb1FBZ0ZBQ0VBZ0NFQW9CUUFCQUtBRUlCQUVJQlFDZ0FDQVVBQ0FVQW9RQWdGQUNFQWdDRUFvQlFBQkFLQUJBS0FFSUJRQ2dBQ0FVQUNBVUFvUUFnRkFBZ0ZBQ0VBb0JRQUJBS0FCQUtBRUlCUUNnQUNNVW1BRUFvQUFnRkFLRUFBS0VBSUJRQWhBS0FVQUNBVUFBUUNnQkNBUUJDQVVBb0FBZ0ZBS0VBQUtFQUlCUUFoQUlBaEFLQVVBQVFDZ0JDQVFCQ0FVQW9BQWdGQUFnRkFLRUFJQlFBaEFJQWhBS0FVQUFRQ2dBUUNnQkNBVUFvQUFnRkFBZ0ZBS0VBSUJRQTJFNG92Mzc5K3RQdUFNNWRPeElLQUVJQmNCMmhIRFl0c0RVcE5WcXV2UExBMVFWd0JhR1FCM0RTV2luZnYzOVh3QUNHK1k5TERNb0NPR1hMY3lSUEQyaDFGdGVTaEFKZ21sQWl6SFlzZmo5dzFXUXl2WjRsRkFCdjEvSklJY0FiMUZDeEVRQmllYmVFOGw5ZWZHdVNmRUFTYlRWekdhRWNnNzhIU0diREdpb0pLNklsQXQ2akpwcm5WVTZ5Z3NRQ0lqbkJQRXJpQWgzRUFHd3BvaU9ySnN2bUt3N2dSTFZUTmxqaC8vdWRlOHNDZFh4UkswZG5EYjVsUW5tMEFTUVg0Q1ExVVRiWU9Gb2k0RTFxeFhkNUFKeGFLTXY3UE9BaTZXVjZQWlhrRlR4NlZ2ekRZSk54Rk9DTFdoZ1lrRTA3WlZ3cmxKcnJTWTdCalFRZ1A3RzB2Sy9yT2pKaktBQzJibmxDK2o1dEQvQ3kzZGx1UE5LVnNzQjEyNXhUQ3NYM2U0QjFZamxtMWxwSldwbVFtK2xXUmp2Z01ySUlySWtVMGZ4WEtKMVBEOHk0QXpkeEFPdnJxUG45dngyeTRzdUJ2UnVBYkVBYUc3YzdMVUk1Vm0xRTN6NEcvc2ZpSVlDcWVaYkZDNkR0QWVhM08yazFWaWFzNE1pR2tGS0ExK25rQ0s3RlpVSTVBcWFWVW9EY2RISWsxZlRVbHFkbjRhUVVZRHlkTEdsM1dvVVNFYUZhUnAybEZLQ3ZOcnErNVI5Uml6cysyMWdMQkxTM09HL3piT09ScENHbEFHOVViMzhMcGZOcTJjaVZlblVUR0hMQjFTWFNlcU9rS2Q5Ry91aU8zUjZqUVJwQTdIREIxTm9xQXd2ZjB0LzFyQnpSQVAzMTBGcC9FYWVjcHc3S0hvMHREcWtBTWJVeXJYYXlibCtRdGRFQVlvbXZrZGpiRnlUTy9HajhHVUJlSnpCYXYyMUNDVDdUTTdvQ1Vnb1FXeHZoZGZUWkdTdStITmhpVUZJQitzZEtwbi96K0Q2d2dtVmcrcGFmLy83L2p4OC8vdmhpdnVXUklPLzMrN2ZLTnE5MHRvUWVRM0tOdHFIMjkxVm5UMTQ4cE90SWtzbVU3L3pjazNaR3laSkt4WFIvRi9ydkhmZEpMTWNYTWpnZVNPSjRJWkhhalU0ODV4QkZxbHdxbnZZM1d5YmhxZi9iejU4Ly8vSGlYMG1nQkJSS1RSSm9uYVkwL3IyYXhOS3pIc1J4WGRFMFgxODFLSkpXbWZSTzA3dzl2aHB6dlMvWWNlVkZtcWxOS3JVLy95T3hQRWt0dHdmTFV5c080enpYRTAydFJIcUxQME1tYWR5REJSSFIra1JJNWZicXRVcTUzSjZzZzZTaUJhcVJTRXRDbUNXVHRFdjA3eE4yV0paVWJrOStiaG9yZVNLWFp4dTRaTzBVbkVjMmpSS0pTQ21aTWhtbTFQWkdFNG9uYWtQWHZQYng5ZVB6QWZMNTM1UGxyZm1IL1VUUnRkOHFqbzJqNG5pcmVTMXlQQ1Fsc1QxeXhIM1NEaXlWcjdjbWxlRjBVdFBtUEpMS2swRmVhZVhFTk54dU5QWDA4b0JNamxYSDRqMVpHcGxTdVZXMlRhOEVVanRHVWdZT3ZCNFJZWjRZSWorOWp3REJqSWlqVnlZaHN2bnl0UEZ2R2s0ZjE0d3JQUHQ5bWZEYTZESkd2d2NuSFRjSkxOUmp3bXZoTW5rMkpMTDZ0UEZvVWhsdGI3clRpYmFHY0pKVHltbmFuRXlodEY2U0h5V1FudGRmanAxVTdoVHBSRW9aK2M1TWxtQXkxN2V2NWVsc2UwYmJpcEw4ZW9zRXlBSTdKNVhlZVhUTDVOVVo0UHZDSGZJcURaVEs5eHdWNmFQcHJJNWtndHY4OFpUb1ZMS2tEWCtaVUJKVFNtK1NLY256SkF2TWFIVkdVc1l4YWJtYTBrbDJRcWtaVHprcUVrTHZtRWhONm1oTkprUkRITE5FazNuWmZGcDZxU3FRZ1R1NVJmV2FSOFBydGIvL09NMHhNTDJyWTg4dGl0SDkyVHQ5eHZHZUpwTmFCNnk4VXJaMXVsZGpKYlZwbytjVWNOVGpSbkN0cEJMNW9abzlqM2tKWlRDbFJLN3c4U0lLMWtiTjFpUWhtVWdxdmNmTExmbVlUcGRKUyszZkorKzAwckRpcGZOdjFZeVJSS1lSeVlTTU10NFRlUlpueitmeUJOd1ZQM0lqMUh3S1JLY1JTRENacWFWbEhHYUtURnBydm1UUElHQmpIRUhUUmNqaEdQaUhjN1ExUjlLeE11czRYeWFUMlMxUGExc3owaTcxdGp1akxZOTJTTXVUOWI3akRNZGFWL0VFUGhBc0k2Mk10RHRhSG1RZUV5T3QwbFNaOU5aNDFaV3lqK2k4Z2paU2JtWHkvSUFaaFgxTW5sOVlZQ2lyWmh5NEVTUEhRNENWeDlKeE83Rk1RajZsRTZSeURPN1FyR2hMT21TUmNVd2NBY2Y5RmpJWmJua1MyNS9JdGtScmczZHBoY0lUU1hRd0tMc3RVSUtCcFF5Y3ZSVktTU1FadFZ0MlhiRGtEYW1kd2UxRXgxUGE4UmxkczJFdHo2UVdhSmRXUmh1bFBUbjF2TE0rL05PRU1ra3FDaHdFdGs4bmtTdVVCV0loR1pESEFwRk1GY3Bpc1pBTXJ0dzZUUkhKRXFGc0pCYkN3ZHNJWXdlUkxCWEtDY1JDU0lSd1dsYUlaQXVodkxsY2dFdElaRXVoa0F0d1RvbHNMeFNDQWM0aGtGTUtoV0JBSU9mZ2xFSWhHaEFIb1JBUGlPTE51YVJRaUV1aDJ3bzUvRnVBQVFCWWRqNm54SDFEK0FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1jQUFBRENDQVlBQUFEOXlOWjFBQUFVZFVsRVFWUjRuTzJkZVhBYzFaM0hQOU9qR2MzbzhraEN5QmMrWkl5TmtXM1pZTUFzeGdmQk51Q0VRQ0FKTEVlMm5Fb3RXY0s1bTlxdDFOYW1zdVNmVFlvUUVvNVVMYnNPQ3lFSGdlSmNjQlpqVE1EQkI1YU5ZMnlNZklBUEdWblM2SlpHbXRIKzhVWllsa2VqT2JyN2RiOStuNnFwa3NZejNWLzNlMSs5N3ZkKzcvZnpiVy9iaThaMENvR3B3RFJnU3ZKVkNWUUFaeVZmWlVBWUNDVy9Vd29VQUFOQVIvSzlYcUFIYUFkT0psOHRRRFB3YWZKMUNEZ005Rm42UC9JZ0JiSUZ1SnhpWUE0d0Q3Z0FtQXVjRDB3RWZEa2Vzd0Fvei9JN2c4QnhZQS93SWZCWFlGZnk5NjRjZFhnZW54NDVzcUlHdUF4WURQd05VQXY0cFNwS1R4ellEYndMYkU2K0dxUXFjaEhhSE9tcEFsWUNWd0dyZ1BGeTVaaENJL0FHOENkZ1BkQWtWNDV6MGVZNGsxcmdKbUFOVUFjWWN1VllTZ0xZQ2J3TS9BRXh5bWlTYUhNSTVnTTNKbCt6Sld1UnlWN2d1ZVJycDJRdDB2R3lPU3FBVzRDMWlCRkNjenIxd0pQQWJ4QXpaSjdEaStaWUR0d0pmQVV4NWFwSlR4L3dJdkFFOEpaa0xiYmlGWE1VQWpjRDl5SnVvVFM1c1JONEdIZ1dENnlycUc2T0NQQTk0THVvTWRQa0ZCcUJSNEZmQWxISldpeERWWE5FRUtQRVBjbWZOZFlRQlg2T0dFMlVNNGxxNWhnSDNJY3d4ampKV3J4RUc4SWdEeUZDWFpSQWxUbjhBc1N0MHlmQXY2R05ZVGZqRU5lOUFkRU9Tb1FscVdDTzFZZ0h4VWNSQVgwYWVaeUZhSWVkaUhaeE5XNDJ4MVRFeXU3L0lvTC9OTTVoRHFKZFhrYTBreXR4b3prS2dBY1FrYWRySkd2UnBHY05vcDBld0lXM1dtNHp4d0pnRy9CVFJMaTR4dmtVSTlwckc2TDlYSU5iekZFQS9BQjRINzJJNTFibUk5cnZCN2hrRkhHRE9jNEZOZ0VQQWdISldqVDVFVUMwNHlaRXV6b2FwNXZqZGtRQTNHTFpRalNtc2hqUnJuZklGcElPcDVvakJQd0srRFg2MlVKVmlvRjFpSFlPcGYrb0hKeG9qdW5BZThCM1pBdlIyTUozRU50M3A4c1dNaEtubWVOS1lEc3VtOVhRNUUwZG90MnZsQzFrT0U0eXg5OGpGbzZ5emJ5aFVZTnk0SFZFUDNBRVRqQ0hIeEd3OWpoNk5zcnJGQ0Q2d1VNNElLdUxiSE9FZ1Q4aUltazFtaUh1US9TTHNFd1JNczFSamtnTmM1MUVEUnJuY2gyaWYwaTd6WlpsanJPQk40SExKWjFmNHc0dUJ6WWcrb3Z0eURESGVPQnQ5SXlVSmpQcUVQM0Y5bTNPZHB1akNqRmllRGszbENaN1ppUDZUWldkSjdYVEhHY2gvb042NzRVbUYrWmdzMEhzTXNjNHhNUFZYSnZPcDFHVHVZZzh2N1pzZzdiREhFSGdlZlF6aHNZY0ZpRDZVOURxRTFsdERqL3dETERDNHZOb3ZNVUs0SGRZdkZCb3RUbCtnVWpPck5HWXpWY1IvY3N5ckRUSHZZaWN0QnFOVmR5SmhkRVZWcGxqQldMZnNFWmpOVDhCcnJiaXdGYVlZenJ3V3h3UU9LYnhCSDVFWXV1WlpoL1liSE1VQVM5ZzgyS054dk9NUTh4Z0ZabDVVTFBOOFNnNk80aEdEcldJL21jYVpwcmpadUJiSmg1UG84bVdieUdxZFptQ1dlYVlnYWo4bzlISTVuRkVmOHdiTTh3UlFOU05LelBoV0JwTnZwUWhIdER6M2xWcWhqbitHYmpZaE9Ob05HYXhDUGlYZkErU2IvR2FDeEJaSTNUaFNZM1RpQUVMRVltc2N5S2ZrY01QL0JmYUdCcG5Fa1QwejV6WDIvSXh4LzNvMnltTnM3a1kwVTl6SXRmYnFrbkFYcUFrMXhOck5EYlJpZGhKZURUYkwrWTZjdndIMmhnYWQxQ0M2SzlaazRzNWxpQVcvRFFhdDNBTHNEemJMMlZyRGovd0NPREw5a1FhaldRZUljdUg4MndyN055R1NKV2l5WkxtL25ZYVk4MmNpTFhTT3RCT2EzOEgzWWsrK2hJeFlvTUR4Qkw5OUNaaWhJd2dRU05Bd0ZkQXlBaFNaQlJTSGlpbHZLQ002bUE1NDRPVlZBYjBlbXNPMUNMNjc3cE12NUROQTNrUTJBZE15MWFWRnprUmErVkF6MUVPOUI3alFNOHhPdU05cGgyN3hCK21KanlSbXRCRWFzS1RxQTdxM05zWmNoaVlCZlJsOHVGc3pIRVhGbTlMZER1TnNXWjJkT3ludm5NLzBZRk8yODRiS1NpaHJtUW1DMHBuTWo1WWFkdDVYY3JkWk5pUE16VkhNZEFBVk9jaFNrbDZFbjFzYmQvTEJ4MzdPQjVybGkySENjRktGcGJPWWxIWmJNS0dYcDlOd1FsRVlHTFhXQi9NMUJ6M0lkTENhNUpFQnpwNU83cURiUjM3aUNYNlpjczVnNkFSNE1MU1dTeUxMQ0JTb0dmZFIzQS84TE94UHBTSk9ZTEFmbUNLQ2FKY1QwZThtdzJ0MjNtL2ZRL3h3WVJzT1dQaTl4a3NLajJmTDFWY1JLbmYxSTF5YnVaVHhMYmFXTG9QWldLTzJ4R0ZLejFOZkREQnBtZzlHNklmT0hLa0dJdWdFV0JGWkNGWFJPcncrMlNYWlhFRWR3QlBwZnZBV09id0FidnhlSDdiUTcyTnZORDBObzJ4RnRsUzhxWTZXTUVOVlV1WkZySTlhYm5UMklPWTNoMGM3UU5qbVdNVm9rNmJKNGtQSmxqZnNvVk4wWG9TbzE5RDErSER4OUpJSFNzckx2YjZLTElha1hzM0pXTmRHY2NVTDdTYjFvRU9IanY2UEJ1ak81UXlCc0FnZzJ5TTd1Q3hvOC9UMHQ4dVc0NU0wdmJ2ZENQSEpPQVEyYStpdTU2R25xTThmV0k5M2ZGZTJWSXNwOGdmNHRicWxjd0lUNUl0UlFZRGlEeHJSMUw5WTdxUjQ5dDQwQmoxbmZ0NTh2Z3JuakFHUUhlOGx5ZVB2MEo5NTM3WlVtUlFBS3dkN1I5SEd6a014S2h4ampXYW5NbW1hRDJ2Tlc5VzdDWXFNM3pBTlpXTHVTTGl1ZEM1SThCVTRJeDUrZEZHam1WNHpCaXZOVy9tVlk4YUE4U1V6YXZObTNtdGViTnNLWFl6R2RIZnoyQTBjM3pETWlrT1pIM0xGdDZPMXN1VzRRamVqdGF6dm1XTGJCbDI4ODFVYjZZeVJ4QVAxZFQ0YzlzdTNtemRMbHVHbzNpemRUdWJ2UFhING11a3FCU1Z5aHhYQVJXV3kzRUF1em9iZU9Ya3U3SmxPSkxYbWplenE3TkJ0Z3k3cUFCV2pud3psVGx1c2w2TGZCcGp6ZnorOHcyZWZjWVlpMEhndWFhM2FPcVB5cFppRjJmY0xZMDBoeDlZWTQ4V2VmUW1ZanpWK0RyOWd3T3lwVGlhdmtRL1R6ZSs0WlhyOUdWR2JLTWRhWTdGZ1BLN1pWNW8ya1N6dDFlR002WXgxc0lMVFp0a3k3Q0RDa1QvLzRLUjVsaHRueFk1N096OHhLc0xYam16dldNZk96cy9rUzNERGs0cm56YlNIS3RzRkdJN1hmRWVYano1am13WnJ1VEZrKytZdWcvZW9aejJVRDdjSEdXSUF1aks4bnJMKzNSNUpDekViTHJpdmJ6UjhyNXNHVmF6QUlnTS9UTGNISXRSdU1qbGtiNG10cmJubFZIZTgyeHQzOHVSdmliWk1xekVqMGhhQ0p4dWpzdnQxMklmcnphL3g2Q2V1TTJMUVFhOUVGN3loUStHbTJOSmlnOHF3ZjZlSXh6b09TWmJoaEkwOUJ6bGs1NlVFZDZxY0lZNUNsQzRuTUFHSFI1aUtvcUgyeXdrdVZWanlCem5BV0ZwY2l6a3M3N1A5YWhoTWdkNmp2RnA3d25aTXF3aWhNaUsrSVU1bEEzaTM5SytSN1lFSmRuUzhaRnNDVll5SDA2Wlk3NUVJWmJSUHpqZ3BlQTVXL213czBIbHNKSTZPR1dPZVJLRldNYnV6Z1AwSnRMbTdkTGtTRzhpeHU3T0E3SmxXTVZjT0dXT0N5UUtzWXp0SGZ0a1MxQWFoYTl2TFFoekJCR1pScFNpTzlGSFEwL1daZUEwV2REUWM1VHVSRWJaL04zR1JDQm9JT3B0S0pmWjYrUHVUNVhMTitVMEVnenljZmVuc21WWWdRRk1OeEI1ZTVSamY3ZlNDMVdPUWVIclBOMEFhbVNyc0lLRHZjZGxTL0FFQjN1VlhVT2FicURnODBaWHZJZm0vamJaTWp4QmMzODdYV3FHc2s4MmdBbXlWWmpOTVFkVVdQSVNpbDd2OFFaUUpWdUYyVFQyS2RsWWprWFI2MzIyZ1lKN3hwc0g5UDV3TzFIMGVsY2FnSEoxZWoyZVZ0OTJGTDNlRVFOUktWWXBPdUxkc2lWNENrWDNsaGNiaUwzalNxSDNpZHVMb3VZb00xQnczM2lmRGphMEZVV3ZkOEFBU21Xck1CdUZRNmtkaWFMWHUxaTVtQ3JBRmZYQlZVTFY2NjJrT1R4ZUlkVjJWTDNlU3Y2dkFqN1BsVEtVaXFyWDJ3QTZaSXN3bTBMampEb2tHZ3RSOUhwM0dVQmN0Z3F6S2ZhSFpFdndGQ1YrSlJQWDlCdUFjc3VicGY0aTJSSThoYUxtYURlQUx0a3F6S1lpb055NnBxTlI5SHAzR1VDcmJCVm1VMW1nWkdNNUZrV3ZkOVFBbElzM0hsK29YS0N4bzFIMGVqY2JnSEk1NVNjR2xXd3N4ekpCemV2OXVRRTB5bFpoTnNYK01KV0JjYkpsZUlMS1FKbXFEK1NOQnFCaytvanBJZVYyL3pxU2FlcGU1eU1Hb0dST3g1bEZrMlZMOEFUbkZaMGpXNEpWSERTQWc3SlZXTUY1UlZNdzhNbVdvVFFHUHM0cm1pSmJobFVjTklCRGdISmhsVVZHSVRWaDViSU9PWW9aNFVrVUdZV3laVmhCZ3FRNVlvQ1NTV1V2S3AwbFc0TFNYS2p1OVQwR3hJYWljdjhxVTRsVjFKYlVFRkl6S0U0NklTTkliWW1TeVRJaDZZY2hjK3lTS01ReUFyNEM1cGJNa0MxRFNlYVd6RkEyVkoya0g0Yk1zVk9pRUV1NXVQUjgyUktVUlBIcldnK256RkV2VVlpbFRBbFZVeE9lS0Z1R1V0U0VKeklsVkMxYmhwWHNoRlBtK0JoUU1yOEt3SXJ5QzJWTFVBckZyMmN2c0E5T21XTUEyQ0pOanNYTURFL1dvNGRKMUlRbk1qT3M5QUxyQndnL25MYUgvTTl5dE5qRDFSV1g2aVhCUFBIaDQ5ckt5MlRMc0pyM2huNFlibzUzSkFpeGpTbWhhaGFWS2YwUWFUbUx5bVl6dVZDNXBQd2oyVFQwdzNCemJFYkIvZVREV1YxeGlkNWZuaVBGL2hDcktpNlJMY05xRWd3YkpJYWJveDNZWWJzY0d5bjJoN251ckNXeVpiaVM2ODVhb21wbytuQjJBTkdoWDBibXJYckRYaTMyTTcva1hPcEtac3FXNFNvdUxKM0YvSkp6WmN1d2c5UDYvMGh6dkc2akVHbGNYM1VGbFdvbUJUQ2Q4Y0VLcnErNlFyWU11eml0LzQ4MHgyWVUzRk0ra3BBUjVMYnhxMVVPZnpDRlFpUEFyZU5YZWVVNnRUQnNwZ3JPTkVjY2VNVTJPUktaRUt6azYyZXYwTk83bytBRGJxeGFUbFVnSWx1S1hiek1pQW1wVkxseW43TkhpM3ptbGN4Z2RlV2xzbVU0a3RXVmx6TFBXMEdiZnh6NVJpcHpyRWNNTVo1Z1dXUUJLOG9YeXBiaEtGYVVMMlJaWklGc0dYYlNRb3JKcUZUbWlKSENSU3F6cXVJU2xrYnFaTXR3QkVzamRWNVl6eGpKODRoK2Z4cWpsU0Q0cmJWYW5NYzFsWXU1cG5LeFo1OUJmTUMxeVd2Z1FaNU45YVp2ZTl2ZVZPOGJ3R0ZBNlFpelZOUjM3dWYzbjI5UXRscFJLdncrZzYrZnZjS3I2ejlIZ0tta3lLTXcyc2lSQVA3VFNrVk9wYTVrSm1zbnJGRTFjY0FaaEkxQzFrNVk0MVZqZ09qbktmOFNqalp5QUV4Q1pDYnh4Q1QzU0ZyNjIzbm14SHFPOUNtWExmVUxKaGRXOGJmVksxWE5rcDRKQThCMFJrbHNtSzdzMlZFOHN1YVJpb3BBR1hkT3VwNWxrUVg0RkhzUzhlRmphV1FCZDA2NjNzdkdBSGlWTkJrLzA0MGNBS3Z3U0VoSk9nNzFOdko4MDBaT3hOeGZyYUU2V000TlZjdVlGaG92VzRvVFdFMmFlTUt4ek9FRGRnTnpUQmJsT3VLRENUWkY2OWtRL1lCWW9sKzJuS3dKR2dHV1J4YXlORktuYlBYWExOa0QxQUtEbzMxZ0xITUEzQTc4MmtSUnJxWWozczMvdFd4amE4ZEhycGpSOHZzTUZwV2V6NWNxTHRMbDRFN25EdUNwZEIvSXhCeEJZRCtnYkZMVVhJZ09kTEl4dW9QdEhmc2NPWklFalFBWGxzNWlhYVNPOG9KUzJYS2N4bWZBdWFSWStCdE9KdVlBdUE5NHlBUlJ5dEdkNkdOciswZHNiZitJcHY3bzJGK3dtS3BBaEVWbHMxbFVOc2N6MDlFNThBQVo5T2RNelZFTU5BQktKeXZLaDBIZ2NPOXhkblUyc0x2cklHMERuYmFkZTF4QkNiWEYwNWxYTW9PcG9RbUt6YTJaemdsZ0Joa1VpczNVSEFCM0FiL0lRNVNuT0JGcjVVRFBVUTcwSHVOQXp6RTY0K2FsQlN2eGg2a0pUNlFtTkpHYThDU3FnK1dtSGRzRDNBTThrc2tIc3pGSEVKSDhiV3FPb2p6TElORFMzOGJ4V0RPZngxcHBHZWdnMnQ5QlI3eUg3a1F2L1lrQmVoTjlEQ0ttQjBOR0lRR2pnQ0lqUktrL1RDUlFTa1ZCS1djSHk1a1FyS1FpTUU2UERybHhHSmdGOUdYeTRXeFd2MlBBRDRIL3psNlR0L0VCbFlGeG9rNWhzV3cxbnVhSFpHZ01TTDlDbm9yL1FlRzh1aHFsMlkzb3Z4bVRyVG5pd04ya1dUalJhQnpLM1dTWmx5MlhwZEozR0NYK1hhTnhLTDhEM3NyMlM3bkdFWHdmc0crdVVxUEpuVTdFdWtiVzVHcU9vOENQY3Z5dVJtTW5QeUxIbXBmWlRPV094SS9JODNOeHJnZlFhQ3htQzNBWk9lYUF6aWM4TXc2c1pZejRGSTFHRWpIZzIrU1JIRDNmMk9YZHdJL3pQSVpHWXdVL0JqN001d0Q1M0ZZTkVRRGVCUmJsZXlDTnhpUzJJVzZuOGdxWE5tUFhTejl3TTZLRWdVWWptM2JnbStScEREREhIQ0FpZHU4MDZWZ2FUVDU4RjlFZjg4Yk0vWksvQWRhWmVEeU5KbHZXQWMrWWRUQ3pOeFAvQTdETDVHTnFOSm13RzlIL1RNTnNjM1FEWHdWT21ueGNqU1lkYmNBTmlQNW5HbGFrb1RpSWVDQlN1dmlteGpIRWdWc1FlUTVNeGFvY0xXOEMvMmpSc1RXYTRYd2ZlTTJLQTF1WndPaGg0SEVMajYvUlBJNkZpVCtzenU3MVBlQWxpOCtoOFNZdklmcVhaVmh0ampqd0RXQ0R4ZWZSZUl1TmlJVm5TNTlyN2NnTDJZdVlTZERiYXpWbVVJK1lFVFYxWmlvVmRpVk5iUU5Xa21jZ21NYnpmSWpvUjIxMm5Nek9qTUpOd0pXSUJMNGFUYmJzUWZRZjJ3cW0ySjF1ZThnZ2VZY0NhenpGWG13MkJ0aHZEb0JHWUFraXJGaWpHWXR0aVA3U2FQZUpaUlZxT0Ftc1FNdzZhRFNqc1JFeFlrZ0pSNUpaeGFRRHVCcDRVYUlHalhONUNkRS9wTzBUa2wzaXB4ZjRHdkF6eVRvMHp1Smh4UFIvcjB3UnNzMEJZaUhuZnNSbXFRSEpXalJ5R1VEMGcvdHdRT0NxRTh3eHhCUEFOWUQ3cTFKcWNxRVZ1QmJSRHh5Qms4d0I4Q2ZnRXZSaW9kZjRFTkh1NjJVTEdZN1R6QUVpTG44eDhMUnNJUnBiZUFiUjNxYnZ4OGdYSjVvRFJFbXEyNEMvSTRQeVZCcFgwb1ZvMzF0eGFCczcxUnhEckFNV0FIK1JyRU5qTG45QnRPczZ5VHJTNG5SemdCaHVsd0QvaWdtNWlEUlM2VWUwNHhJY2VCczFFamVZQThRVTM0UEFwY0JPeVZvMHViRVQ4V3p4SUM2WnNuZUxPWWI0QUxnSStDY2NlcCtxT1lNdXhEN3ZpNER0a3JWa2hkdk1BZUt2emsrQld1QVZ5Vm8wNlhrVjBVNC93U1dqeFhEY2FJNGhEZ0ZmUnNUZjZEMGl6bUlQb2wzV0lOckpsYmpaSEVPOERzeEhaTHZUeWVUa2NoTFJEdk1SN2VKcVZEQUhpQ0g3TVdBbThPL1l0STFTOHdWdGlQSmlNeEh0NExwYnFGU1lVWi9EaVpRRDl3TDNBT01rYTFHWk5rUUU3YzlSTUNaT1ZYTU1VUTdjaFJqcXF5VnJVWWxHeEFqeFN4UTB4UkNxbTJPSVFrU2VvM3NSOThPYTNOaUpHQ21lQmZva2E3RWNyNWhqT01zUmV3YStnakNOSmoxOWlOMmFUNUJEb1hzMzQwVnpERkdCeU02OUZxaVRyTVdKMUFOUElvb1N0VWpXSWdVdm0yTTQ4NEViazYvWmtyWElaQy93WFBMbCtUQWRiWTR6cVFWdVFpd3d6a2VkNmU1VUpCQW1lQm40QTZJNmtpYUpOa2Q2cWhEcEoxY0JWd0hqNWNveGhVYkVqc3MzRUR2dmJFMlU1aWEwT2JMalBFUms2U1dJT3RlMWdGK3FvdlRFRWFQQlpzUWVpczNBeDFJVnVRaHRqdndvQWVZQTh4QkdxUVhPQnlaSzBISU0rQWhoaHQySXdxVjdnRTRKV3BSQW04TWFRc0RVNUdzYWNBNVFpWmdocTByK1hJb3dWeUQ1blFqZ0F3YUJhUEs5ZmtUbjdrU3NScmNnYm9NYWdjOFFRWDJIa3krcE9aNVU1UDhCTWt2dkZzMFhxWDhBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21haW4tcGljLThkZmYxYTE1M2YxYTkzMGNlYWVkNGIxZmJjNzVhZGYzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUhNQUFBQWRDQVlBQUFDWnZWUE1BQUFJYVVsRVFWUm9nZTJiZjNCVVZ4WEhQM2RmbkFxYmtLaVZ4a3BNMGtZelVhWUptV0t0T2lXMEJlbUlFMndjRkJGWnBvcW1kU3hvLzZoYUJkcFJaOVJhNkI5bTJvb204Z2VNRW1YcGpGSkZrb0tPRmhYVGlqSW9RbkNRSXRJMmdTd1crbDdYdWN2M3hkdkg3bWJ6Qzl2T2ZtZmV2UGZ1M25mdmZmZThjODczbkh2WHBOTnBDa1dxY1dIY2VQNDB2R0NLOGZ3WVhvQ0orZWVONTZmd2dnSGorWUV0dy9NeE1Yc09NSjRQTVhzT0xweGpBYkZOenhiY1p4R0ZvMlNrbWtQMWk2dE1MR2pIODVmaThSYkFTdUwxVHBYemdBKzhCdGdKUEFJa2dSZUxjcmkwaU9YcTdVenRzdEtodWlYZkJQNE96QVhXQWRYQUlXQ3Z5cituNm5jQ2M0Qy9BVjNBazhBTnI4TDVlbGtqcXpEUFZDZXVBZjRJTEFUZUh6L1FmWDE4ZjlJSzd0dEFLVERmS2kzd0tMQWM2QUE4Q2RWcTd5K0JYY0RYVlY3RUpjQkZ3anc5NHphclVYdUFYd0hOcFFkLytBdGJucHJaK2tsZ0h0QUtERHFQYkFIdTE3a2NHQUJXQVRjQ3Q2bDhSSE5leFBqeEVtR2V2bkxsTmRLMmpySWptMWFVSHRyOG40d2dHOXFtQTk4QTdwcTZiOGVoTEwxK1dVSzh6eW5iRGJ3YnVGNSt0SWhKeHJER0RGYTJsNW9ZM1VCMzJkSE91eVBkZmxHKzhydE9tZlduZjlMMUM4Qm5SSUNzS2U1WHVYM21mY0J2ZFR4VXlPc1lZeEpBalcwbm5VNTNadm5kbm9ickFCZlZlVFVqVndUaW1yODFRQlh3dXpQVmljU0ZjTUszNFVYTXhMQW1kclAxajJlYkZ6eUh4MlBBYTRHcGdOWG1aclZ4QWxnUGJJdjBzMHZDM3c0OFhjQThXei9jQXZUbUVWUWhkVUlza2orMzJKQmxmRkgwNkw0clM5czlPWjdwVi8zZUhMODNBUStNMEM4aW15NGUwTFBEME1kc0xXSFMvZGd6d2h5Y2ZrY1ZzY3pMV3BiNjRVaGpkY0R6T3Rzd1pLMkkwZWVBeDJWK2JXanlDZUM0Zk9vVndMbElPNmRsam04djRJVW1HcUhnUTR3a3pMRHU0M2wreTRhRWhMOGl5MjhWSXp5YkMwMTVubHRrakxGeW01dE9wd2RDeld3SC9qRHQrTVB2amRZZXFsOXNYNmdudmorNU50VzRjSVo4WWIxTTY5c2x4SStyUXh0ci9rc3NkbnVrcVFYQVQ0QXZSQWpVWktOQ211a0tvOFp4QmFORlBzMnJrRUN0MXF6TzAyNmY2aFNDdmh4MWFuUTB5VnJNQ2duUTBvZy92Q0RJdWlYV2pMNEgrS21LTmloaE1FdGx5eVNnamNBYkpPQ2ZBemRuNmR5YTVuOER0MTRDQWJwWVZHRFphTkVsa3hnZXRZN0dyOUpFNThMcXlMUHVFVVdYWXZ6aFo5THB0RDFxSFJmUVpIbEdiUER5ejVZcU5reG1hV2lXVE9nKzNWdnQrckh6dFF6SmJQNVZRa2RFNTlvc2JhV2xyZk1uWUNKSGcxYlY3WGZHdlh3YzdiVTQybzNjemlwZHUrWjFJajRZNURON0hIKzcxaGhqajRwME9yM0NzVEN0SlRJTlI4cFBkSnpLMHREYnJLRGlCN3A5M2FjbGVCZlBTT2doOWdOZnlUR3d2VEt6ZVdHL3ZJbVloWWlKdFZwelZHYXBhWnltMXNVYTUzcTl6SENMK3A0TWhQMlZTMXU3VkZZVEV5UE5GanRhVEJlcENiRVZ1RVVoeUZ2RmFLT3diUFYxOHA5UkhKSTV5Z3RqVEk4eEpwM3IwRWRWQ0psd3RXTkRoSmxPbE9hRWFDMnNXZ1k5ZWdmM0dDMDVhb3JjVjVRbzNYYmRZR1Y3WDJhbHcxM2g4S2dFcHFRYTJ2cncvSk40R2ZOMFdPYWtSdUhLYXJIVXc3cVBxM0ZybW9OSWgxT0F5MFk1NlBFZ25PQStSd3UzU1pETHBVa1RoZEJONWZPVkU0blFaVlRyM0IreVdldnp2cHFsSXh1bVhBMThUZmR2bnJwdng3MW5aOCs3Ri9pWldPbDFJamR0aXVVYWdlK292ZWNqN2RtMnZqV0tGd3BqdDJ4WVBzTEV1U2JXYlNPcDhva3l0ZXZFVERzanhDZGYrTk1waysraTBIR3MwM205TWFiR2VjZGtpU2I4eGZJVEhSZDFQbFMzeENZUnF1SUh1cmVsWnJaYWpYdmoyZVlGSlhnWlVuUk9lZGVWd0orZGxSTmZ4NVlzQTdFbSttU0JnMFlab0xYUlFnWE5jMFlRcG10R3QwV3V2Ni9yaEFqTVdEREhlYlpDckQ0MGxiMTVRZ3BHU0M3a1FvV1RKQW5mYjQzS014OVRpUmpwek1IS2RxLzhSRWZVTFA0RHVFclg3MVFteCtaYmYrUFVzY21BQTBvVUlPM0w5WlZaclQwNHhza2JMY0tNVDE5a1BBTVJVenRXWWJiazhIUDlPWklHNDBWVG51elQ2akJwOEt6SXlteUZGUzVzN3ZWTnFZYTJTcnpNYjgvb2EvaVFVNmRLcGpiVVJNdHNuOG96QVhzbTRVV2pxSEVJd2tCRVlBT09xUTNyNWRPaVF0RXZyVms5aW9UQVJHQWdISDlKK2FrSGc4SHBkMWgydWlRcXpOSkRtdzhQMVMrMmJIWnVmSDl5YzZweDRhZEVja0wyV3lWVys1eGp5K2ZtTUxHV0dkK1VKMnlaU0VRelBsRU5xdFVrVkVnN3h5TE1kZVBRNm1oNnNWTW1uenh0OWtXeVNpMk9tYlhuRDRZRXlDNVJkWjIrY3VXanhBTC9mMnpXSnRyNWk4MzBwR2EyUG8yWCtmcG1LWVgzRWZuYisrUURHcVRkMTJwMUpEcUJpeUhUMXQ0eFRzQm9FQ1lGK25Ja1F5cGthaE1TZkw3VTIyUWdFV216MTRrZmN3bHpJUFNYV2pYcE5jWTBhdnladVE2Rm1SUzdzZ3oxbjVGR1l0TEFaZ212VjlvVnBwUE9TVnV2bHZhbGdIc2liVmp5ZExrRU90bHdUV3cwdG5TUmRKYlJXc1pBU0Y0T2VGTEN6Q1FvaG5mbkRWYTIzMkJpd1M1aXdZM1RqbTNjN1E0MDFkRDJlengvWjN4L01yUE9lWGIyUEt1MWNiemd2SW41TDJpcHJNSjQvbUc4NEhZOGY0dXpPODhRQ3g0elh1QVJDMjRxN3M2YlBBenZOQ2cvMGJGYmE0NWJ6MVFuNmlJOTJyanl6bFRqd21xbmJFY2t6M3Ezd282dGtXZnZsNmFNSng5YVJBR0k3Z0c2UjJ0NHZXZHFsNzBqTEl3ZjZONHVXdnpJMmVZRlJzVmxUc3JPK3RHN3ROc2d6T01hN1RyNE5QQUI0RmhSSUpPTGx3aHoydkdIQTdGYXU0bnJpYUc2SlltaCtzV2g4RmJLYjM0cE1pSzdKUFlqTGFIdFZOa01aWVUrSm5iN3hDdDhubDRSdUdoMzNyUmpHLzJ5bzUwMjZQMDg4S0NOQzFNTmJRdEVqRDRxOHJOVTFhZHFTZXlVVWxsWHlDUWZWTTYzdVNqSVM0ZWNtNkRMam14NlNEc0tubEtxNnFnUzF6WUw5QU50STdGczhWM0FyOFVPajZsT1FqRmwwYlJlUWhUMFg1TlVRMXM1bm44clhqRGZlSDRUWGxCclBQOHkvZGZrcFBIOGczakJIdVA1U2J4Z2IvRy9KdjhIQVA4RmQraDNSTUp4NVNBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0ErUTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk5qSXBMQ0JrWldaaGRXeDBJSEYxWVd4cGRIa0svOXNBUXdBSUJnWUhCZ1VJQndjSENRa0lDZ3dVRFF3TEN3d1pFaE1QRkIwYUh4NGRHaHdjSUNRdUp5QWlMQ01jSENnM0tTd3dNVFEwTkI4bk9UMDRNand1TXpReS85c0FRd0VKQ1FrTUN3d1lEUTBZTWlFY0lUSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5LzhBQUVRZ0I5QUgrQXdFaUFBSVJBUU1SQWYvRUFCOEFBQUVGQVFFQkFRRUJBQUFBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUUFBSUJBd01DQkFNRkJRUUVBQUFCZlFFQ0F3QUVFUVVTSVRGQkJoTlJZUWNpY1JReWdaR2hDQ05Dc2NFVlV0SHdKRE5pY29JSkNoWVhHQmthSlNZbktDa3FORFUyTnpnNU9rTkVSVVpIU0VsS1UxUlZWbGRZV1ZwalpHVm1aMmhwYW5OMGRYWjNlSGw2ZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJoNHVQazVlYm42T25xOGZMejlQWDI5L2o1K3YvRUFCOEJBQU1CQVFFQkFRRUJBUUVBQUFBQUFBQUJBZ01FQlFZSENBa0tDLy9FQUxVUkFBSUJBZ1FFQXdRSEJRUUVBQUVDZHdBQkFnTVJCQVVoTVFZU1FWRUhZWEVUSWpLQkNCUkNrYUd4d1Frak0xTHdGV0p5MFFvV0pEVGhKZkVYR0JrYUppY29LU28xTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9LRGhJV0doNGlKaXBLVGxKV1dsNWlabXFLanBLV21wNmlwcXJLenRMVzJ0N2k1dXNMRHhNWEd4OGpKeXRMVDFOWFcxOWpaMnVMajVPWG01K2pwNnZMejlQWDI5L2o1K3YvYUFBd0RBUUFDRVFNUkFEOEE5TW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS2p1SDh1MmxmT05xRS9wWE93SnFsekg1a1VrekxuR2ZOeC9NMEFkTlJYTy9aTlkvdlRmOS92OEE2OWRBbVJHdTdxQnptZ0IxRlViN1VZSUxkd3NpdElSaFZVNU9haDBIL2p4Zi9ycWY1Q2dEVW9vckMxQzdudXJzMmRxVGdjSGFjWlBmbjBvQTNhSzVxU3l2dFBYencvQTZsR3pqNjF1V04wTHkxV1hvM1JoNkdnQ3pSUlJRQVVVVVVBRkZGRkFCUldmck16dzJRTWJzak00R1ZPRDNyTVcyMWRsREI1c0VaSDc3L3dDdlFCMGRGWWxuYjZtbDNHMHpTK1dEODJaY2o4czFyWEU2MjF1OHpkRkdjZXRBRXRGYzBzTjlxek5KdStRSGpjY0tQWVZKYnozT2wzYXczSlBsTjF5Y2pIcUtBT2hvb3Jucmk0dWRVdTJodGlSRU93T0JqMU5BSFEwVnpUdzMybE1zdTc1Yzg3VGxUN0d1Z3Q1MXVZRWxUb3d6OUtBSmFLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBS21wdHQwMmMvN09Qek9LcldGemIyZW13aWFWVlpzbkhVOVQyRlRhckhMTFltT0pDekZod1BTcU5yb2UrTVBjdXlzUjkxZW8rdEFHdEJkUVhJUGt5cStPb0hYOHFra1RmR3laeHVCRmM5ZVdVdWx5SlBESVN1ZUQzQjlEVy9iekNlM2psSFJselFCano2R2tOdkpJSjJKUlMyTnZYQXF4b1A4QXg0di9BTmRUL0lWZHZmOEFqeHVQK3VUZnlxbG9QL0hpL3dEMTFQOEFJVUFhVWo3STNmOEF1Z21zZlFZOXhubmJsaWR1ZjFQOUsxTHovanluL3dDdWJmeXFob1AvQUI1U2V2bUgrUW9BMDNSWkVaR0dWWVlJckgwTmpITmNRSHR6K1hGYlZZbW1mOGhxN3gwK2YvMElVQWJkUVhnbit5dWJkOXNxOGpnSFB0elU5RkFHWnBPb1BkSzhjelpsWGtIQUdSU2F0ZnlXN3h3MjdZbFBKd0FlT3dxbmZSdHB1cEpjeEQ1R09jZnpGUDB1RnJ5OWt2Wmh3RzQrdi8xcUFOaTNXVllFRXo3cE1mTWNEcitGUzBVVUFaR3ZFc2x2R09yTWY4L3JWeDlRczRHOHRwMUJIR0JrNC9LcWVzVzF4YzNFSWhqWmdvKzhPeEpwRTBDTHkvbm1jdjZyakZBR3JIS2t5QjQzREtlNE5abXZTRmJXTkFmdlBrL2hWT0h6ZEoxSlluYk1iNEJQWWc5Nm44UWRMZjhBNEYvU2dEVXM0aEJaeFJnWXdvejllOVV0ZGlEMmF5WStaRzYreC95SzFCMEdPbFVkWS81Qmt2OEF3SCtZb0FhYmcvMkg1MmZtOHJHZmZwVWVoUkJMTnBNZk03ZGZZZjVOUTgvOEl4K0gvczlYTkgvNUJjWC9BQUwrWm9BbnZJaFBaeXhrZFZPUHIycWpvTWhhMGtqUDhMOGZqV29laHpXTDRmNlhIL0FmNjBBYmRGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBRUZ6ZVEyZ1V6TVJ1empBelV5c0hVTXB5Q01pcWVxV2h1N1FoQm1SRHVVZXZ0V1RiYXhOYXhDR1NJUHM0R1RnajJvQTFOWklHbXVEMUpBSDUwL1NnUnBrT2ZRL3pOWTd5M09zM0N4aGRzYW5vT2krNXJvbzQxaWpXTlJoVkFBb0FpdmYrUEc0L3dDdVRmeXFsb1AvQUI0di93QmRUL0lWZHZmK1BHNC82NU4vS3FXZy93REhpLzhBMTFQOGhRQm95cDVrTHAvZVVpc25RSk1KUENlQ0NHeCtuOUsyYTUrOGptMHpVRGN3ajkyNXo3YzlRYUFOOGtLcEpPQUJrbXNYUkFaYnE1bngxL3FjMUJjNnZOZHhlUkhGczM4SEJ5VDdWcmFiYUd6dEFyZmZiNW0rdnBRQmNvb3F0ZjNRdExWcFA0andvOTZBTXJWWlh2TDFMT0huYWVmOTcvNjFQMFc1TWNqMmN2QkJKVUgxN2luYUphbkQzY25KYmhjL3FhajFpM2EzdVV2SXVNa1p4MmFnRGRvcUcxdUZ1clpKbC9pSEk5RDNGVFVBVjJ2b0V1aGJNeEVwSUdNZXRXS3h0WnRaTjZYY0lPVis5anFNZERVU2EvS0V3MENzM3FEajlLQUhhOTgwOXNxL2Y1L21NVkxyNkUyOFQ0KzYyUHovQVAxVlhzWVo5UXZoZHpqNUZPUnh3ZlFEMnJZdTdjWFZxOEpPTnc0UG9lMUFEcmFRVFdzVWcvaVVHcVd1U0JMRFozZGdQNjFtMjJvWEdtN3JlU0xjRlAzU2NFVXFtZldiMWR5N1lsNjQ2S1A4VFFCbytRZitFZjhBTHh6NVc3SDYwYUhJSHNObmRHSS9yV2p0RzNiampHTVZ6ckdmUnIxdGk3b242WjZNUDhSUUJ2WE1naHRaWkQvQ3BOWnVnSVJieXZqN3pZL0wvd0RYVks1MUM0MUxiYnh4YlF4KzZEa210MjB0eGEycVFnNTJqaytwb0Fub29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLamVDR1U1a2lSejZzb05TVVVBSXFLaTdVVUtQUURGTFJSUUFVVVVVQUZJUUdCQkFJUFkwdEZBRWFRUXhuTWNTSWZWVkFxU2lpZ0Fvb29vQUtLS0tBQ2lpaWdBcUkyMEJiY1lJeTNyc0dhbG9vQU9sRkZGQURKSVlwZjhBV1JvLys4b05PVkZSZHFLRkhvQmlsb29BS1JrVjEydW9ZZWhHYVdpZ0JrY01VWCtyalJQOTFRS2ZSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSU013VlN6RUFBWkpQYWdCYUtSbUNxV1lnQURKSjdVdEFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCV2ZJeE0xd0VNNWxEZ1I3ZDIwZkt2WHQxclFwcW9xbGlCZ3NjbjNPQVA2Q2dDdjlvbHo1bUU4cnpQTHhnN3V1M09mclFic3BLSTJVWjNrTVIyWGpCL1ZmMXFYN1BGNXZtYmZtem5xY1o5Y2RNMFBieE9aQ3laTWk3VzU2aWdDQnJ1UVJ3NEFEU2dzQ0Vac0R0d09lNHB4bm1hS0FxZ1Y1SEtuZXBHTUE4NDY5cW1lR09SUXJEaGVtQ1FSOUNLVVFvQWdBKzRjcnlldUNQNm1nQ3JKZHlwSTZoZHhqd0dDeE1keHhuZ2pnZGU5SmVTU3ZCZHFtd0lpRlczQTVQeTU0L0ExWmUzamtmY3dPZWh3eEdmcmpyU1Myc014SmtUTzRZT0dJejljVUFKZS93REhqY2Y5Y20vbFNKSk1KUExmeTl6SVdVcURnWXh3ZlhxS21kRmtqWkdHVllFRWUxTVNCSVF4aVQ1c1lHNWorWGZBb0FaRGNtWmtWUUFRQ1pSL2RQVEg1NS9LaWFSMHU0Z3FPNEtQbFZJOVY1NUkvd0Ftblc4SmlWaTJQTWRpekVkTTFJVVV5QnlQbUFJQjlqalA4aFFCV1hOeGN5cklzc1lDSVF1L0hkdWZsUDhBbkZSQkQvWmtUQ1dVUEtJdHplWVNlU000eWVPdFhnaWlRdUI4eEFCUHNNNC9tYVR5WXhFc1czNUV4dEdlbU9uOHFBS0x6eVMrV0F4UXhPZ2wybkdXTEFZK25VL2xWdUZpWmJnRWtnU0FEMitWYWtkRmNZWVpHUWZ4QnlLamExaloyZjhBZUFzY25iSXk1NHgwQjlxQUM0WnNSb0dLNzMybGgxQXdUL1RINDBqTDltZ2xkQzdFS1NBekZ1UVBlbm1HTmc0S2doemxzOXpnRCtnb2poU0xPM2R6MUxNV1A2MEFRRkRDSTVWbWtkbVpRZHpaRFpPT25iMTRxRko1SXZNQllzWlhjUlpPY01HSXg5T2gvT3JhV3NNYmhsVGtkTXNTQjlCMEZTSWlvTUtNREpQNGs1TkFFTm51RnRoblp5cnV1NWprbkRFVllwcUlxRENqQXlUK0pPVFRxQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQS8vWlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQStRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyTmpJcExDQmtaV1poZFd4MElIRjFZV3hwZEhrSy85c0FRd0FJQmdZSEJnVUlCd2NIQ1FrSUNnd1VEUXdMQ3d3WkVoTVBGQjBhSHg0ZEdod2NJQ1F1SnlBaUxDTWNIQ2czS1N3d01UUTBOQjhuT1QwNE1qd3VNelF5LzlzQVF3RUpDUWtNQ3d3WURRMFlNaUVjSVRJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXkvOEFBRVFnQjlBSCtBd0VpQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QTlNb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLanVIOHUybGZPTnFFL3BYT3dKcWx6SDVrVWt6TG5HZk54L00wQWROUlhPL1pOWS92VGY5L3Y4QTY5ZEFtUkd1N3FCem1nQjFGVWI3VVlJTGR3c2l0SVJoVlU1T2FoMEgvanhmL3JxZjVDZ0RVb29yQzFDN251cnMyZHFUZ2NIYWNaUGZuMG9BM2FLNXFTeXZ0UFh6dy9BNmxHemo2MXVXTjBMeTFXWG8zUmg2R2dDelJSUlFBVVVVVUFGRkZGQUJSV2ZyTXp3MlFNYnNqTTRHVk9EM3JNVzIxZGxEQjVzRVpINzcvd0N2UUIwZEZZbG5iNm1sM0cwelMrV0Q4MlpjajhzMXJYRTYyMXU4emRGR2NldEFFdEZjMHNOOXF6Tkp1K1FIamNjS1BZVkpiejNPbDNhdzNKUGxOMXljakhxS0FPaG9vcm5yaTR1ZFV1Mmh0aVJFT3dPQmoxTkFIUTBWelR3MzJsTXN1NzVjODdUbFQ3R3VndDUxdVlFbFRvd3o5S0FKYUtLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FLbXB0dDAyYy83T1B6T0tyV0Z6YjJlbXdpYVZWWnNuSFU5VDJGVGFySExMWW1PSkN6Rmh3UFNxTnJvZStNUGN1eXNSOTFlbyt0QUd0QmRRWElQa3lxK09vSFg4cWtrVGZHeVp4dUJGYzllV1V1bHlKUERJU3VlRDNCOURXL2J6Q2UzamxIUmx6UUJqejZHa052SklKMkpSUzJOdlhBcXhvUDhBeDR2L0FOZFQvSVZkdmY4QWp4dVArdVRmeXFsb1AvSGkvd0QxMVA4QUlVQWFVajdJM2Y4QXVnbXNmUVk5eG5uYmxpZHVmMVA5SzFMei9qeW4vd0N1YmZ5cWhvUC9BQjVTZXZtSCtRb0EwM1JaRVpHR1ZZWUlySDBOakhOY1FIdHorWEZiVlltbWY4aHE3eDArZi8wSVVBYmRRWGduK3l1YmQ5c3E4amdIUHR6VTlGQUdacE9vUGRLOGN6WmxYa0hBR1JTYXRmeVc3eHcyN1lsUEp3QWVPd3FuZlJ0cHVwSmN4RDVHT2NmekZQMHVGcnk5a3ZaaHdHNCt2LzFxQU5pM1dWWUVFejdwTWZNY0RyK0ZTMFVVQVpHdkVzbHZHT3JNZjgvclZ4OVFzNEc4dHAxQkhHQms0L0txZXNXMXhjM0VJaGpaZ28rOE94SnBFMENMeS9ubWN2NnJqRkFHckhLa3lCNDNES2U0TlptdlNGYldOQWZ2UGsvaFZPSHpkSjFKWW5iTWI0QlBZZzk2bjhRZExmOEE0Ri9TZ0RVczRoQlp4UmdZd296OWU5VXRkaUQyYXlZK1pHNit4L3lLMUIwR09sVWRZLzVCa3Y4QXdIK1lvQWFiZy8ySDUyZm04ckdmZnBVZWhSQkxOcE1mTTdkZllmNU5ROC84SXgrSC9zOVhOSC81QmNYL0FBTCtab0FudkloUFp5eGtkVk9QcjJxam9NaGEwa2pQOEw4ZmpXb2VoeldMNGY2WEgvQWY2MEFiZEZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFFRnplUTJnVXpNUnV6akF6VXlzSFVNcHlDTWlxZXFXaHU3UWhCbVJEdVVldnRXVGJheE5heENHU0lQczRHVGdqMm9BMU5aSUdtdUQxSkFINTAvU2dScGtPZlEvek5ZN3kzT3MzQ3hoZHNhbm9PaSs1cm9vNDFpaldOUmhWQUFvQWl2ZitQRzQvd0N1VGZ5cWxvUC9BQjR2L3dCZFQvSVZkdmYrUEc0LzY1Ti9LcVdnL3dESGkvOEExMVA4aFFCb3lwNWtMcC9lVWlzblFKTUpQQ2VDQ0d4K245SzJhNSs4am0welVEY3dqOTI1ejdjOVFhQU44a0twSk9BQmttc1hSQVpicTVueDEvcWMxQmM2dk5keGVSSEZzMzhIQnlUN1ZyYWJhR3p0QXJmZmI1bSt2cFFCY29vcXRmM1F0TFZwUDRqd285NkFNclZaWHZMMUxPSG5hZWY5Ny82MVAwVzVNY2oyY3ZCQkpVSDE3aW5hSmFuRDNjbkpiaGMvcWFqMWkzYTN1VXZJdU1rWngyYWdEZG9xRzF1RnVyWkpsL2lISTlEM0ZUVUFWMnZvRXVoYk14RXBJR01ldFdLeHRadFpONlhjSU9WKzlqcU1kRFVTYS9LRXcwQ3MzcURqOUtBSGE5ODA5c3EvZjUvbU1WTHI2RTI4VDQrNjJQei9BUDFWWHNZWjlRdmhkemo1Rk9SeHdmUUQycll1N2NYVnE4Sk9OdzRQb2UxQURyYVFUV3NVZy9pVUdxV3VTQkxEWjNkZ1A2MW0yMm9YR203cmVTTGNGUDNTY0VVcW1mV2IxZHk3WWw2NDZLUDhUUUJvK1FmK0VmOEFMeHo1VzdINjBhSElIc05uZEdJL3JXanRHM2JqakdNVnpyR2ZScjF0aTdvbjZaNk1QOFJRQnZYTWdodFpaRC9DcE5adWdJUmJ5dmo3elkvTC93RFhWSzUxQzQxTGJieHhiUXgrNkRrbXQyMHR4YTJxUWc1MmprK3BvQW5vb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtqZUNHVTVraVJ6NnNvTlNVVUFJcUtpN1VVS1BRREZMUlJRQVVVVVVBRklRR0JCQUlQWTB0RkFFYVFReG5NY1NJZlZWQXFTaWlnQW9vb29BS0tLS0FDaWlpZ0FxSTIwQmJjWUl5M3JzR2Fsb29BT2xGRkZBREpJWXBmOEFXUm8vKzhvTk9WRlJkcUtGSG9CaWxvb0FLUmtWMTJ1b1llaEdhV2lnQmtjTVVYK3JqUlA5MVFLZlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJTTXdWU3pFQUFaSlBhZ0JhS1JtQ3FXWWdBREpKN1V0QUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJXZkl4TTF3RU01bERnUjdkMjBmS3ZYdDFyUXBxb3FsaUJnc2NuM09BUDZDZ0N2OW9sejVtRThyelBMeGc3dXUzT2ZyUWJzcEtJMlVaM2tNUjJYakIvVmYxcVg3UEY1dm1iZm16bnFjWjljZE0wUGJ4T1pDeVpNaTdXNTZpZ0NCcnVRUnc0QURTZ3NDRVpzRHR3T2U0cHhubWFLQXFnVjVIS25lcEdNQTg0NjlxbWVHT1JRckRoZW1DUVI5Q0tVUW9BZ0ErNGNyeWV1Q1A2bWdDckpkeXBJNmhkeGp3R0N4TWR4eG5namdkZTlKZVNTdkJkcW13SWlGVzNBNVB5NTQvQTFaZTNqa2Zjd09laHd4R2ZyanJTUzJzTXhKa1RPNFlPR0l6OWNVQUplL3dESGpjZjljbS9sU0pKTUpQTGZ5OXpJV1VxRGdZeHdmWHFLbWRGa2paR0dWWUVFZTFNU0JJUXhpVDVzWUc1aitYZkFvQVpEY21aa1ZRQVFDWlIvZFBUSDU1L0tpYVIwdTRncU80S1BsVkk5VjU1SS93QW1uVzhKaVZpMlBNZGl6RWRNMUlVVXlCeVBtQUlCOWpqUDhoUUJXWE54Y3lySXNzWUNJUXUvSGR1ZmxQOEFuRlJCRC9aa1RDV1VQS0l0emVZU2VTTTR5ZU90WGdpaVF1Qjh4QUJQc000L21hVHlZeEVzVzM1RXh0R2VtT244cUFLTHp5UytXQXhReE9nbDJuR1dMQVkrblUvbFZ1RmlaYmdFa2dTQUQyK1Zha2RGY1lZWkdRZnhCeUtqYTFqWjJmOEFlQXNjbmJJeTU0eDBCOXFBQzRac1JvR0s3MzJsaDFBd1QvVEg0MGpMOW1nbGRDN0VLU0F6RnVRUGVubUdOZzRLZ2h6bHM5emdEK2dvamhTTE8zZHoxTE1XUDYwQVFGRENJNVZta2RtWlFkelpEWk9PbmIxNHFGSjVJdk1CWXNaWGNSWk9jTUdJeDlPaC9PcmFXc01iaGxUa2RNc1NCOUIwRlNJaW9NS01ESlA0azVOQUVObnVGdGhuWnlydXU1amtuREVWWXBxSXFEQ2pBeVQrSk9UVHFBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BLy9aXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvL2dBK1ExSkZRVlJQVWpvZ1oyUXRhbkJsWnlCMk1TNHdJQ2gxYzJsdVp5QkpTa2NnU2xCRlJ5QjJOaklwTENCa1pXWmhkV3gwSUhGMVlXeHBkSGtLLzlzQVF3QUlCZ1lIQmdVSUJ3Y0hDUWtJQ2d3VURRd0xDd3daRWhNUEZCMGFIeDRkR2h3Y0lDUXVKeUFpTENNY0hDZzNLU3d3TVRRME5COG5PVDA0TWp3dU16UXkvOXNBUXdFSkNRa01Dd3dZRFEwWU1pRWNJVEl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeS84QUFFUWdCOUFIK0F3RWlBQUlSQVFNUkFmL0VBQjhBQUFFRkFRRUJBUUVCQUFBQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVFBQUlCQXdNQ0JBTUZCUVFFQUFBQmZRRUNBd0FFRVFVU0lURkJCaE5SWVFjaWNSUXlnWkdoQ0NOQ3NjRVZVdEh3SkROaWNvSUpDaFlYR0JrYUpTWW5LQ2txTkRVMk56ZzVPa05FUlVaSFNFbEtVMVJWVmxkWVdWcGpaR1ZtWjJocGFuTjBkWFozZUhsNmc0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaDR1UGs1ZWJuNk9ucThmTHo5UFgyOS9qNSt2L0VBQjhCQUFNQkFRRUJBUUVCQVFFQUFBQUFBQUFCQWdNRUJRWUhDQWtLQy8vRUFMVVJBQUlCQWdRRUF3UUhCUVFFQUFFQ2R3QUJBZ01SQkFVaE1RWVNRVkVIWVhFVElqS0JDQlJDa2FHeHdRa2pNMUx3RldKeTBRb1dKRFRoSmZFWEdCa2FKaWNvS1NvMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvS0RoSVdHaDRpSmlwS1RsSldXbDVpWm1xS2pwS1dtcDZpcHFyS3p0TFcydDdpNXVzTER4TVhHeDhqSnl0TFQxTlhXMTlqWjJ1TGo1T1htNStqcDZ2THo5UFgyOS9qNSt2L2FBQXdEQVFBQ0VRTVJBRDhBOU1vb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tqdUg4dTJsZk9OcUUvcFhPd0pxbHpINWtVa3pMbkdmTngvTTBBZE5SWE8vWk5ZL3ZUZjkvdjhBNjlkQW1SR3U3cUJ6bWdCMUZVYjdVWUlMZHdzaXRJUmhWVTVPYWgwSC9qeGYvcnFmNUNnRFVvb3JDMUM3bnVyczJkcVRnY0hhY1pQZm4wb0EzYUs1cVN5dnRQWHp3L0E2bEd6ajYxdVdOMEx5MVdYbzNSaDZHZ0N6UlJSUUFVVVVVQUZGRkZBQlJXZnJNencyUU1ic2pNNEdWT0Qzck1XMjFkbERCNXNFWkg3Ny93Q3ZRQjBkRllsbmI2bWwzRzB6UytXRDgyWmNqOHMxclhFNjIxdTh6ZEZHY2V0QUV0RmMwc045cXpOSnUrUUhqY2NLUFlWSmJ6M09sM2F3M0pQbE4xeWNqSHFLQU9ob29ybnJpNHVkVXUyaHRpUkVPd09CajFOQUhRMFZ6VHczMmxNc3U3NWM4N1RsVDdHdWd0NTF1WUVsVG93ejlLQUphS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUttcHR0MDJjLzdPUHpPS3JXRnpiMmVtd2lhVlZac25IVTlUMkZUYXJITExZbU9KQ3pGaHdQU3FOcm9lK01QY3V5c1I5MWVvK3RBR3RCZFFYSVBreXErT29IWDhxa2tUZkd5Wnh1QkZjOWVXVXVseUpQRElTdWVEM0I5RFcvYnpDZTNqbEhSbHpRQmp6NkdrTnZKSUoySlJTMk52WEFxeG9QOEF4NHYvQU5kVC9JVmR2ZjhBanh1UCt1VGZ5cWxvUC9IaS93RDExUDhBSVVBYVVqN0kzZjhBdWdtc2ZRWTl4bm5ibGlkdWYxUDlLMUx6L2p5bi93Q3ViZnlxaG9QL0FCNVNldm1IK1FvQTAzUlpFWkdHVllZSXJIME5qSE5jUUh0eitYRmJWWW1tZjhocTd4MCtmLzBJVUFiZFFYZ24reXViZDlzcThqZ0hQdHpVOUZBR1pwT29QZEs4Y3pabFhrSEFHUlNhdGZ5Vzd4dzI3WWxQSndBZU93cW5mUnRwdXBKY3hENUdPY2Z6RlAwdUZyeTlrdlpod0c0K3YvMXFBTmkzV1ZZRUV6N3BNZk1jRHIrRlMwVVVBWkd2RXNsdkdPck1mOC9yVng5UXM0Rzh0cDFCSEdCazQvS3Flc1cxeGMzRUloalpnbys4T3hKcEUwQ0x5L25tY3Y2cmpGQUdySEtreUI0M0RLZTROWm12U0ZiV05BZnZQay9oVk9IemRKMUpZbmJNYjRCUFlnOTZuOFFkTGY4QTRGL1NnRFVzNGhCWnhSZ1l3b3o5ZTlVdGRpRDJheVkrWkc2K3gveUsxQjBHT2xVZFkvNUJrdjhBd0grWW9BYWJnLzJINTJmbThyR2ZmcFVlaFJCTE5wTWZNN2RmWWY1TlE4LzhJeCtIL3M5WE5ILzVCY1gvQUFMK1pvQW52SWhQWnl4a2RWT1ByMnFqb01oYTBralA4TDhmaldvZWh6V0w0ZjZYSC9BZjYwQWJkRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUVGemVRMmdVek1SdXpqQXpVeXNIVU1weUNNaXFlcVdodTdRaEJtUkR1VWV2dFdUYmF4TmF4Q0dTSVBzNEdUZ2oyb0ExTlpJR211RDFKQUg1MC9TZ1Jwa09mUS96Tlk3eTNPczNDeGhkc2Fub09pKzVyb280MWlqV05SaFZBQW9BaXZmK1BHNC93Q3VUZnlxbG9QL0FCNHYvd0JkVC9JVmR2ZitQRzQvNjVOL0txV2cvd0RIaS84QTExUDhoUUJveXA1a0xwL2VVaXNuUUpNSlBDZUNDR3grbjlLMmE1KzhqbTB6VURjd2o5MjV6N2M5UWFBTjhrS3BKT0FCa21zWFJBWmJxNW54MS9xYzFCYzZ2TmR4ZVJIRnMzOEhCeVQ3VnJhYmFHenRBcmZmYjVtK3ZwUUJjb29xdGYzUXRMVnBQNGp3bzk2QU1yVlpYdkwxTE9IbmFlZjk3LzYxUDBXNU1jajJjdkJCSlVIMTdpbmFKYW5EM2NuSmJoYy9xYWoxaTNhM3VVdkl1TWtaeDJhZ0Rkb3FHMXVGdXJaSmwvaUhJOUQzRlRVQVYydm9FdWhiTXhFcElHTWV0V0t4dFp0Wk42WGNJT1YrOWpxTWREVVNhL0tFdzBDczNxRGo5S0FIYTk4MDlzcS9mNS9tTVZMcjZFMjhUNCs2MlB6L0FQMVZYc1laOVF2aGR6ajVGT1J4d2ZRRDJyWXU3Y1hWcThKT053NFBvZTFBRHJhUVRXc1VnL2lVR3FXdVNCTERaM2RnUDYxbTIyb1hHbTdyZVNMY0ZQM1NjRVVxbWZXYjFkeTdZbDY0NktQOFRRQm8rUWYrRWY4QUx4ejVXN0g2MGFISUhzTm5kR0kvcldqdEczYmpqR01WenJHZlJyMXRpN29uNlo2TVA4UlFCdlhNZ2h0WlpEL0NwTlp1Z0lSYnl2ajd6WS9ML3dEWFZLNTFDNDFMYmJ4eGJReCs2RGttdDIwdHhhMnFRZzUyamsrcG9Bbm9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS2plQ0dVNWtpUno2c29OU1VVQUlxS2k3VVVLUFFERkxSUlFBVVVVVUFGSVFHQkJBSVBZMHRGQUVhUVF4bk1jU0lmVlZBcVNpaWdBb29vb0FLS0tLQUNpaWlnQXFJMjBCYmNZSXkzcnNHYWxvb0FPbEZGRkFESklZcGY4QVdSby8rOG9OT1ZGUmRxS0ZIb0JpbG9vQUtSa1YxMnVvWWVoR2FXaWdCa2NNVVgrcmpSUDkxUUtmUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlNNd1ZTekVBQVpKUGFnQmFLUm1DcVdZZ0FESko3VXRBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQldmSXhNMXdFTTVsRGdSN2QyMGZLdlh0MXJRcHFvcWxpQmdzY24zT0FQNkNnQ3Y5b2x6NW1FOHJ6UEx4Zzd1dTNPZnJRYnNwS0kyVVoza01SMlhqQi9WZjFxWDdQRjV2bWJmbXpucWNaOWNkTTBQYnhPWkN5Wk1pN1c1NmlnQ0JydVFSdzRBRFNnc0NFWnNEdHdPZTRweG5tYUtBcWdWNUhLbmVwR01BODQ2OXFtZUdPUlFyRGhlbUNRUjlDS1VRb0FnQSs0Y3J5ZXVDUDZtZ0NySmR5cEk2aGR4andHQ3hNZHh4bmdqZ2RlOUplU1N2QmRxbXdJaUZXM0E1UHk1NC9BMVplM2prZmN3T2Vod3hHZnJqclNTMnNNeEprVE80WU9HSXo5Y1VBSmUvd0RIamNmOWNtL2xTSkpNSlBMZnk5eklXVXFEZ1l4d2ZYcUttZEZralpHR1ZZRUVlMU1TQklReGlUNXNZRzVqK1hmQW9BWkRjbVprVlFBUUNaUi9kUFRINTUvS2lhUjB1NGdxTzRLUGxWSTlWNTVJL3dBbW5XOEppVmkyUE1kaXpFZE0xSVVVeUJ5UG1BSUI5ampQOGhRQldYTnhjeXJJc3NZQ0lRdS9IZHVmbFA4QW5GUkJEL1prVENXVVBLSXR6ZVlTZVNNNHllT3RYZ2lpUXVCOHhBQlBzTTQvbWFUeVl4RXNXMzVFeHRHZW1PbjhxQUtMenlTK1dBeFF4T2dsMm5HV0xBWStuVS9sVnVGaVpiZ0VrZ1NBRDIrVmFrZEZjWVlaR1FmeEJ5S2phMWpaMmY4QWVBc2NuYkl5NTR4MEI5cUFDNFpzUm9HSzczMmxoMUF3VC9USDQwakw5bWdsZEM3RUtTQXpGdVFQZW5tR05nNEtnaHpsczl6Z0QrZ29qaFNMTzNkejFMTVdQNjBBUUZEQ0k1Vm1rZG1aUWR6WkRaT09uYjE0cUZKNUl2TUJZc1pYY1JaT2NNR0l4OU9oL09yYVdzTWJobFRrZE1zU0I5QjBGU0lpb01LTURKUDRrNU5BRU5udUZ0aG5aeXJ1dTVqa25ERVZZcHFJcURDakF5VCtKT1RUcUFDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0EvL1pcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jaXJjbGUtMjYwYThkNjI3YTg3ZTkzZTZkMmY4OTQxMGI5ZTA3MDIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQStRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyTmpJcExDQmtaV1poZFd4MElIRjFZV3hwZEhrSy85c0FRd0FJQmdZSEJnVUlCd2NIQ1FrSUNnd1VEUXdMQ3d3WkVoTVBGQjBhSHg0ZEdod2NJQ1F1SnlBaUxDTWNIQ2czS1N3d01UUTBOQjhuT1QwNE1qd3VNelF5LzlzQVF3RUpDUWtNQ3d3WURRMFlNaUVjSVRJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXkvOEFBRVFnQVh3QmZBd0VpQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QTlNb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLaWxtRVJVYkhkbXpoVkhPQjFOQUV0RlFOY2dNZ1NONU53RFpUR0FEOVRVclNJcElaMUdCazVQYjFvQWRSVVVzNGlLZ0k3czJTRlFjNEhlbXRjZ01nU041TndEWlRHQUQ5VFFCUFJSUlFBVVVVVUFGRkZGQUJWYTZqZDJqWkZja1pHVVlBalAxN1Zab29Bb1NXamJJNHhDSFpZMVJaYy9jSTcvQVA2cWt1NFpKWGpLSUNJenU2L2U1SHkvNTlCVnVpZ0N0ZFJ1N1JzaXVTTWpLTUFSbjY5cWhrdEcyUnhpRU95eHFpeTUrNFIzL3dEMVZmb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdELzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQStRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyTmpJcExDQmtaV1poZFd4MElIRjFZV3hwZEhrSy85c0FRd0FJQmdZSEJnVUlCd2NIQ1FrSUNnd1VEUXdMQ3d3WkVoTVBGQjBhSHg0ZEdod2NJQ1F1SnlBaUxDTWNIQ2czS1N3d01UUTBOQjhuT1QwNE1qd3VNelF5LzlzQVF3RUpDUWtNQ3d3WURRMFlNaUVjSVRJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXkvOEFBRVFnQVh3QmZBd0VpQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QTlNb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLaWxtRVJVYkhkbXpoVkhPQjFOQUV0RlFOY2dNZ1NONU53RFpUR0FEOVRVclNJcElaMUdCazVQYjFvQWRSVVVzNGlLZ0k3czJTRlFjNEhlbXRjZ01nU041TndEWlRHQUQ5VFFCUFJSUlFBVVVVVUFGRkZGQUJWYTZqZDJqWkZja1pHVVlBalAxN1Zab29Bb1NXamJJNHhDSFpZMVJaYy9jSTcvQVA2cWt1NFpKWGpLSUNJenU2L2U1SHkvNTlCVnVpZ0N0ZFJ1N1JzaXVTTWpLTUFSbjY5cWhrdEcyUnhpRU95eHFpeTUrNFIzL3dEMVZmb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdELzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQStRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyTmpJcExDQmtaV1poZFd4MElIRjFZV3hwZEhrSy85c0FRd0FJQmdZSEJnVUlCd2NIQ1FrSUNnd1VEUXdMQ3d3WkVoTVBGQjBhSHg0ZEdod2NJQ1F1SnlBaUxDTWNIQ2czS1N3d01UUTBOQjhuT1QwNE1qd3VNelF5LzlzQVF3RUpDUWtNQ3d3WURRMFlNaUVjSVRJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXkvOEFBRVFnQVh3QmZBd0VpQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QTlNb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLaWxtRVJVYkhkbXpoVkhPQjFOQUV0RlFOY2dNZ1NONU53RFpUR0FEOVRVclNJcElaMUdCazVQYjFvQWRSVVVzNGlLZ0k3czJTRlFjNEhlbXRjZ01nU041TndEWlRHQUQ5VFFCUFJSUlFBVVVVVUFGRkZGQUJWYTZqZDJqWkZja1pHVVlBalAxN1Zab29Bb1NXamJJNHhDSFpZMVJaYy9jSTcvQVA2cWt1NFpKWGpLSUNJenU2L2U1SHkvNTlCVnVpZ0N0ZFJ1N1JzaXVTTWpLTUFSbjY5cWhrdEcyUnhpRU95eHFpeTUrNFIzL3dEMVZmb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdELzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQStRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyTmpJcExDQmtaV1poZFd4MElIRjFZV3hwZEhrSy85c0FRd0FJQmdZSEJnVUlCd2NIQ1FrSUNnd1VEUXdMQ3d3WkVoTVBGQjBhSHg0ZEdod2NJQ1F1SnlBaUxDTWNIQ2czS1N3d01UUTBOQjhuT1QwNE1qd3VNelF5LzlzQVF3RUpDUWtNQ3d3WURRMFlNaUVjSVRJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXkvOEFBRVFnQVh3QmZBd0VpQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QTlNb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLaWxtRVJVYkhkbXpoVkhPQjFOQUV0RlFOY2dNZ1NONU53RFpUR0FEOVRVclNJcElaMUdCazVQYjFvQWRSVVVzNGlLZ0k3czJTRlFjNEhlbXRjZ01nU041TndEWlRHQUQ5VFFCUFJSUlFBVVVVVUFGRkZGQUJWYTZqZDJqWkZja1pHVVlBalAxN1Zab29Bb1NXamJJNHhDSFpZMVJaYy9jSTcvQVA2cWt1NFpKWGpLSUNJenU2L2U1SHkvNTlCVnVpZ0N0ZFJ1N1JzaXVTTWpLTUFSbjY5cWhrdEcyUnhpRU95eHFpeTUrNFIzL3dEMVZmb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdELzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELy9nQStRMUpGUVZSUFVqb2daMlF0YW5CbFp5QjJNUzR3SUNoMWMybHVaeUJKU2tjZ1NsQkZSeUIyTmpJcExDQmtaV1poZFd4MElIRjFZV3hwZEhrSy85c0FRd0FJQmdZSEJnVUlCd2NIQ1FrSUNnd1VEUXdMQ3d3WkVoTVBGQjBhSHg0ZEdod2NJQ1F1SnlBaUxDTWNIQ2czS1N3d01UUTBOQjhuT1QwNE1qd3VNelF5LzlzQVF3RUpDUWtNQ3d3WURRMFlNaUVjSVRJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXkvOEFBRVFnQVh3QmZBd0VpQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QTlNb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLaWxtRVJVYkhkbXpoVkhPQjFOQUV0RlFOY2dNZ1NONU53RFpUR0FEOVRVclNJcElaMUdCazVQYjFvQWRSVVVzNGlLZ0k3czJTRlFjNEhlbXRjZ01nU041TndEWlRHQUQ5VFFCUFJSUlFBVVVVVUFGRkZGQUJWYTZqZDJqWkZja1pHVVlBalAxN1Zab29Bb1NXamJJNHhDSFpZMVJaYy9jSTcvQVA2cWt1NFpKWGpLSUNJenU2L2U1SHkvNTlCVnVpZ0N0ZFJ1N1JzaXVTTWpLTUFSbjY5cWhrdEcyUnhpRU95eHFpeTUrNFIzL3dEMVZmb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdBb29vb0FLS0tLQUNpaWlnQW9vb29BS0tLS0FDaWlpZ0Fvb29vQUtLS0tBQ2lpaWdELzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzEtNmY5MjU0NWM4MmZmYzNhODBjOTlhOGI1OGNmNmYyZmQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzItNmIyNDAyNzBmY2UxZDYyN2U1MDRlNDkxNjFkYWI0ZWUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzMtNTU5MWRmZDE0ZDZiN2Q2MjRiZTYyNTMwMWRlMjBmNjgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzQtY2Q5MDViZDYwZGJhZTk5YTIwNzlkZTliNzIzNDNkMjAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTFFBQUFDMUNBWUFBQUQya2RXWEFBQVNVVWxFUVZSNG5PMmRlWkFjMVgzSFA5MXo3REY3U3F2ZDFVcENKMEZJWUNRd1lLNFVoa0lFWXh3Yk81Q1lCR0tNbk1TdXdzWjJwVkpKbkdBbnBsd1ZsMTF4NGdSaUc1U1EyQ0ZPMlFGeE9nU0NSV3dNUnBhRkJBVFFpVmFybGJUMzdNenVITjM1NCsxRW8yVjJkMmI2ZU4ydjM2ZHFTN3R6ZEgvVi9aMDM3LzNlNy8yZU1iU2pnS1ptbGdPcmdOVXovM1lEUFRNLzdVQXIwQWtZUUVmWis3TEFGRkFFeG9GSjRDUXdDSnlZK2YwSWNCRFlEeHdHTEcvL0syb1JseTBnNExRRG04dCt6Z2JPUWhpMkhwcG1mZ0M2cW5qOUZQQy93RzVnSi9BeThFdkVoMEZUQVVPMzBLZXhGTGdhdUF5NEhOZ0FtRklWdlJNTGVBUDRNZkRzek0rZ1ZFVUJJdXFHVGdDL0Nsd1BiQUUyeXBWVE4zdUJaNEJIZ2VlQWFibHk1QkZGUXpjQTF3RTN6ZnpiTWYvTFEwY2FZZXp2QTA4Zyt1MlJJVXFHdmhUWUNud0kwVGVPQW1QQVE4QTI0S2R5cGZpRDZvWnVCMzRiK0QzZ1hNbGFaUE02d3RqYlVMalByYXFoTHdBK0Nmd20wQ3haUzlDWUJ2NE4rR3RFMUVRcGdqYUNkOG9XNEduZzU4RHRhRE5Yb2dINEhjUTFlaHE0UnE0Y2QxSEYwTzhEWGdTZVFvVGROTlZ4TmZBajRDZUl4aUQwaE4zUVZ3SXZBSThCRjhxVkVtb3VRVFFHendOWFNOYmlpTEFhZWdPd0hUR3BjTEZrTFNweEdXTEM1Z2ZBZXNsYTZpSnNodTRBdm82WS9uMi9aQzBxOHlIZ0ZlQ3JRSXRrTFRVUkprUGZBcndLZkFhZGcrSUhjZUJ6aUduMm15VnJxWm93R1BvTTRISGdueEc1RmhwL1dRcjhLMkwyY2Jsa0xRc1NkRU52QmZZZ3BxZzFjcmtla1ROeWgyd2g4eEZVUS9jQWp3RC9RUDJwbWhyM2FRTytCZndRV0NKWlMwV0NhT2hyZ0YzQURiS0ZhT2JrZzRnYzdhdGtDNWxOa0F3ZEE3NEVQQW4wU3RhaVdaaGV4S1RNRndpUWo0S1N5OUVKZkErNFZyWVFUVjA4QmZ3V01DSmJTQkErV2VjQUw2SE5IR2F1UmFRZWJKQXRSTGFodHlEeUNOWksxcUZ4empwRXpyWFVoa21tb2JjaWNqQjBGRU1kMmhEeDZ0dGxDWkJsNkQ5SGhPVDBqSjk2eElIdklPNng3L2h0YUFPUldINjN6K2ZWK00vZGlMd2J3OCtUK21sb0F4R1V2OVBIYzJyazhobkVON0Z2UHZQclJDYndiZURqUHAxUEV4enVRSmphbDViYUQwTWJ3SDFJSENob3BQTng0RjU4TUxVZmh2NHJBcDdRb3ZHRlR3QmY4Zm9rWGh2Nmp4QTV0Um9Od0I4aVBPRVpYaHI2RnVBZUQ0K3ZDU2YzSUx6aENWNForaXJnZm53TzJXaENnWUh3aGllWmVsNFllaDFpa1dYU2cyTnIxQ0NKS0hhenp1MER1MjNvTnVCaG9sTTdUbE0vaTRIL3dPWFVCemNOYlNEcXBrblB1TktFaG8zQUE3allOWFhUMEo5RExIL1hhR3JodzhEbjNUcVlXd24rbHlBS2JTZmNPSmdtY3VRUWhlZC81dlJBYnJUUTdZalZKdHJNbW5wSklrb2xPQzQrNzRhaHZ3R3NkT0U0bW1pekNwR0o2UWluaHY0SWNLdFRFUnJORExjQ056bzVnQk5EZHdIZmRISnlqYVlDZjQ4STZkV0ZFME4vRGJIaHBFYmpKdDBJYjlWRnZZYStGbEVGWHFQeGdsdXBjMmVCZWd6ZEFQeE5QU2ZUYUdyZ213aXYxVVE5aHI0TE9MT085MmswdFhBbXdtczFVZXZFU2g5aTcrbFFGY0hXaEpZMFltLzFvOVcrb2RZVytrdG9NMnY4b3dYNFlpMXZxS1dGM29qWUNpSldveWlOeGdrRjREekU3ZzBMVWt1aGwzdlFacTVJTVdjeE5aNW5lcUpBTGwyZ01GMmtrTFVvNWkzc29vMXQyZGcybURFRHc0UllNa2E4d1NUUkhDUFJIS09oTlVGRFc0SjRnK3pLYklFa2p2RGVCNnQ1Y2JVdDlBV0lnb3A2QlFwZ0ZXd21qMDh4T1pRak81UWpsM0duZ211aU9VYno0Z1pTWFVsU1N4b3g0L3B5ejJBRDd3WjJMdlRDYWczOUNCRXZRRzViTmhQSHBoZy9taVZ6TW9kdDJaNmV6ekFOVWwxSjJwWTEwOUxUZ0dGRzN0emJnUThzOUtKcURMMEo4Y21JNUJYTlo0dU1IcHhrckQ5TE1XZEowUkJMbUxTZjBVem55bWJpalpIdDlkbkFac1E0Yms2cTZVUGZSUVRObk04VUdkcVhacncvNjNscnZCREZ2TVh3dmpRais5TzBMVyttNjh5V0tCcmJBRDRMM0Ridml4Wm9vWmNDQjRuUWdsY3JiekgwVnBxUlF4bnBScDRMSTJiUXViS1p4ZXRhbzliUExpQnFpUitlNndVTERhcy9TWVRNUE42ZlpmOXpKeGcrTUJsWU13UFlSWnZoL1pNYytQRUpKbzVOeVpiakozR0VKK2RrdmhhNkNmRko2SEpaVk9Bb1RGc003aGtqUFJoT2M3VDBOTko3Ymp1eFpDVENmaWVCRlVERm16WGZGYmlaQ0pnNU01VGo0STRUb1RVelFIcHdpb003VHBBWnlzbVc0Z2Rkd0UxelBUbWZvVC9tdnBaZ01ieC9raU12RGttTFhyaEpZZHJpeUl0RGpCeWFsQzNGRDdiTzljUmNYWTYxd0pzb0d0MndiUmg4Wll5eEl4blpVanloYzNXSzd2VnRpdDQ5UUlUd2ZnVjRhL1lUYzdYUXQ2TG81YkNMTmtkZkhsYld6QUFqQnlZNXVtc1VPN2pqV3FjWXpCRytxMlJvRTBVWHZ0cVdUZi9PRWRMSHAyVkw4WnlKZ1N3RHZ4aFIyZFFmcmZSZ0pVTy9CN0drWEMxc0dOZzF5dVFKOWMxY1l1TFlGTWQrT1NxK29OVmpEWERoN0FjckdicXFyS2F3TWJoM0xHb3hXd0RHajJZNS92cTRiQmxlY2ZQc0J5Smg2TkZER1VZUHE5dG5Yb2lSQTVPTXZhM2svLzhkWHAxdDZJMG90bDR3TzV4ajhOVXgyVEtrTTdoM25Pbnh2R3daYnJNV1dGLyt3R3hESzFVOXRKaTNHRkMzRDFrVHBRR3hWVkR1WXB5VzFqemIwSFhWUWdncWczdkd5V2VMc21VRWhueW15SEgxdnEyMmxQOVJidWdtNEdKL3RYaEgrdmdVRXdOWjJUSUN4OWlSckdxUm5zc1IzZ1ZPTi9RbDFGSFlJNGhZUlp2amU1VWQyVHRtY085WW9MTUphNlFSdUt6MFI3bWgzK3UvRm04WTNwZldYWTE1eUdlS2pCeFVLdXB4UmVtWGNrTmY2YjhPOXlubUxFWU9SQ0pCeHhGRCs5SktKR1hOY0ducGw1S2hZNGlWM2FGbmFGOGFxNmpNMTZsbldIbUxrWVBLZlBEZncweUpqWktoMTFQV3NRNHJ4WndWNlFtVVdoazVsRkVsak5lQ0tCbjIvNFpXb25VZVBaekIxcTF6MVZoNWkxRjFaaERQaDFPRzNpeFJpQ3ZZTnJwMXJvTXhkYTdaSmxESTBKa1QweFNtZEdTalZuS1RCVExEU2l6ZE9nZE9HVHIwdTcrTzlTdlQwdmpPZUw4U0UxQm5nekIwQjdCRXJoWm4ySmJOWkFTUzlyMGlQVGlsUXI3TENpQmxJaktXUXMza3lad08xVG1nbUxOVTZIWVl3Q29UV0MxYmlWTW1UMFF2Y2Q5dE1pZVYrSWJyTTFGZ0Y5aHNOT3BSZUlvQ0xUVEFjaE94YjBwb0tlWXRwdFB1MUdlT01sTmplUlc2YmN0TW9GZTJDaWRNajJzenU0RnQyZVRDM3pEMG1ZUTh3cUhnc2lKcFRFK0UzdERMVEdDUmJCVk95RTJHL2lZRWhsdzY5STNEWWhQb2xLM0NDZm1NbmgxMGkxejRyMldiU1cwN1lRVU9QZDN0SGdwY3k2UUp0TWxXNFlTQ09rbnEwbEVnNGIvSkpPUkZHYTE4Nkc5Q1lMRHlvUS9icFV4Q3Z0V3h3c1VJZmNjTy84V01tK2pkWVRVektMQjZwVDBTbTNKb3FrT0ZIYlZNSU5RckpWVzRDWUhCQ1AyMUhETVJlNytGRnIxbHNIdkVFdUcvbGlZUTZxVWVFZHhSMVRNVTJCWnV3Z1FtWkt0d1Fyd2g5RGNoTU1RYlF0ODRUSVhlMEltbTBOK0V3SkJzRHYyMUhEYUJJZGtxbkpCc0RmWE1mYUJJcEVKL0xVZE1ZRUMyQ2ljMHRDWmtTMUNHaHJiUVg4dmpKbUx2NU5EUzJCb1ArZVI5UURDZ0lmemZkb01tOExac0ZVNHdFNlp1cFYyZ3NUMkJHUXQ5eTlCdkFvZGtxM0JLODZLa2JBbWhwM21SRXJYdTk2dGg2QzRsYm9aVVVrdVVhQlQybWNBKzJTcWNrdXBLNmlsd0I4UVNKazNoYjZGdFpscm9jYUJmc2hoSEdLWkJha21qYkJtaHBhV25RWUUwRHZxQmJHbWE3WFdaU3R5Z3JVOGJ1bDdhbGpYTGx1QUdiOEdwNnFON0pRcHhoVlIzbzU0R3I0TkVVMHlWUWZWdU9HWG9uUktGdUlKaFFQc0tKVm9hWCtsWW1WSWxqbithb1hkSkZPSWFuYXRTS3NSU2ZjT01HWFNzQ1AzV09pVjJ3dWxkamxDbmtZSklmOVN0ZFBWMHJrNWhKcFRvcG1XQVYrQ1VvUXZBejZYSmNaRkZhM1FyWFExbXdxUnpkVXEyRExmWXljeENsZktQNS8vSTBlSXU4Y1lZbld1VXVWR2VzV2hOaXBnYXJUUEFNNlZmeXY5SE95UUk4WVJGYTFyMFNwWjVTRFRIV0tSTzZ3endiT21YY2tNL0J5aFJ4dDJNR2ZSc0NIVkJLRS9wMmRpdTBsck1LZUNGMGgvbGhzNlVQeEYyV25vYmFlMVRaZ1R2R20zTG1rZ3RDZjAwZHprdklFd05uRzVvZ0NmOTFlSXRQUnZhZE5lampFUnpqSjZON2JKbHVNMS9sZjh4MjlDUCtTakVjMkpKazc3TkhTcmtLVGpHTUEzNk5uV3FtTVQxY1BrZnN3MzlDbkRZUHkzZTA5U1paTWw2M1ovdTJkaEdZNGR5Q3lFT014Ti9MbEVwYnZNRGY3VDRSK2ZxRkIxblJIZkNwWE4xU3RVSnAzZDR0WktodisrREVOL3AyZGhPUzAvME12SmErNXJvVnZjYjZ0OW5QMURKMEQ5RnNXNEhBQWIwYmU1UWJZUS9MeTI5alN3OXIwT1Y1S1BaSEFSK012dkJTb2EyZ2U5NnJVWUdobW13N0lKT1V0M3FtN3ExdDVHK1RVb1BpUCtKQ2p1VUcwTTdLdFpxWElOSW1GYnljdGlXemVDZU1jYU9aR1ZMOFlUT1ZTbTZ6MjVUOU80QndzaHJnUU96bjVock1uOC9zK0o3S21HWUJyM3Y2cURyckZhMWJyb0IzV2UzMGIxQmFUT0RtTlYraDVsaGJrTURmTXNiTGNGaDhkb1dsbCs0U0ltVkx2RUdreFVYTFZZcGcyNCtIcGpyaWJtNkhBQko0QWdoMzJtMkdnclRGc2QyanpKNUlweXBMSzI5amZTYzA2NUNPZHhxR0FKV0FCWDdpL05kZ1J6emZCSlVJdDVnc3Z6Q1JTdzlyeU5VcG9nbFRmbzJkZEIzZm1lb2REdmtBZVl3TTh6ZlFnT3NCdDRnNUp0ejFrSXhaM0h5elFuRzNzNWlXOEhjUk1jd0RUcFhOck40WFlzcUswNnFwWUFZRE00WlZsN0kwQUFQQVRlNUtDb1U1RE5GVHI0eHdmaEF0a0p3U0E2R2FkQzJySW5GYTF0SWhMK1djejE4RjdobHZoZFVZK2pOS0xBcXZGN3ltU0lqQnljWk81S1J0dTFaTEduU3ZxeUpqbFdwS0JkNHQ0SHpXV0JCZHpXR0JuZ2N1TTRGVWFIRkt0cE1ERXd4M3A4aE81enpmTU5Qd3pSbzdrclMxdGRFYTIralNnbjU5ZklJOE9zTHZhaGFRMThFL015cElsVW81aXpTeDZmSkRFMlRHY3E1dHVsN3NqbE8wK0lrell1VHRIUTNxcGpxV1M4MjhHNnE2Q2xVYTJpQVI0SHJIWWhTbHNLMFJTNmRaM3FpUUM1ZElEZFp3Q3JZRlBNV1ZzSEdLdGpZdGswc2JvSUI4YVJKdkNsR3ZDRkdzaVZPUTJ1Y2hyYUVFdkZ3ajZpcWRZYmFEUDB1NEJmTUgrclRhTnltaVBEZXE5Vzh1Qlp6N2dZZXJFZVJSdU9BYlZScFpxaXRoUVk0QTNnTlVESmJYQk00MHNCWndORnEzMUJyOStFdzhKVWEzNlBSMU11WHFjSE1VSHNMRGRDSStBcFlYZXNiTlpvYWVCTTRseHByeGRRendKc0NQbFhIK3pTYVdyaVRPZ29mMVJ1eGVBTFJXZGRvdk9CQjZxd1JVMCtYbzBRN3NBZFlYdThCTkpvS0hBYzJVdWVHc0U1aXltUEFKeHk4WDZPcHhLZHdzTHV4MDBrUzNmWFF1TW1EVkNoTlVBdE91aHdsT2hFemlDdWRIa2dUYVE0QjV5RysrZXZHalduc0VlQTNFQ3RjTkpwNnlBTWZ4YUdad2IyOGpKZUF1MXc2bGlaNi9Ba1Zpc2JVZzV1SlJuOEhmTS9GNDJtaXdjUEFWOTA2bU51WmMxdXBJWkZFRTNsZUEyN0R4VVZ1Ymh0NkV2Z0lMdlNGTk1vemhzaHhkdFVyWHVRMnZ3YmNpQjRrYXVZbWgvREltMjRmMkt0ay9XZlErUjZheXRqQTdaUnR4ZVltWHE0KytUWmk5S3JSbFBQSHdMOTRkWEN2bDFQZEEveXR4K2ZRaElldjRYRSt2Ui9yQSs4a0lpWEZOUE55UC9CNXIwL2loNkZ0UkRodm13L24wZ1NUQnhDSmJKNVg2dkZyQlhjUnVBTlJkVjBUTGU1SDNIdDNpcGNzZ0o4bENZckE3eUptRkRYUjRCc0lNMXQrbmREdkdoczJJcHozWlovUHEvR2ZMd0tmeHVkU2w3S0t4dndwOEFmNDlEV2s4WlVDOFB2QTNUSk9Mck1LMHIySXFjKzBSQTBhZDVrQVBnRGNKMHVBN0xKZWp3R1hJallwMG9TYi9jRGxpRlZNMHBCdGFCQjdOVitFUjFPaEdsLzRUOFE5M0MxYlNCQU1EV0lqbUMzQUZ4QjlNRTA0c0lDL1FOUU9INUtzQlFpT29VRU1FUDhTZUM4cWJzMnNIaWNRUnY0ekFqUzRENUtoU3p3UGJBSitLRnVJWms0ZVE1VHArcEZzSWJNSm9xRkJMTHk5RVJIYW01Q3NSWE9LTkNJa2R3TXdLRmxMUllKcTZCTDNBaHZRclhVUWVBclJLdDlIWVBZRmV5ZEJOelNJM1d4dlJNUTNkZC9hZndZUjYvNStEVGdvVjhyQ2hNSFFKYllqYXA1OUhSMEo4WU1DSWhkalBTRktLZ3VUb1VIMDRUNkxxTEJUVjNWS1RWVThpYmpHbndaR0pXdXBpYkFadXNTcmlKRFJWWWdpTnhwM2VBbHhUYThqcE9Vb3dtcm9FczhpWnFodUlNSzczYnJBVHNRWTVTTEVOUTB0WVRkMGlVY1JHek5lRHp3dFdVdVkrRy9nZllocnQxMnVGSGRReGRBZ1FrbVBBOWNnSm1iK0VWMGJwQkk1eENid0Z5Tm1aWjhnd0dHNFduR2puRzZRV1lwWU1YRWJzRmF5RnRuc1E2enQrdzV3VExJV3oxRGQwQ1VNNEFyZ1k0aFNaUzF5NWZqR09LSVk0alpFMzFpWmxuZ3VvbUxvY2xvUWc4Z1BJMGJ6cW0waU9vNEl1ejJFNkU1azVjcnhseWdhdXB4RzRHcmcvWWowMVRWeTVkVE42NGpCOEhiRVFDK3lZNGVvRzNvMjY0QXJFZDJUeXdobXY5dEdHUGo1bVo5bkVPa0JHclNoRjZJTEVadmRoSmc1T3hkaCtvUlA1ODhpelBzYUlsYThDM2laa00zZStZazJkTzBrZ0ZXSXJhRlhBY3NReHU4Qmxzejgzc3FwZ1djSFlsQmF3a1lZTW8xSWpSMEcrb0VCUlBMVkFLTEZmWHZtYitVSGNtN3lmNUJNbDVZUG9Ob0RBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNY0FBQURDQ0FZQUFBRDl5TloxQUFBVWRVbEVRVlI0bk8yZGVYQWMxWjNIUDlPakdjM284a2hDeUJjK1pJeU5rVzNaWU1Bc3hnZkJOdUNFUUNBSkxFZTJuRW90V2NLNW05cXQxTmFtc3VTZlRZb1FFbzVVTGJzT0N5RUhnZUpjY0JaalRNREJCNWFOWTJ5TWZJQVBHVm5TNkpaR210SCs4VVpZbGtlak9icjdkYjkrbjZxcGtzWXozVi8zZTErOTd2ZCs3L2Z6YlcvYmk4WjBDb0dwd0RSZ1N2SlZDVlFBWnlWZlpVQVlDQ1cvVXdvVUFBTkFSL0s5WHFBSGFBZE9KbDh0UURQd2FmSjFDRGdNOUZuNlAvSWdCYklGdUp4aVlBNHdEN2dBbUF1Y0Qwd0VmRGtlc3dBb3ovSTdnOEJ4WUEvd0lmQlhZRmZ5OTY0Y2RYZ2VueDQ1c3FJR3VBeFlEUHdOVUF2NHBTcEtUeHpZRGJ3TGJFNitHcVFxY2hIYUhPbXBBbFlDVndHcmdQRnk1WmhDSS9BRzhDZGdQZEFrVjQ1ejBlWTRrMXJnSm1BTlVBY1ljdVZZU2dMWUNid00vQUV4eW1pU2FITUk1Z00zSmwrekpXdVJ5VjdndWVScnAyUXQwdkd5T1NxQVc0QzFpQkZDY3pyMXdKUEFieEF6Wko3RGkrWllEdHdKZkFVeDVhcEpUeC93SXZBRThKWmtMYmJpRlhNVUFqY0Q5eUp1b1RTNXNSTjRHSGdXRDZ5cnFHNk9DUEE5NEx1b01kUGtGQnFCUjRGZkFsSEpXaXhEVlhORUVLUEVQY21mTmRZUUJYNk9HRTJVTTRscTVoZ0gzSWN3eGpqSldyeEVHOElnRHlGQ1haUkFsVG44QXNTdDB5ZkF2NkdOWVRmakVOZTlBZEVPU29RbHFXQ08xWWdIeFVjUkFYMGFlWnlGYUllZGlIWnhOVzQyeDFURXl1Ny9Jb0wvTk01aERxSmRYa2Ewa3l0eG96a0tnQWNRa2FkckpHdlJwR2NOb3AwZXdJVzNXbTR6eHdKZ0cvQlRSTGk0eHZrVUk5cHJHNkw5WElOYnpGRUEvQUI0SDcySTUxYm1JOXJ2Qjdoa0ZIR0RPYzRGTmdFUEFnSEpXalQ1RVVDMDR5WkV1em9hcDV2amRrUUEzR0xaUWpTbXNoalJybmZJRnBJT3A1b2pCUHdLK0RYNjJVSlZpb0YxaUhZT3BmK29ISnhvanVuQWU4QjNaQXZSMk1KM0VOdDNwOHNXTWhLbm1lTktZRHN1bTlYUTVFMGRvdDJ2bEMxa09FNHl4OThqRm82eXpieWhVWU55NEhWRVAzQUVUakNISHhHdzlqaDZOc3JyRkNENndVTTRJS3VMYkhPRWdUOGlJbWsxbWlIdVEvU0xzRXdSTXMxUmprZ05jNTFFRFJybmNoMmlmMGk3elpabGpyT0JONEhMSloxZjR3NHVCellnK292dHlEREhlT0J0OUl5VUpqUHFFUDNGOW0zT2RwdWpDakZpZURrM2xDWjdaaVA2VFpXZEo3WFRIR2NoL29ONjc0VW1GK1pnczBIc01zYzR4TVBWWEp2T3AxR1R1WWc4djdac2c3YkRIRUhnZWZRemhzWWNGaUQ2VTlEcUUxbHREai93RExEQzR2Tm92TVVLNEhkWXZGQm90VGwrZ1VqT3JOR1l6VmNSL2NzeXJEVEh2WWljdEJxTlZkeUpoZEVWVnBsakJXTGZzRVpqTlQ4QnJyYml3RmFZWXpyd1d4d1FPS2J4Qkg1RVl1dVpaaC9ZYkhNVUFTOWc4MktOeHZPTVE4eGdGWmw1VUxQTjhTZzZPNGhHRHJXSS9tY2FacHJqWnVCYkpoNVBvOG1XYnlHcWRabUNXZWFZZ2FqOG85SEk1bkZFZjh3Yk04d1JRTlNOS3pQaFdCcE52cFFoSHREejNsVnFoam4rR2JqWWhPTm9OR2F4Q1BpWGZBK1NiL0dhQ3hCWkkzVGhTWTNUaUFFTEVZbXNjeUtma2NNUC9CZmFHQnBuRWtUMHo1elgyL0l4eC8zbzJ5bU5zN2tZMFU5ekl0ZmJxa25BWHFBazF4TnJORGJSaWRoSmVEVGJMK1k2Y3Z3SDJoZ2FkMUNDNks5Wms0czVsaUFXL0RRYXQzQUxzRHpiTDJWckRqL3dDT0RMOWtRYWpXUWVJY3VIODJ3cjdOeUdTSldpeVpMbS9uWWFZODJjaUxYU090Qk9hMzhIM1lrKytoSXhZb01EeEJMOTlDWmloSXdnUVNOQXdGZEF5QWhTWkJSU0hpaWx2S0NNNm1BNTQ0T1ZWQWIwZW1zTzFDTDY3N3BNdjVETkEza1EyQWRNeTFhVkZ6a1JhK1ZBejFFTzlCN2pRTTh4T3VNOXBoMjd4QittSmp5Um10QkVhc0tUcUE3cTNOc1pjaGlZQmZSbDh1RnN6SEVYRm05TGREdU5zV1oyZE95bnZuTS8wWUZPMjg0YktTaWhybVFtQzBwbk1qNVlhZHQ1WGNyZFpOaVBNelZITWRBQVZPY2hTa2w2RW4xc2JkL0xCeDM3T0I1cmxpMkhDY0ZLRnBiT1lsSFpiTUtHWHA5TndRbEVZR0xYV0IvTTFCejNJZExDYTVKRUJ6cDVPN3FEYlIzN2lDWDZaY3M1ZzZBUjRNTFNXU3lMTENCU29HZmRSM0EvOExPeFBwU0pPWUxBZm1DS0NhSmNUMGU4bXcydDIzbS9mUS94d1lSc09XUGk5eGtzS2oyZkwxVmNSS25mMUkxeWJ1WlR4TGJhV0xvUFpXS08yeEdGS3oxTmZEREJwbWc5RzZJZk9IS2tHSXVnRVdCRlpDRlhST3J3KzJTWFpYRUVkd0JQcGZ2QVdPYndBYnZ4ZUg3YlE3Mk52TkQwTm8yeEZ0bFM4cVk2V01FTlZVdVpGckk5YWJuVDJJT1kzaDBjN1FOam1XTVZvazZiSjRrUEpsamZzb1ZOMFhvU28xOUQxK0hEeDlKSUhTc3JMdmI2S0xJYWtYczNKV05kR2NjVUw3U2Ixb0VPSGp2NlBCdWpPNVF5QnNBZ2cyeU03dUN4bzgvVDB0OHVXNDVNMHZidmRDUEhKT0FRMmEraXU1NkducU04ZldJOTNmRmUyVklzcDhnZjR0YnFsY3dJVDVJdFJRWURpRHhyUjFMOVk3cVI0OXQ0MEJqMW5mdDU4dmdybmpBR1FIZThseWVQdjBKOTUzN1pVbVJRQUt3ZDdSOUhHemtNeEtoeGpqV2FuTW1tYUQydk5XOVc3Q1lxTTN6QU5aV0x1U0xpdWRDNUk4QlU0SXg1K2RGR2ptVjR6Qml2TlcvbVZZOGFBOFNVemF2Tm0zbXRlYk5zS1hZekdkSGZ6MkEwYzN6RE1pa09aSDNMRnQ2TzFzdVc0UWplanRhenZtV0xiQmwyODgxVWI2WXlSeEFQMWRUNGM5c3UzbXpkTGx1R28zaXpkVHVidlBYSDRtdWtxQlNWeWh4WEFSV1d5M0VBdXpvYmVPWGt1N0psT0pMWG1qZXpxN05CdGd5N3FBQldqbnd6bFRsdXNsNkxmQnBqemZ6Kzh3MmVmY1lZaTBIZ3VhYTNhT3FQeXBaaUYyZmNMWTAwaHg5WVk0OFdlZlFtWWp6VitEcjlnd095cFRpYXZrUS9UemUrNFpYcjlHVkdiS01kYVk3RmdQSzdaVjVvMmtTenQxZUdNNll4MXNJTFRadGt5N0NEQ2tULy80S1I1bGh0bnhZNTdPejh4S3NMWGptenZXTWZPenMva1MzRERrNHJuemJTSEt0c0ZHSTdYZkVlWGp6NWptd1pydVRGaysrWXVnL2VvWnoyVUQ3Y0hHV0lBdWpLOG5yTCszUjVKQ3pFYkxyaXZielI4cjVzR1ZhekFJZ00vVExjSEl0UnVNamxrYjRtdHJibmxWSGU4Mnh0Mzh1UnZpYlpNcXpFajBoYUNKeHVqc3Z0MTJJZnJ6YS94NkNldU0yTFFRYTlFRjd5aFErR20yTkppZzhxd2Y2ZUl4em9PU1piaGhJMDlCemxrNTZVRWQ2cWNJWTVDbEM0bk1BR0hSNWlLb3FIMnl3a3VWVmp5QnpuQVdGcGNpemtzNzdQOWFoaE1nZDZqdkZwN3duWk1xd2loTWlLK0lVNWxBM2kzOUsrUjdZRUpkblM4WkZzQ1ZZeUgwNlpZNzVFSVpiUlB6amdwZUE1Vy9td3MwSGxzSkk2T0dXT2VSS0ZXTWJ1emdQMEp0TG03ZExrU0c4aXh1N09BN0psV01WY09HV09DeVFLc1l6dEhmdGtTMUFhaGE5dkxRaHpCQkdaUnBTaU85RkhRMC9XWmVBMFdkRFFjNVR1UkViWi9OM0dSQ0JvSU9wdEtKZlo2K1B1VDVYTE4rVTBFZ3p5Y2ZlbnNtVllnUUZNTnhCNWU1UmpmN2ZTQzFXT1FlSHJQTjBBYW1TcnNJS0R2Y2RsUy9BRUIzdVZYVU9hYnFEZzgwWlh2SWZtL2piWk1qeEJjMzg3WFdxR3NrODJnQW15VlpqTk1RZFVXUElTaWw3djhRWlFKVnVGMlRUMktkbFlqa1hSNjMyMmdZSjd4cHNIOVA1d08xSDBlbGNhZ0hKMWVqMmVWdDkyRkwzZUVRTlJLVllwT3VMZHNpVjRDa1gzbGhjYmlMM2pTcUgzaWR1TG91WW9NMUJ3MzNpZkRqYTBGVVd2ZDhBQVNtV3JNQnVGUTZrZGlhTFh1MWk1bUNyQUZmWEJWVUxWNjYya09UeGVJZFYyVkwzZVN2NnZBajdQbFRLVWlxclgyd0E2Wklzd20wTGpqRG9rR2d0UjlIcDNHVUJjdGdxektmYUhaRXZ3RkNWK0pSUFg5QnVBY3N1YnBmNGkyUkk4aGFMbWFEZUFMdGtxektZaW9OeTZwcU5SOUhwM0dVQ3JiQlZtVTFtZ1pHTTVGa1d2ZDlRQWxJczNIbCtvWEtDeG8xSDBlamNiZ0hJNTVTY0dsV3dzeHpKQnpldjl1UUUweWxaaE5zWCtNSldCY2JKbGVJTEtRSm1xRCtTTkJxQmsrb2pwSWVWMi96cVNhZXBlNXlNR29HUk94NWxGazJWTDhBVG5GWjBqVzRKVkhEU0FnN0pWV01GNVJWTXc4TW1Xb1RRR1BzNHJtaUpiaGxVY05JQkRnSEpobFVWR0lUVmg1YklPT1lvWjRVa1VHWVd5WlZoQmdxUTVZb0NTU1dVdktwMGxXNExTWEtqdTlUMEd4SWFpY3Y4cVU0bFYxSmJVRUZJektFNDZJU05JYlltU3lUSWg2WWNoYyt5U0tNUXlBcjRDNXBiTWtDMURTZWFXekZBMlZKMmtINGJNc1ZPaUVFdTV1UFI4MlJLVVJQSHJXZytuekZFdlVZaWxUQWxWVXhPZUtGdUdVdFNFSnpJbFZDMWJocFhzaEZQbStCaFFNcjhLd0lyeUMyVkxVQXJGcjJjdnNBOU9tV01BMkNKTmpzWE1ERS9XbzRkSjFJUW5Nak9zOUFMckJ3Zy9uTGFIL005eXROakQxUldYNmlYQlBQSGg0OXJLeTJUTHNKcjNobjRZYm81M0pBaXhqU21oYWhhVktmMFFhVG1MeW1ZenVWQzVwUHdqMlRUMHczQnpiRWJCL2VURFdWMXhpZDVmbmlQRi9oQ3JLaTZSTGNOcUVnd2JKSWFib3gzWVlic2NHeW4yaDdudXJDV3laYmlTNjg1YW9tcG8rbkIyQU5HaFgwYm1yWHJEWGkzMk03L2tYT3BLWnNxVzRTb3VMSjNGL0pKelpjdXdnOVA2LzBoenZHNmpFR2xjWDNVRmxXb21CVENkOGNFS3JxKzZRcllNdXppdC80ODB4MllVM0ZNK2twQVI1TGJ4cTFVT2Z6Q0ZRaVBBcmVOWGVlVTZ0VEJzcGdyT05FY2NlTVUyT1JLWkVLems2MmV2ME5PN28rQURicXhhVGxVZ0lsdUtYYnpNaUFtcFZMbHluN05IaTN6bWxjeGdkZVdsc21VNGt0V1ZsekxQVzBHYmZ4ejVSaXB6ckVjTU1aNWdXV1FCSzhvWHlwYmhLRmFVTDJSWlpJRnNHWGJTUW9ySnFGVG1pSkhDUlNxenF1SVNsa2JxWk10d0JFc2pkVjVZenhqSjg0aCtmeHFqbFNENHJiVmFuTWMxbFl1NXBuS3haNTlCZk1DMXlXdmdRWjVOOWFadmU5dmVWTzhid0dGQTZRaXpWTlIzN3VmM24yOVF0bHBSS3Z3K2c2K2Z2Y0tyNno5SGdLbWt5S013MnNpUkFQN1RTa1ZPcGE1a0ptc25yRkUxY2NBWmhJMUMxazVZNDFWamdPam5LZjhTampaeUFFeENaQ2J4eENUM1NGcjYyM25teEhxTzlDbVhMZlVMSmhkVzhiZlZLMVhOa3A0SkE4QjBSa2xzbUs3czJWRThzdWFSaW9wQUdYZE91cDVsa1FYNEZIc1M4ZUZqYVdRQmQwNjYzc3ZHQUhpVk5Cay8wNDBjQUt2d1NFaEpPZzcxTnZKODAwWk94TnhmcmFFNldNNE5WY3VZRmhvdlc0b1RXRTJhZU1LeHpPRURkZ056VEJibE91S0RDVFpGNjlrUS9ZQllvbCsybkt3SkdnR1dSeGF5TkZLbmJQWFhMTmtEMUFLRG8zMWdMSE1BM0E3ODJrUlJycVlqM3MzL3RXeGphOGRIcnBqUjh2c01GcFdlejVjcUx0TGw0RTduRHVDcGRCL0l4QnhCWUQrZ2JGTFVYSWdPZExJeHVvUHRIZnNjT1pJRWpRQVhsczVpYWFTTzhvSlMyWEtjeG1mQXVhUlkrQnRPSnVZQXVBOTR5QVJSeXRHZDZHTnIrMGRzYmYrSXB2N28yRit3bUtwQWhFVmxzMWxVTnNjejA5RTU4QUFaOU9kTXpWRU1OQUJLSnl2S2gwSGdjTzl4ZG5VMnNMdnJJRzBEbmJhZGUxeEJDYlhGMDVsWE1vT3BvUW1LemEyWnpnbGdCaGtVaXMzVUhBQjNBYi9JUTVTbk9CRnI1VURQVVE3MEh1TkF6ekU2NCthbEJTdnhoNmtKVDZRbU5KR2E4Q1NxZytXbUhkc0QzQU04a3NrSHN6RkhFSkg4YldxT29qekxJTkRTMzhieFdET2Z4MXBwR2VnZzJ0OUJSN3lIN2tRdi9Za0JlaE45RENLbUIwTkdJUUdqZ0NJalJLay9UQ1JRU2tWQktXY0h5NWtRcktRaU1FNlBEcmx4R0pnRjlHWHk0V3hXdjJQQUQ0SC96bDZUdC9FQmxZRnhvazVoc1d3MW51YUhaR2dNU0w5Q25vci9RZUc4dWhxbDJZM292eG1UclRuaXdOMmtXVGpSYUJ6SzNXU1pseTJYcGRKM0dDWCtYYU54S0w4RDNzcjJTN25HRVh3ZnNHK3VVcVBKblU3RXVrYlc1R3FPbzhDUGN2eXVSbU1uUHlMSG1wZlpUT1dPeEkvSTgzTnhyZ2ZRYUN4bUMzQVpPZWFBemljOE13NnNaWXo0RkkxR0VqSGcyK1NSSEQzZjJPWGR3SS96UElaR1l3VS9CajdNNXdENTNGWU5FUURlQlJibGV5Q054aVMySVc2bjhncVhObVBYU3o5d002S0VnVVlqbTNiZ20rUnBERERISENBaWR1ODA2VmdhVFQ1OEY5RWY4OGJNL1pLL0FkYVplRHlOSmx2V0FjK1lkVEN6TnhQL0E3REw1R05xTkptd0c5SC9UTU5zYzNRRFh3Vk9tbnhjalNZZGJjQU5pUDVuR2xha29UaUllQ0JTdXZpbXhqSEVnVnNRZVE1TXhhb2NMVzhDLzJqUnNUV2E0WHdmZU0yS0ExdVp3T2hoNEhFTGo2L1JQSTZGaVQrc3p1NzFQZUFsaTgraDhTWXZJZnFYWlZodGpqandEV0NEeGVmUmVJdU5pSVZuUzU5cjdjZ0wyWXVZU2REYmF6Vm1VSStZRVRWMVppb1ZkaVZOYlFOV2ttY2dtTWJ6Zklqb1IyMTJuTXpPak1KTndKV0lCTDRhVGJic1FmUWYyd3FtMkoxdWU4Z2dlWWNDYXp6RlhtdzJCdGh2RG9CR1lBa2lyRmlqR1l0dGlQN1NhUGVKWlJWcU9BbXNRTXc2YURTanNSRXhZa2dKUjVKWnhhUUR1QnA0VWFJR2pYTjVDZEUvcE8wVGtsM2lweGY0R3ZBenlUbzB6dUpoeFBSL3Iwd1JzczBCWWlIbmZzUm1xUUhKV2pSeUdVRDBnL3R3UU9DcUU4d3h4QlBBTllEN3ExSnFjcUVWdUJiUkR4eUJrOHdCOENmZ0V2UmlvZGY0RU5IdTYyVUxHWTdUekFFaUxuOHg4TFJzSVJwYmVBYlIzcWJ2eDhnWEo1b0RSRW1xMjRDL0k0UHlWQnBYMG9WbzMxdHhhQnM3MVJ4RHJBTVdBSCtSckVOakxuOUJ0T3M2eVRyUzRuUnpnQmh1bHdEL2lnbTVpRFJTNlVlMDR4SWNlQnMxRWplWUE4UVUzNFBBcGNCT3lWbzB1YkVUOFd6eElDNlpzbmVMT1liNEFMZ0krQ2NjZXArcU9ZTXV4RDd2aTREdGtyVmtoZHZNQWVLdnprK0JXdUFWeVZvMDZYa1YwVTQvd1NXanhYRGNhSTRoRGdGZlJzVGY2RDBpem1JUG9sM1dJTnJKbGJqWkhFTzhEc3hIWkx2VHllVGtjaExSRHZNUjdlSnFWREFIaUNIN01XQW04Ty9ZdEkxUzh3VnRpUEppTXhIdDRMcGJxRlNZVVovRGlaUUQ5d0wzQU9Na2ExR1pOa1FFN2M5Uk1DWk9WWE1NVVE3Y2hSanFxeVZyVVlsR3hBanhTeFEweFJDcW0yT0lRa1NlbzNzUjk4T2EzTmlKR0NtZUJmb2thN0VjcjVoak9Nc1Jld2ErZ2pDTkpqMTlpTjJhVDVCRG9YczM0MFZ6REZHQnlNNjlGcWlUck1XSjFBTlBJb29TdFVqV0lnVXZtMk00ODRFYms2L1prclhJWkMvd1hQTGwrVEFkYlk0enFRVnVRaXd3emtlZDZlNVVKQkFtZUJuNEE2STZraWFKTmtkNnFoRHBKMWNCVndIajVjb3hoVWJFanNzM0VEdnZiRTJVNWlhME9iTGpQRVJrNlNXSU90ZTFnRitxb3ZURUVhUEJac1FlaXMzQXgxSVZ1UWh0anZ3b0FlWUE4eEJHcVFYT0J5WkswSElNK0FoaGh0Mkl3cVY3Z0U0SldwUkFtOE1hUXNEVTVHc2FjQTVRaVpnaHEwcitYSW93VnlENW5RamdBd2FCYVBLOWZrVG43a1NzUnJjZ2JvTWFnYzhRUVgySGt5K3BPWjVVNVA4Qk1rdnZGczBYcVg4QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tYWluLXBpYy1jZWJiYzE2OGE3NTJmNDE4N2U3MmI2MmZlM2IwOTFmZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFITUFBQUFkQ0FZQUFBQ1p2VlBNQUFBSW5FbEVRVlJvZ2UxYmYzQmNWUlgrN250eHNObjhXQmtzRVJ1VFNDUVQ3WkEwUTBYVW9RM1lHb2M0aWNRSnhscXpERm9OT05Jb3pxQ2l0RERxaklwdCtNTU1ZRzFLLzJoSEcrbVdQeXhZMjlEcUtGWHJndEZNdGJhcFUwdXNMU1ROYnFUbFBaNXp0dCtOTHpkdk55OC9CV2EvbVoyM2U5OTk5OTUzenozbmZPZmN1OHJ6UElSRnFxWXhvbXluQ0xhN1NObU9CZHVGc3B5THluWlNzTjFoWlR1dWxNRjJvQ3k1dWxDMkExaHlkUzlkTFJmVzloZEQ5NWxEZU9STlZUTloxVnFxTExjRHRyTUdOdDRCUUNSeHVhL0tSUUFPZ0RjQjJBZmdNUUJ4QUsvbTVMQ3dzREwxTmxxeHRpQloyZlk5QUg4SFVBOWdJNEF5QU1jQUhHYjVqMW45YmdBckFQd053RFlBendHNDhRMDRYNjlwQkFwenRDeDJMWUEvQW1nRWNFdGtvUGVHU0g5Y0JQY0RBQVVBVm92U0FuZ1NRRHVBYmdBMmhTcmErMHNBK3dGOGgrVTVMQUFtQ2ZQOGtqdEVvdzRCK0JXQXVvS2pQL21GbEtlV05uMFd3Q29BVFFCR2ZJL3NCUEFRcjhVQWhnR3NCM0FUZ0R0WVBxVTV6MkgybUNETTgxZXR1NWJhMWwxNFl2dnRCY2QyL0NjdHlPcVd4UUMrQytDZS9DTjdqd1gwK2cwSzhVRmYyVUVBN3dkd0EvMW9Edk9NY1kwWktla29VQlo2QWZRV251eTUxK2oyYS9TVlAvS1ZpVC85RTcrL0F1QUxKRUJpaWdkWkxzOThHTUJ2K1hrazVPdkVBSlN6blI3enBsSUtudWVOMTFGS1RhcnpSa2FtQ01Sdi91NEhVQXJnZDZObHNkaWxjTUtSOE1KU0ZzVEU3aEQvT0ZiWDhCSnNQQVhnelFEeUFZZzIxN0dOSVFDYkFldzIrdGxQNGU4QjhFS0llUlkvdkJKQVg1QXdwMUVuRGMvem11blBCVjFLS1hOOFp2MEQvTHJOWENpK2V5WUdXYjh2UTV1MUFEWmw2eGVYRm1xOThadzhVeHRRZFpoUncvajQwc0ljV1h4WEthejB5d3BMdmMxNHFCTEF5N3hLR0xLQnhPaExBSjZoK1pYUTVETUFUdE9uWGduZ2d0SE9lWnJqTzZkNm9YbUFGcnhHVm1INjZqNlQ1VjRRWXA3bjlTaWxiZys0RjUzaTJVeW96ZktjWHFTeUFJYTFabllBK0VQUjZVYy9hTlpPVnJYS0N4Mkk5TWMzcEdvYWw5QVhWdEcwdnB0Qy9EUTdsRmp6WDJTeGU0eW1HZ0E4QWVDckJvR2FWM2llRitWTGp3dkQ4N3h5cGRUZ0RQc04xRHhPZXBRQ0hWWktkV1pwSTBITkNvTkVoanJsL0VpL1lpMldhV0d1QWZDQVdUdFoyWllQR3g4QThCVVdkVEZoc0l3YXVndkFSd0ZzQVNDczl4eUFwd0Y4S0VDWVlwci9EZUJXQUZ0RHZzaGNvRG1naldhNmc5bGdnZ25tb3RuS3R0ZDdudGVWWmNGMFpqTEhBZGhHY3lvTEpJR0pQbk1yK1lVSU5HYU5YUEhGQXNhRzhZQ0dsdEdFSHVGdjBhNmYrVlpMa21ienIwQmE2Q0RSdVM2Z0xZOENYajJYa2dxQkpsWVo5STI3ZlJidHJlUkh0RUltZG9QbmVldDV6MjllZ3hiUlRMQ0ptcmRKOTBkRmlySS92V0NhOGxoNG9uaW8rMnhBUjllSW9DSUR2UTUvZXhTOEgrY29kSTErQU4vTU1PakROTE5Ub1Q1RW5TbGhtRmp4a3llNWltdG5hV3I5dUY5L1YwcHQ5anl2ajhLT3pzVTdaT2xQWXZwT2FxNlVsVnRrcEVHeG8yQXhTWTJHbU5XUE1BUjVGeG10Q1dHcmI2SC9OQ0g5VklRWThBRXVuTUNQZDhuT2hDRVRmdTNvTWxqdlhHbU9SbE80YW1rYzhDWmp1dVRJWkxqUlBLYmJyaDhwNlVpa2R6cjhPeHcyU2dBc1NsVzNKR0E3WjJDbnpkTnhxbmM1dzVWT3N0VGovQjFoNDJLYVhhUERSUUF1bSthZ1p3TTl3UW10aFo3bjdhWWcyK2ZBYi9xaDNWVDVBcjJiZGhsbHZBNXFBaVErNzFzQkQwaVljaldBYi9QMzIvT1A3SDFnYlBrcUlVcy9KeXU5bnVTbWhUUzVCc0FQMmQ3TFJudlMxdmVuTWVCQm1wRWd0R2ViT01QRSt0dUlzM3l1VE8xR010TWUrazQ5cG16aFR3OU52aDloeDdHUjE4M3NTNzlqUEk4VC9tcnhVUGVrenBPVmJaSkVLSTBNOU81T0xXMFNqWHZyV0YxREh1dzBLYnJBdk9zNkFILzI3Wnc0L093TUdJaVk2RE1oQncyKzRBYXprQm1nRlZOb2dkK003amErYXpZZEMyby9KRmFRaklEKzhRbWY2ZS9UekRNRE1pWVhzaUJLVTZ5ZmE2YXZqT3JGbEVkR3VuU2twTU11SHVvMnplSS9BTHlUMzkvTFRJN2tXMy9qcXlQSmdBRW1Da0R0eTdUS1JHdVB6bkR5cGd1ZDhVbjR0VThwTld5WTJwa0tjMlVHdnoxb3NOcTVnbzRuZzlDcGt3WXZrcXdzWjFqaGgrUmUzNWFxYmltQm5iNTNqcXZoNDc0NnBUUzFXaE9GMlQ2ZlpRSU96Y09MVG9DWVR4OUJHUFpwRUh4cE1CRm11YVRacHRDaXNCaWsxa2dNR1RZaE1CY1kxdjR6ci9qc3crN0k0cnVFbmJhWndpdzR0dU40c3FwVjJHeDlwRCsrSTFYVCtEbVNITTErUzhscVgvTFo4dm9NSmxhWThjMVp3cGE1eElTTVQ0QUdWWEFTb3RUT21RaHpvMUpxcGxyZGJyRFhIcHA4WkdrelFRM1VXT2t6czNMOW1DWkFza1cxN2Z4VjY1NkU1VHIvWTdPU2FNZGZBS3hOTFcxNkFYWjY5UzFqQ3U4VDlMY1BrbUJVVTd1djQrNklPWUd0UUxxdHd6T2NnT2xBSndVU0daSWhVZnJPR0FXZkxmVTJINGdaYmZiNTRzZE13aHpXZnBZWm9ENjZyV1k5MTFxWWNiSXJZYWovTkJxeHFJRjFGRjRmdGF1Q0srb0N0ZlZxYWw4S3dIMUdHMEtlcnFCQTV4V0dpZTNLdEQzbWVWNWNiN1dKbHN5QWtMd1c4QnlGbVU1UWpKL09HeW5wdUZGWjduNVk3azFGcDdZYzlBODBWZDN5ZTlqT3ZraC9QTDNQT2JaOGxXaHRCTFo3VVZuT0s5d3FpeXJiT1E3YnZSTzJzOU4zT2svQmNwOVN0bXZEY20vT25jNmJQNHlmTkNnZTZqN0lQY2RkbzJXeFNxTkhpU3Z2VHRVMGx2bks5aHA1MW5zWmR1d3lubjJJbWpLYmZHZ09JV0NlQWJxUGUzaDlveFZyMzZNTEl3TzllMGlMSHh1cmExQXNMdlNsN01TUDNzUFRCanFQcTNqcTRQUGNXVG1WRThqOFlvSXdpMDQvNnBMVnluYldzOG5LdGxpeXFsVUxieDM5NXRlTkVjbVcyRTk1cEdRZnk1WXdLL1Fwc3R0blgrZno5THJBcE5ONVJhZTJPSVVuZXlUby9US0FoeVV1VEZXM05KQVlmWkxrWncycjUzTkw3Q3hQNUYxSmszeVVPZCs2bkNBWERoa1BRUmVlMlA0SVR4UTh6MVRWU1NhdUpRdjBPSStSeUU3RSt3RDhtb3o0Rk92RUdGUG1UT3NDSXRSL1RWTFZMY1d3blZ0aHU2dVY3ZFRDZGl1VTdWekcvNXFjVWJaekZMWjdTTmxPSExaN09QZGZrLzhEQVB3WDVJblhkRWhVSjBrQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tYWluLW1vYmlsZS01ZmUyZDkzOTk4Yjg0YTM1ZWZhYTM4MmUyMDNiZmM3YS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWFwLTNmNmUxZGRiMzQyMTg1YTI2YzQ3NmRhYTU5YzNhODA1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tb2JpbGUtYXBwMS1iOGJjNmI5NTcwMjQyYmVkMWY0NTQ5NzM3YzU0MzYzZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbW9iaWxlLWFwcDItNGNjYjA0MTAxODhjOGI3Yzc5NjI2ZmQ4MTYyMjI0NWEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFCR0JBTUFBQUI3ek1ZRkFBQUFHMUJNVkVYTXpNeVdscGFjbkp5cXFxckZ4Y1d4c2JHam82TzN0N2UrdnI2SGUzS29BQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQ2hrbEVRVlJZaGUyVXpXK2JRQkRGMzJLK2prQVMyOGNsU1ZzZlNkdElQUzYxNWJQdFE4NVl0ZVFjd1pWOHh1ay8zcG1GS05EVWxpVlFta3I3Sk84YUJ1YTN5OHcrd01qSXlNakl5TWpJeU1qbzMra2hXZ0M3WVFsNDhXUGp2aGVTWkJYcEtqZU1oNVF3SGdORkZEWVNha2hXUmJxcTJOaHhMc1plQklSbElmOEkxcEd1V3BjNEpNVUNkOHE3d3VDeUhmd0lIZWtNaVFHUjNaV1ViVEFHY1dqNUdRNlpqam1YMEpIT2tCOE1XUU5wNGdhd0wraU9PK2J0c2RJRU90SVpRaW9TMms2YVdRUVowcVVmZVJkVllLbWdJejB3L0xDTWVEdENBZ3pCM2E0dURWM3BTQStRNVFodFNCcFdWZkRHdlVIbVVZblc1NEpUTnkwVnFhZlBaY2Nib0ZWNE9wOUtoN2ppL1JUZTRxNXR0VEFPY1pWMm1hT25GaTQ0WWZzd3h2UEtTZFlLUFIxR3pvU1dyWGdYdmk0TkZ4MzkyRXI4WW9PMVFWcVhXTk9IcXJxZ0g0TnNHSHB0OWNzRkRwTHo2d0wxWXZWRzcxeWkvdjB2a0RENmVoNkVERklJYW5FK2xtU2ZnYjQ1amJma3F1RUdRbXIvUEtMQS9uSStSSTkwVnZZMXhQNmdmdEV3V3lueENHOTlISUx2K0h3RFMzbjB4N2xPSUZZQlQ0UHJKVU5XTjNCemlqUWdvd3piR2pKWVZJT1RpRDNjNGhURTJjd1hnenpGVHp6TTdpRTJlbnFZOGNJRWhYeUoreVlrbVBpeWhsaXFHbXdwclBMcGVBSHBjMW5LbG42eXlyL2hsdFlzbEo1dWtUS0VRdGpTcjdLY0NySjM4eG9pbm9kQWVObjJPSVFLcnhjb0o1bmtSUHdPVDhGelRRSThEZkxXVHF3ZFh1OEVuK1NKbmZCVHZOenNNYVBsNjB3OE5YWmlyZENDT0ZkNFhST3kwcE1RcmdsVytXNkJ2WnB5SnA1ZWFnSnYxSWJvQ3owMnVndW5EaFUvVE4yRmcwb1YrZnVFSCtYcHBidmd5YjlBcWs4NkRaL1B5VW5JR1hMekxtK2ZxZDBiTU1Ua0RTQkdSdTlIdndHRWxtK0p5bGxLSlFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBQkdCQU1BQUFCN3pNWUZBQUFBRzFCTVZFWE16TXlXbHBhY25KeXFxcXJGeGNXeHNiR2pvNk8zdDdlK3ZyNkhlM0tvQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUNoa2xFUVZSWWhlMlV6VytiUUJERjMySytqa0FTMjhjbFNWc2ZTZHRJUFM2MTViUHRRODVZdGVRY3daVjh4dWsvM3BtRktORFVsaVZRbWtyN0pPOGFCdWEzeTh3K3dNakl5TWpJeU1qSXlNam8zK2toV2dDN1lRbDQ4V1BqdmhlU1pCWHBLamVNaDVRd0hnTkZGRFlTYWtoV1JicXEyTmh4THNaZUJJUmxJZjhJMXBHdVdwYzRKTVVDZDhxN3d1Q3lIZndJSGVrTWlRR1IzWldVYlRBR2NXajVHUTZaamptWDBKSE9rQjhNV1FOcDRnYXdMK2lPTytidHNkSUVPdElaUWlvUzJrNmFXUVFaMHFVZmVSZFZZS21nSXowdy9MQ01lRHRDQWd6QjNhNHVEVjNwU0ErUTVRaHRTQnBXVmZER3ZVSG1VWW5XNTRKVE55MFZxYWZQWmNjYm9GVjRPcDlLaDdqaS9SVGU0cTV0dFRBT2NaVjJtYU9uRmk0NFlmc3d4dlBLU2RZS1BSMUd6b1NXclhnWHZpNE5GeDM5MkVyOFlvTzFRVnFYV05PSHFycWdINE5zR0hwdDljc0ZEcEx6NndMMVl2Vkc3MXlpL3YwdmtERDZlaDZFREZJSWFuRStsbVNmZ2I0NWpiZmtxdUVHUW1yL1BLTEEvbkkrUkk5MFZ2WTF4UDZnZnRFd1d5bnhDRzk5SElMditId0RTM24weDdsT0lGWUJUNFBySlVOV04zQnppalFnb3d6YkdqSllWSU9UaUQzYzRoVEUyY3dYZ3p6RlR6ek03aUUyZW5xWThjSUVoWHlKK3lZa21QaXlobGlxR213cHJQTHBlQUhwYzFuS2xuNnl5ci9obHRZc2xKNXVrVEtFUXRqU3I3S2NDckozOHhvaW5vZEFlTm4yT0lRS3J4Y29KNW5rUlB3T1Q4RnpUUUk4RGZMV1Rxd2RYdThFbitTSm5mQlR2TnpzTWFQbDYwdzhOWFppcmRDQ09GZDRYUk95MHBNUXJnbFcrVzZCdlpweUpwNWVhZ0p2MUlib0N6MDJ1Z3VuRGhVL1ROMkZnMG9WK2Z1RUgrWHBwYnZneWI5QXFrODZEWi9QeVVuSUdYTHpMbStmcWQwYk1NVGtEU0JHUnU5SHZ3R0VsbStKeWxsS0pRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQUJHQkFNQUFBQjd6TVlGQUFBQUcxQk1WRVhNek15V2xwYWNuSnlxcXFyRnhjV3hzYkdqbzZPM3Q3ZSt2cjZIZTNLb0FBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFDaGtsRVFWUlloZTJVelcrYlFCREYzMksramtBUzI4Y2xTVnNmU2R0SVBTNjE1YlB0UTg1WXRlUWN3WlY4eHVrLzNwbUZLTkRVbGlWUW1rcjdKTzhhQnVhM3k4dyt3TWpJeU1qSXlNakl5TWpvMytraFdnQzdZUWw0OFdQanZoZVNaQlhwS2plTWg1UXdIZ05GRkRZU2FraFdSYnFxMk5oeExzWmVCSVJsSWY4STFwR3VXcGM0Sk1VQ2Q4cTd3dUN5SGZ3SUhla01pUUdSM1pXVWJUQUdjV2o1R1E2WmpqbVgwSkhPa0I4TVdRTnA0Z2F3TCtpT08rYnRzZElFT3RJWlFpb1MyazZhV1FRWjBxVWZlUmRWWUttZ0l6MHcvTENNZUR0Q0FnekIzYTR1RFYzcFNBK1E1UWh0U0JwV1ZmREd2VUhtVVluVzU0SlROeTBWcWFmUFpjY2JvRlY0T3A5S2g3amkvUlRlNHE1dHRUQU9jWlYybWFPbkZpNDRZZnN3eHZQS1NkWUtQUjFHem9TV3JYZ1h2aTRORngzOTJFcjhZb08xUVZxWFdOT0hxcnFnSDROc0dIcHQ5Y3NGRHBMejZ3TDFZdlZHNzF5aS92MHZrREQ2ZWg2RURGSUlhbkUrbG1TZmdiNDVqYmZrcXVFR1Ftci9QS0xBL25JK1JJOTBWdlkxeFA2Z2Z0RXdXeW54Q0c5OUhJTHYrSHdEUzNuMHg3bE9JRllCVDRQckpVTldOM0J6aWpRZ293emJHakpZVklPVGlEM2M0aFRFMmN3WGd6ekZUenpNN2lFMmVucVk4Y0lFaFh5Sit5WWttUGl5aGxpcUdtd3ByUExwZUFIcGMxbktsbjZ5eXIvaGx0WXNsSjV1a1RLRVF0alNyN0tjQ3JKMzh4b2lub2RBZU5uMk9JUUtyeGNvSjVua1JQd09UOEZ6VFFJOERmTFdUcXdkWHU4RW4rU0puZkJUdk56c01hUGw2MHc4TlhaaXJkQ0NPRmQ0WFJPeTBwTVFyZ2xXK1c2QnZacHlKcDVlYWdKdjFJYm9DejAydWd1bkRoVS9UTjJGZzBvVitmdUVIK1hwcGJ2Z3liOUFxazg2RFovUHlVbklHWEx6TG0rZnFkMGJNTVRrRFNCR1J1OUh2d0dFbG0rSnlsbEtKUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFCR0JBTUFBQUI3ek1ZRkFBQUFHMUJNVkVYTXpNeVdscGFjbkp5cXFxckZ4Y1d4c2JHam82TzN0N2UrdnI2SGUzS29BQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQ2hrbEVRVlJZaGUyVXpXK2JRQkRGMzJLK2prQVMyOGNsU1ZzZlNkdElQUzYxNWJQdFE4NVl0ZVFjd1pWOHh1ay8zcG1GS05EVWxpVlFta3I3Sk84YUJ1YTN5OHcrd01qSXlNakl5TWpJeU1qbzMra2hXZ0M3WVFsNDhXUGp2aGVTWkJYcEtqZU1oNVF3SGdORkZEWVNha2hXUmJxcTJOaHhMc1plQklSbElmOEkxcEd1V3BjNEpNVUNkOHE3d3VDeUhmd0lIZWtNaVFHUjNaV1ViVEFHY1dqNUdRNlpqam1YMEpIT2tCOE1XUU5wNGdhd0wraU9PK2J0c2RJRU90SVpRaW9TMms2YVdRUVowcVVmZVJkVllLbWdJejB3L0xDTWVEdENBZ3pCM2E0dURWM3BTQStRNVFodFNCcFdWZkRHdlVIbVVZblc1NEpUTnkwVnFhZlBaY2Nib0ZWNE9wOUtoN2ppL1JUZTRxNXR0VEFPY1pWMm1hT25GaTQ0WWZzd3h2UEtTZFlLUFIxR3pvU1dyWGdYdmk0TkZ4MzkyRXI4WW9PMVFWcVhXTk9IcXJxZ0g0TnNHSHB0OWNzRkRwTHo2d0wxWXZWRzcxeWkvdjB2a0RENmVoNkVERklJYW5FK2xtU2ZnYjQ1amJma3F1RUdRbXIvUEtMQS9uSStSSTkwVnZZMXhQNmdmdEV3V3lueENHOTlISUx2K0h3RFMzbjB4N2xPSUZZQlQ0UHJKVU5XTjNCemlqUWdvd3piR2pKWVZJT1RpRDNjNGhURTJjd1hnenpGVHp6TTdpRTJlbnFZOGNJRWhYeUoreVlrbVBpeWhsaXFHbXdwclBMcGVBSHBjMW5LbG42eXlyL2hsdFlzbEo1dWtUS0VRdGpTcjdLY0NySjM4eG9pbm9kQWVObjJPSVFLcnhjb0o1bmtSUHdPVDhGelRRSThEZkxXVHF3ZFh1OEVuK1NKbmZCVHZOenNNYVBsNjB3OE5YWmlyZENDT0ZkNFhST3kwcE1RcmdsVytXNkJ2WnB5SnA1ZWFnSnYxSWJvQ3owMnVndW5EaFUvVE4yRmcwb1YrZnVFSCtYcHBidmd5YjlBcWs4NkRaL1B5VW5JR1hMekxtK2ZxZDBiTU1Ua0RTQkdSdTlIdndHRWxtK0p5bGxLSlFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBQkdCQU1BQUFCN3pNWUZBQUFBRzFCTVZFWE16TXlXbHBhY25KeXFxcXJGeGNXeHNiR2pvNk8zdDdlK3ZyNkhlM0tvQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUNoa2xFUVZSWWhlMlV6VytiUUJERjMySytqa0FTMjhjbFNWc2ZTZHRJUFM2MTViUHRRODVZdGVRY3daVjh4dWsvM3BtRktORFVsaVZRbWtyN0pPOGFCdWEzeTh3K3dNakl5TWpJeU1qSXlNam8zK2toV2dDN1lRbDQ4V1BqdmhlU1pCWHBLamVNaDVRd0hnTkZGRFlTYWtoV1JicXEyTmh4THNaZUJJUmxJZjhJMXBHdVdwYzRKTVVDZDhxN3d1Q3lIZndJSGVrTWlRR1IzWldVYlRBR2NXajVHUTZaamptWDBKSE9rQjhNV1FOcDRnYXdMK2lPTytidHNkSUVPdElaUWlvUzJrNmFXUVFaMHFVZmVSZFZZS21nSXowdy9MQ01lRHRDQWd6QjNhNHVEVjNwU0ErUTVRaHRTQnBXVmZER3ZVSG1VWW5XNTRKVE55MFZxYWZQWmNjYm9GVjRPcDlLaDdqaS9SVGU0cTV0dFRBT2NaVjJtYU9uRmk0NFlmc3d4dlBLU2RZS1BSMUd6b1NXclhnWHZpNE5GeDM5MkVyOFlvTzFRVnFYV05PSHFycWdINE5zR0hwdDljc0ZEcEx6NndMMVl2Vkc3MXlpL3YwdmtERDZlaDZFREZJSWFuRStsbVNmZ2I0NWpiZmtxdUVHUW1yL1BLTEEvbkkrUkk5MFZ2WTF4UDZnZnRFd1d5bnhDRzk5SElMditId0RTM24weDdsT0lGWUJUNFBySlVOV04zQnppalFnb3d6YkdqSllWSU9UaUQzYzRoVEUyY3dYZ3p6RlR6ek03aUUyZW5xWThjSUVoWHlKK3lZa21QaXlobGlxR213cHJQTHBlQUhwYzFuS2xuNnl5ci9obHRZc2xKNXVrVEtFUXRqU3I3S2NDckozOHhvaW5vZEFlTm4yT0lRS3J4Y29KNW5rUlB3T1Q4RnpUUUk4RGZMV1Rxd2RYdThFbitTSm5mQlR2TnpzTWFQbDYwdzhOWFppcmRDQ09GZDRYUk95MHBNUXJnbFcrVzZCdlpweUpwNWVhZ0p2MUlib0N6MDJ1Z3VuRGhVL1ROMkZnMG9WK2Z1RUgrWHBwYnZneWI5QXFrODZEWi9QeVVuSUdYTHpMbStmcWQwYk1NVGtEU0JHUnU5SHZ3R0VsbStKeWxsS0pRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQUJHQkFNQUFBQjd6TVlGQUFBQUcxQk1WRVhNek15V2xwYWNuSnlxcXFyRnhjV3hzYkdqbzZPM3Q3ZSt2cjZIZTNLb0FBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFDaGtsRVFWUlloZTJVelcrYlFCREYzMksramtBUzI4Y2xTVnNmU2R0SVBTNjE1YlB0UTg1WXRlUWN3WlY4eHVrLzNwbUZLTkRVbGlWUW1rcjdKTzhhQnVhM3k4dyt3TWpJeU1qSXlNakl5TWpvMytraFdnQzdZUWw0OFdQanZoZVNaQlhwS2plTWg1UXdIZ05GRkRZU2FraFdSYnFxMk5oeExzWmVCSVJsSWY4STFwR3VXcGM0Sk1VQ2Q4cTd3dUN5SGZ3SUhla01pUUdSM1pXVWJUQUdjV2o1R1E2WmpqbVgwSkhPa0I4TVdRTnA0Z2F3TCtpT08rYnRzZElFT3RJWlFpb1MyazZhV1FRWjBxVWZlUmRWWUttZ0l6MHcvTENNZUR0Q0FnekIzYTR1RFYzcFNBK1E1UWh0U0JwV1ZmREd2VUhtVVluVzU0SlROeTBWcWFmUFpjY2JvRlY0T3A5S2g3amkvUlRlNHE1dHRUQU9jWlYybWFPbkZpNDRZZnN3eHZQS1NkWUtQUjFHem9TV3JYZ1h2aTRORngzOTJFcjhZb08xUVZxWFdOT0hxcnFnSDROc0dIcHQ5Y3NGRHBMejZ3TDFZdlZHNzF5aS92MHZrREQ2ZWg2RURGSUlhbkUrbG1TZmdiNDVqYmZrcXVFR1Ftci9QS0xBL25JK1JJOTBWdlkxeFA2Z2Z0RXdXeW54Q0c5OUhJTHYrSHdEUzNuMHg3bE9JRllCVDRQckpVTldOM0J6aWpRZ293emJHakpZVklPVGlEM2M0aFRFMmN3WGd6ekZUenpNN2lFMmVucVk4Y0lFaFh5Sit5WWttUGl5aGxpcUdtd3ByUExwZUFIcGMxbktsbjZ5eXIvaGx0WXNsSjV1a1RLRVF0alNyN0tjQ3JKMzh4b2lub2RBZU5uMk9JUUtyeGNvSjVua1JQd09UOEZ6VFFJOERmTFdUcXdkWHU4RW4rU0puZkJUdk56c01hUGw2MHc4TlhaaXJkQ0NPRmQ0WFJPeTBwTVFyZ2xXK1c2QnZacHlKcDVlYWdKdjFJYm9DejAydWd1bkRoVS9UTjJGZzBvVitmdUVIK1hwcGJ2Z3liOUFxazg2RFovUHlVbklHWEx6TG0rZnFkMGJNTVRrRFNCR1J1OUh2d0dFbG0rSnlsbEtKUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFCR0JBTUFBQUI3ek1ZRkFBQUFHMUJNVkVYTXpNeVdscGFjbkp5cXFxckZ4Y1d4c2JHam82TzN0N2UrdnI2SGUzS29BQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQ2hrbEVRVlJZaGUyVXpXK2JRQkRGMzJLK2prQVMyOGNsU1ZzZlNkdElQUzYxNWJQdFE4NVl0ZVFjd1pWOHh1ay8zcG1GS05EVWxpVlFta3I3Sk84YUJ1YTN5OHcrd01qSXlNakl5TWpJeU1qbzMra2hXZ0M3WVFsNDhXUGp2aGVTWkJYcEtqZU1oNVF3SGdORkZEWVNha2hXUmJxcTJOaHhMc1plQklSbElmOEkxcEd1V3BjNEpNVUNkOHE3d3VDeUhmd0lIZWtNaVFHUjNaV1ViVEFHY1dqNUdRNlpqam1YMEpIT2tCOE1XUU5wNGdhd0wraU9PK2J0c2RJRU90SVpRaW9TMms2YVdRUVowcVVmZVJkVllLbWdJejB3L0xDTWVEdENBZ3pCM2E0dURWM3BTQStRNVFodFNCcFdWZkRHdlVIbVVZblc1NEpUTnkwVnFhZlBaY2Nib0ZWNE9wOUtoN2ppL1JUZTRxNXR0VEFPY1pWMm1hT25GaTQ0WWZzd3h2UEtTZFlLUFIxR3pvU1dyWGdYdmk0TkZ4MzkyRXI4WW9PMVFWcVhXTk9IcXJxZ0g0TnNHSHB0OWNzRkRwTHo2d0wxWXZWRzcxeWkvdjB2a0RENmVoNkVERklJYW5FK2xtU2ZnYjQ1amJma3F1RUdRbXIvUEtMQS9uSStSSTkwVnZZMXhQNmdmdEV3V3lueENHOTlISUx2K0h3RFMzbjB4N2xPSUZZQlQ0UHJKVU5XTjNCemlqUWdvd3piR2pKWVZJT1RpRDNjNGhURTJjd1hnenpGVHp6TTdpRTJlbnFZOGNJRWhYeUoreVlrbVBpeWhsaXFHbXdwclBMcGVBSHBjMW5LbG42eXlyL2hsdFlzbEo1dWtUS0VRdGpTcjdLY0NySjM4eG9pbm9kQWVObjJPSVFLcnhjb0o1bmtSUHdPVDhGelRRSThEZkxXVHF3ZFh1OEVuK1NKbmZCVHZOenNNYVBsNjB3OE5YWmlyZENDT0ZkNFhST3kwcE1RcmdsVytXNkJ2WnB5SnA1ZWFnSnYxSWJvQ3owMnVndW5EaFUvVE4yRmcwb1YrZnVFSCtYcHBidmd5YjlBcWs4NkRaL1B5VW5JR1hMekxtK2ZxZDBiTU1Ua0RTQkdSdTlIdndHRWxtK0p5bGxLSlFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBQkdCQU1BQUFCN3pNWUZBQUFBRzFCTVZFWE16TXlXbHBhY25KeXFxcXJGeGNXeHNiR2pvNk8zdDdlK3ZyNkhlM0tvQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUNoa2xFUVZSWWhlMlV6VytiUUJERjMySytqa0FTMjhjbFNWc2ZTZHRJUFM2MTViUHRRODVZdGVRY3daVjh4dWsvM3BtRktORFVsaVZRbWtyN0pPOGFCdWEzeTh3K3dNakl5TWpJeU1qSXlNam8zK2toV2dDN1lRbDQ4V1BqdmhlU1pCWHBLamVNaDVRd0hnTkZGRFlTYWtoV1JicXEyTmh4THNaZUJJUmxJZjhJMXBHdVdwYzRKTVVDZDhxN3d1Q3lIZndJSGVrTWlRR1IzWldVYlRBR2NXajVHUTZaamptWDBKSE9rQjhNV1FOcDRnYXdMK2lPTytidHNkSUVPdElaUWlvUzJrNmFXUVFaMHFVZmVSZFZZS21nSXowdy9MQ01lRHRDQWd6QjNhNHVEVjNwU0ErUTVRaHRTQnBXVmZER3ZVSG1VWW5XNTRKVE55MFZxYWZQWmNjYm9GVjRPcDlLaDdqaS9SVGU0cTV0dFRBT2NaVjJtYU9uRmk0NFlmc3d4dlBLU2RZS1BSMUd6b1NXclhnWHZpNE5GeDM5MkVyOFlvTzFRVnFYV05PSHFycWdINE5zR0hwdDljc0ZEcEx6NndMMVl2Vkc3MXlpL3YwdmtERDZlaDZFREZJSWFuRStsbVNmZ2I0NWpiZmtxdUVHUW1yL1BLTEEvbkkrUkk5MFZ2WTF4UDZnZnRFd1d5bnhDRzk5SElMditId0RTM24weDdsT0lGWUJUNFBySlVOV04zQnppalFnb3d6YkdqSllWSU9UaUQzYzRoVEUyY3dYZ3p6RlR6ek03aUUyZW5xWThjSUVoWHlKK3lZa21QaXlobGlxR213cHJQTHBlQUhwYzFuS2xuNnl5ci9obHRZc2xKNXVrVEtFUXRqU3I3S2NDckozOHhvaW5vZEFlTm4yT0lRS3J4Y29KNW5rUlB3T1Q4RnpUUUk4RGZMV1Rxd2RYdThFbitTSm5mQlR2TnpzTWFQbDYwdzhOWFppcmRDQ09GZDRYUk95MHBNUXJnbFcrVzZCdlpweUpwNWVhZ0p2MUlib0N6MDJ1Z3VuRGhVL1ROMkZnMG9WK2Z1RUgrWHBwYnZneWI5QXFrODZEWi9QeVVuSUdYTHpMbStmcWQwYk1NVGtEU0JHUnU5SHZ3R0VsbStKeWxsS0pRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQUJHQkFNQUFBQjd6TVlGQUFBQUcxQk1WRVhNek15V2xwYWNuSnlxcXFyRnhjV3hzYkdqbzZPM3Q3ZSt2cjZIZTNLb0FBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFDaGtsRVFWUlloZTJVelcrYlFCREYzMksramtBUzI4Y2xTVnNmU2R0SVBTNjE1YlB0UTg1WXRlUWN3WlY4eHVrLzNwbUZLTkRVbGlWUW1rcjdKTzhhQnVhM3k4dyt3TWpJeU1qSXlNakl5TWpvMytraFdnQzdZUWw0OFdQanZoZVNaQlhwS2plTWg1UXdIZ05GRkRZU2FraFdSYnFxMk5oeExzWmVCSVJsSWY4STFwR3VXcGM0Sk1VQ2Q4cTd3dUN5SGZ3SUhla01pUUdSM1pXVWJUQUdjV2o1R1E2WmpqbVgwSkhPa0I4TVdRTnA0Z2F3TCtpT08rYnRzZElFT3RJWlFpb1MyazZhV1FRWjBxVWZlUmRWWUttZ0l6MHcvTENNZUR0Q0FnekIzYTR1RFYzcFNBK1E1UWh0U0JwV1ZmREd2VUhtVVluVzU0SlROeTBWcWFmUFpjY2JvRlY0T3A5S2g3amkvUlRlNHE1dHRUQU9jWlYybWFPbkZpNDRZZnN3eHZQS1NkWUtQUjFHem9TV3JYZ1h2aTRORngzOTJFcjhZb08xUVZxWFdOT0hxcnFnSDROc0dIcHQ5Y3NGRHBMejZ3TDFZdlZHNzF5aS92MHZrREQ2ZWg2RURGSUlhbkUrbG1TZmdiNDVqYmZrcXVFR1Ftci9QS0xBL25JK1JJOTBWdlkxeFA2Z2Z0RXdXeW54Q0c5OUhJTHYrSHdEUzNuMHg3bE9JRllCVDRQckpVTldOM0J6aWpRZ293emJHakpZVklPVGlEM2M0aFRFMmN3WGd6ekZUenpNN2lFMmVucVk4Y0lFaFh5Sit5WWttUGl5aGxpcUdtd3ByUExwZUFIcGMxbktsbjZ5eXIvaGx0WXNsSjV1a1RLRVF0alNyN0tjQ3JKMzh4b2lub2RBZU5uMk9JUUtyeGNvSjVua1JQd09UOEZ6VFFJOERmTFdUcXdkWHU4RW4rU0puZkJUdk56c01hUGw2MHc4TlhaaXJkQ0NPRmQ0WFJPeTBwTVFyZ2xXK1c2QnZacHlKcDVlYWdKdjFJYm9DejAydWd1bkRoVS9UTjJGZzBvVitmdUVIK1hwcGJ2Z3liOUFxazg2RFovUHlVbklHWEx6TG0rZnFkMGJNTVRrRFNCR1J1OUh2d0dFbG0rSnlsbEtKUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFCR0JBTUFBQUI3ek1ZRkFBQUFHMUJNVkVYTXpNeVdscGFjbkp5cXFxckZ4Y1d4c2JHam82TzN0N2UrdnI2SGUzS29BQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQ2hrbEVRVlJZaGUyVXpXK2JRQkRGMzJLK2prQVMyOGNsU1ZzZlNkdElQUzYxNWJQdFE4NVl0ZVFjd1pWOHh1ay8zcG1GS05EVWxpVlFta3I3Sk84YUJ1YTN5OHcrd01qSXlNakl5TWpJeU1qbzMra2hXZ0M3WVFsNDhXUGp2aGVTWkJYcEtqZU1oNVF3SGdORkZEWVNha2hXUmJxcTJOaHhMc1plQklSbElmOEkxcEd1V3BjNEpNVUNkOHE3d3VDeUhmd0lIZWtNaVFHUjNaV1ViVEFHY1dqNUdRNlpqam1YMEpIT2tCOE1XUU5wNGdhd0wraU9PK2J0c2RJRU90SVpRaW9TMms2YVdRUVowcVVmZVJkVllLbWdJejB3L0xDTWVEdENBZ3pCM2E0dURWM3BTQStRNVFodFNCcFdWZkRHdlVIbVVZblc1NEpUTnkwVnFhZlBaY2Nib0ZWNE9wOUtoN2ppL1JUZTRxNXR0VEFPY1pWMm1hT25GaTQ0WWZzd3h2UEtTZFlLUFIxR3pvU1dyWGdYdmk0TkZ4MzkyRXI4WW9PMVFWcVhXTk9IcXJxZ0g0TnNHSHB0OWNzRkRwTHo2d0wxWXZWRzcxeWkvdjB2a0RENmVoNkVERklJYW5FK2xtU2ZnYjQ1amJma3F1RUdRbXIvUEtMQS9uSStSSTkwVnZZMXhQNmdmdEV3V3lueENHOTlISUx2K0h3RFMzbjB4N2xPSUZZQlQ0UHJKVU5XTjNCemlqUWdvd3piR2pKWVZJT1RpRDNjNGhURTJjd1hnenpGVHp6TTdpRTJlbnFZOGNJRWhYeUoreVlrbVBpeWhsaXFHbXdwclBMcGVBSHBjMW5LbG42eXlyL2hsdFlzbEo1dWtUS0VRdGpTcjdLY0NySjM4eG9pbm9kQWVObjJPSVFLcnhjb0o1bmtSUHdPVDhGelRRSThEZkxXVHF3ZFh1OEVuK1NKbmZCVHZOenNNYVBsNjB3OE5YWmlyZENDT0ZkNFhST3kwcE1RcmdsVytXNkJ2WnB5SnA1ZWFnSnYxSWJvQ3owMnVndW5EaFUvVE4yRmcwb1YrZnVFSCtYcHBidmd5YjlBcWs4NkRaL1B5VW5JR1hMekxtK2ZxZDBiTU1Ua0RTQkdSdTlIdndHRWxtK0p5bGxLSlFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXJUd28gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhclR3byc7XG5pbXBvcnQgTWFpbkJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVGb3VyL01haW5CYW5uZXInO1xuaW1wb3J0IEluZm9ybWF0aW9uQXJlYSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVGb3VyL0luZm9ybWF0aW9uQXJlYSc7XG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vU2VydmljZXNDYXJkJztcbmltcG9ydCBPdXJGZWF0dXJlc0NvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vT3VyRmVhdHVyZXNDb250ZW50JztcbmltcG9ydCBFYXN5UGF5bWVudEJvcnJvdyBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9FYXN5UGF5bWVudEJvcnJvdyc7XG5pbXBvcnQgRnVuRmFjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRm91ci9GdW5GYWN0cyc7XG5pbXBvcnQgQ3VzdG9tZXJzRmVlZGJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQ3VzdG9tZXJzRmVlZGJhY2snO1xuaW1wb3J0IFBhcnRuZXJDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhcnRuZXJDb250ZW50JztcbmltcG9ydCBBcHBEb3dubG9hZENvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRm91ci9BcHBEb3dubG9hZENvbnRlbnQnO1xuaW1wb3J0IEFjY291bnRDcmVhdGVBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0FjY291bnRDcmVhdGVBcmVhJztcbmltcG9ydCBCbG9nQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9CbG9nQ2FyZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Gb290ZXInO1xuaW1wb3J0IFJhdGVzIGZyb20gJy4uL2NvbXBvbmVudHMvUmF0ZXMvUmF0ZXMnO1xuXG5jbGFzcyBJbmRleDQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyVHdvIC8+XG4gICAgICAgICAgICAgICAgPE1haW5CYW5uZXIgLz5cbiAgICAgICAgICAgICAgICA8SW5mb3JtYXRpb25BcmVhIC8+XG4gICAgICAgICAgICAgICAgPFJhdGVzIC8+XG4gICAgICAgICAgICAgICAgPFNlcnZpY2VDYXJkIC8+XG4gICAgICAgICAgICAgICAgPE91ckZlYXR1cmVzQ29udGVudCAvPlxuICAgICAgICAgICAgICAgIDxFYXN5UGF5bWVudEJvcnJvdyAvPlxuICAgICAgICAgICAgICAgIDxGdW5GYWN0cyAvPlxuICAgICAgICAgICAgICAgIDxDdXN0b21lcnNGZWVkYmFjayAvPlxuICAgICAgICAgICAgICAgIDxQYXJ0bmVyQ29udGVudCAvPlxuICAgICAgICAgICAgICAgIDxBcHBEb3dubG9hZENvbnRlbnQgLz5cbiAgICAgICAgICAgICAgICA8QWNjb3VudENyZWF0ZUFyZWEgLz5cbiAgICAgICAgICAgICAgICA8QmxvZ0NhcmQgLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg0OyIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBY3RpdmVMaW5rID0gKHsgcm91dGVyLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gY2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnO1xuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09IHByb3BzLmhyZWYgJiYgcHJvcHMuYWN0aXZlQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtwcm9wcy5hY3RpdmVDbGFzc05hbWV9YC50cmltKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIHByb3BzLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgIHJldHVybiA8TGluayB7Li4ucHJvcHN9PntSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgY2xhc3NOYW1lIH0pfTwvTGluaz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbC12aWRlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdvd1wiKTsiXSwic291cmNlUm9vdCI6IiJ9