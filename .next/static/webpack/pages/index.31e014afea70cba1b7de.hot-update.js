webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Rates/Rates.js":
/*!***********************************!*\
  !*** ./components/Rates/Rates.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Rates = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Rates, _Component);

  var _super = _createSuper(Rates);

  function Rates() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Rates);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      rates: {},
      updateDate: null
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Rates, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://api.exchangeratesapi.io/latest?base=USD').then(function (res) {
        console.log(res.data.base);

        _this2.setState({
          rates: res.data.rates,
          updateDate: res.data.date
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          rates = _this$state.rates,
          updateDate = _this$state.updateDate;
      var tablHead = [];
      var tableData = [];
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
      }, __jsx("h2", null, "Tarifas de las distintas monedas"), __jsx("div", {
        className: "bar"
      }), __jsx("p", null, "Actualizaci\xF3n de tarifas basadas en ", __jsx("strong", null, "USA"))), __jsx("div", {
        className: "table-responsive currency-rates-table"
      }, __jsx("table", {
        className: "table"
      }, __jsx("thead", null, __jsx("tr", null, tablHead.length ? tablHead.map(function (head, i) {
        return __jsx("th", {
          key: i,
          scope: "col"
        }, head);
      }) : null)), __jsx("tbody", null, __jsx("tr", null, tableData.length ? tableData.map(function (data, i) {
        return __jsx("td", {
          key: i
        }, data.toFixed(3));
      }) : null)))), __jsx("div", {
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
  }]);

  return Rates;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Rates);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRlcy9SYXRlcy5qcyJdLCJuYW1lcyI6WyJSYXRlcyIsInJhdGVzIiwidXBkYXRlRGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYmFzZSIsInNldFN0YXRlIiwiZGF0ZSIsInN0YXRlIiwidGFibEhlYWQiLCJ0YWJsZURhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInJhdGUiLCJwdXNoIiwibGVuZ3RoIiwibWFwIiwiaGVhZCIsImkiLCJ0b0ZpeGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsV0FBSyxFQUFFLEVBREg7QUFFSkMsZ0JBQVUsRUFBRTtBQUZSLEs7Ozs7Ozs7d0NBS1c7QUFBQTs7QUFDZkMsa0RBQUssQ0FBQ0MsR0FBTixDQUFVLGlEQUFWLEVBQ0NDLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDWEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxJQUFyQjs7QUFDQSxjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWVixlQUFLLEVBQUVLLEdBQUcsQ0FBQ0csSUFBSixDQUFTUixLQUROO0FBRVZDLG9CQUFVLEVBQUVJLEdBQUcsQ0FBQ0csSUFBSixDQUFTRztBQUZYLFNBQWQ7QUFJSCxPQVBEO0FBUUg7Ozs2QkFDUTtBQUFBLHdCQUN1QixLQUFLQyxLQUQ1QjtBQUFBLFVBQ0NaLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFVBRFIsZUFDUUEsVUFEUjtBQUVMLFVBQUlZLFFBQVEsR0FBRyxFQUFmO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FDLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZaEIsS0FBWixFQUFtQmlCLE9BQW5CLENBQTJCLFVBQVVDLElBQVYsRUFBZ0I7QUFDdkNMLGdCQUFRLENBQUNNLElBQVQsQ0FBY0QsSUFBZCxFQUR1QyxDQUNsQjs7QUFDckJKLGlCQUFTLENBQUNLLElBQVYsQ0FBZW5CLEtBQUssQ0FBQ2tCLElBQUQsQ0FBcEI7QUFDSCxPQUhEO0FBSUEsYUFDSTtBQUFTLGlCQUFTLEVBQUM7QUFBbkIsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0kscURBREosRUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQUZKLEVBR0ksNERBQXVDLDRCQUF2QyxDQUhKLENBREosRUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQU8saUJBQVMsRUFBQztBQUFqQixTQUNJLHFCQUNJLGtCQUVRTCxRQUFRLENBQUNPLE1BQVQsR0FBa0JQLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGVBQzNCO0FBQUksYUFBRyxFQUFFQSxDQUFUO0FBQVksZUFBSyxFQUFDO0FBQWxCLFdBQXlCRCxJQUF6QixDQUQyQjtBQUFBLE9BQWIsQ0FBbEIsR0FFSyxJQUpiLENBREosQ0FESixFQVVJLHFCQUNJLGtCQUVRUixTQUFTLENBQUNNLE1BQVYsR0FBbUJOLFNBQVMsQ0FBQ08sR0FBVixDQUFjLFVBQUNiLElBQUQsRUFBT2UsQ0FBUDtBQUFBLGVBQzdCO0FBQUksYUFBRyxFQUFFQTtBQUFULFdBQWFmLElBQUksQ0FBQ2dCLE9BQUwsQ0FBYSxDQUFiLENBQWIsQ0FENkI7QUFBQSxPQUFkLENBQW5CLEdBRUssSUFKYixDQURKLENBVkosQ0FESixDQU5KLEVBNEJJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFHLFlBQUksRUFBQyw4QkFBUjtBQUF1QyxjQUFNLEVBQUM7QUFBOUMsa0JBREosQ0FESixFQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksMkJBQVV2QixVQUFWLENBREosQ0FMSixDQTVCSixDQURKLENBREo7QUEwQ0g7Ozs7RUFsRWV3QiwrQzs7QUFxRUwxQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMWUwMTRhZmVhNzBjYmExYjdkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFJhdGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHJhdGVzOiB7fSxcclxuICAgICAgICB1cGRhdGVEYXRlOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P2Jhc2U9VVNEJylcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmJhc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJhdGVzOiByZXMuZGF0YS5yYXRlcyxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGU6IHJlcy5kYXRhLmRhdGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyByYXRlcywgdXBkYXRlRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgdGFibEhlYWQgPSBbXTtcclxuICAgICAgICBsZXQgdGFibGVEYXRhID0gW107XHJcbiAgICAgICAgT2JqZWN0LmtleXMocmF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHJhdGUpIHtcclxuICAgICAgICAgICAgdGFibEhlYWQucHVzaChyYXRlKTsgLy8ga2V5XHJcbiAgICAgICAgICAgIHRhYmxlRGF0YS5wdXNoKHJhdGVzW3JhdGVdKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImN1cnJlbmN5LXJhdGVzLWFyZWEgcHQtNzBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5UYXJpZmFzIGRlIGxhcyBkaXN0aW50YXMgbW9uZWRhczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjdHVhbGl6YWNpw7NuIGRlIHRhcmlmYXMgYmFzYWRhcyBlbiA8c3Ryb25nPlVTQTwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmUgY3VycmVuY3ktcmF0ZXMtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsSGVhZC5sZW5ndGggPyB0YWJsSGVhZC5tYXAoKGhlYWQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpfSBzY29wZT1cImNvbFwiPntoZWFkfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhLmxlbmd0aCA/IHRhYmxlRGF0YS5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpfT57ZGF0YS50b0ZpeGVkKDMpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGN1cnJlbmN5LXJhdGVzLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZXhjaGFuZ2VyYXRlc2FwaS5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Tb3VyY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EYXRlOiB7dXBkYXRlRGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRlczsiXSwic291cmNlUm9vdCI6IiJ9