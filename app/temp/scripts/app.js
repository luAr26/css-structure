webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _Person = __webpack_require__(2);

var _Person2 = _interopRequireDefault(_Person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jane = new _Person2.default('Jane Smith');

console.log(jane.name);
jane.greet();
(0, _jquery2.default)('h1').css({ color: '#B43F6B' });

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hi there, my name this " + this.name + ".");
    }
  }]);

  return Person;
}();

exports.default = Person;

/***/ })
],[1]);