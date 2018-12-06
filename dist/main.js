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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-lite */ "./src/react-lite/index.js");
/* harmony import */ var _Demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo */ "./src/Demo.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      n: 5,
      demo: true
    };
    _this.add = _this.add.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleComponents = _this.toggleComponents.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Component Did Mount");
    }
  }, {
    key: "add",
    value: function add() {
      var n = this.state.n;
      n++;
      this.setState({
        n: n
      });
    }
  }, {
    key: "toggleComponents",
    value: function toggleComponents() {
      this.setState({
        demo: !this.state.demo
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react_lite__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, _react_lite__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
        onClick: this.add
      }, "Add"), this.state.demo ? _react_lite__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Demo__WEBPACK_IMPORTED_MODULE_1__["default"], {
        message: this.state.n
      }) : _react_lite__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "Hello"), _react_lite__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
        onClick: this.toggleComponents
      }, "Toggle"));
    }
  }]);

  return App;
}(_react_lite__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Demo.js":
/*!*********************!*\
  !*** ./src/Demo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-lite */ "./src/react-lite/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Demo =
/*#__PURE__*/
function (_Component) {
  _inherits(Demo, _Component);

  function Demo() {
    _classCallCheck(this, Demo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Demo).apply(this, arguments));
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return _react_lite__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, this.props.message);
    }
  }]);

  return Demo;
}(_react_lite__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-lite */ "./src/react-lite/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");


document.addEventListener('DOMContentLoaded', function () {
  _react_lite__WEBPACK_IMPORTED_MODULE_0__["default"].render(_react_lite__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('app'));
});

/***/ }),

/***/ "./src/react-lite/api/Component.js":
/*!*****************************************!*\
  !*** ./src/react-lite/api/Component.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_updateContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/updateContainer */ "./src/react-lite/lib/updateContainer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Component =
/*#__PURE__*/
function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = props;
    this.state = this.state || {};
    this.isMounted = false;
  }

  _createClass(Component, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "setState",
    value: function setState(partialState) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      this.state = Object.assign({}, this.state, partialState);
      Object(_lib_updateContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__internalContainer, callback);
    }
  }]);

  return Component;
}();

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/react-lite/api/createElement.js":
/*!*********************************************!*\
  !*** ./src/react-lite/api/createElement.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createElement = function createElement(type, attributes) {
  var props = Object.assign({}, attributes);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  props.children = children.filter(function (c) {
    return c != null;
  }).map(function (child) {
    return child instanceof Object ? child : createTextElement(child);
  });
  return {
    type: type,
    props: props
  };
};

var createTextElement = function createTextElement(nodeValue) {
  return createElement("TEXT", {
    nodeValue: nodeValue
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "./src/react-lite/api/render.js":
/*!**************************************!*\
  !*** ./src/react-lite/api/render.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_reconciliation_reconcile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/reconciliation/reconcile */ "./src/react-lite/lib/reconciliation/reconcile.js");

var rootContainer = null;

var render = function render(element, target) {
  var prevContainer = rootContainer;
  var nextContainer = Object(_lib_reconciliation_reconcile__WEBPACK_IMPORTED_MODULE_0__["default"])(target, prevContainer, element);
  rootContainer = nextContainer;
};

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/react-lite/index.js":
/*!*********************************!*\
  !*** ./src/react-lite/index.js ***!
  \*********************************/
/*! exports provided: render, createElement, Component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _api_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/render.js */ "./src/react-lite/api/render.js");
/* harmony import */ var _api_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/createElement */ "./src/react-lite/api/createElement.js");
/* harmony import */ var _api_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/Component */ "./src/react-lite/api/Component.js");



var render = _api_render_js__WEBPACK_IMPORTED_MODULE_0__["default"];
var createElement = _api_createElement__WEBPACK_IMPORTED_MODULE_1__["default"];
var Component = _api_Component__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  render: render,
  createElement: createElement,
  Component: Component
});

/***/ }),

/***/ "./src/react-lite/lib/createContainer.js":
/*!***********************************************!*\
  !*** ./src/react-lite/lib/createContainer.js ***!
  \***********************************************/
/*! exports provided: createDOMContainer, createReactContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDOMContainer", function() { return createDOMContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactContainer", function() { return createReactContainer; });
/* harmony import */ var _updateAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateAttributes */ "./src/react-lite/lib/updateAttributes.js");
/* harmony import */ var _flattenChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flattenChildren */ "./src/react-lite/lib/flattenChildren.js");
/* harmony import */ var _reconciliation_scenarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reconciliation/scenarios */ "./src/react-lite/lib/reconciliation/scenarios.js");



var createDOMContainer = function createDOMContainer(element) {
  var type = element.type,
      props = element.props;
  var dom = type === "TEXT" ? document.createTextNode("") : document.createElement(type);
  Object(_updateAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(dom, {}, props);
  var childElements = props.children || [];
  var flattenedChildren = Object(_flattenChildren__WEBPACK_IMPORTED_MODULE_1__["default"])(childElements);
  var childContainers = flattenedChildren.map(createContainer);
  var nextChildElements = childContainers.map(function (child) {
    return child.dom;
  });
  nextChildElements.forEach(function (child) {
    return dom.appendChild(child);
  });
  var container = {
    dom: dom,
    element: element,
    childContainers: childContainers
  };
  return container;
};
var createReactContainer = function createReactContainer(element) {
  var container = {};
  var publicContainer = createPublicContainer(element, container);
  var childElement = publicContainer.render();
  var childContainer = createContainer(childElement);
  var dom = childContainer.dom;
  Object.assign(container, {
    dom: dom,
    element: element,
    childContainer: childContainer,
    publicContainer: publicContainer
  });
  return container;
};

var createContainer = function createContainer(child) {
  if (Object(_reconciliation_scenarios__WEBPACK_IMPORTED_MODULE_2__["isReactComponent"])(child)) {
    return createReactContainer(child);
  } else {
    return createDOMContainer(child);
  }
};

var createPublicContainer = function createPublicContainer(_ref, internalContainer) {
  var type = _ref.type,
      props = _ref.props;
  var publicContainer = new type(props);
  publicContainer.__internalContainer = internalContainer;
  return publicContainer;
};

/***/ }),

/***/ "./src/react-lite/lib/flattenChildren.js":
/*!***********************************************!*\
  !*** ./src/react-lite/lib/flattenChildren.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var flattenChildren = function flattenChildren(children) {
  var flatChildren = [];
  children.forEach(function (child) {
    if (child.constructor.name === "Array") {
      flatChildren = flatChildren.concat(child);
    } else {
      flatChildren.push(child);
    }
  });
  return flatChildren;
};

/* harmony default export */ __webpack_exports__["default"] = (flattenChildren);

/***/ }),

/***/ "./src/react-lite/lib/reconciliation/handleReactComponent.js":
/*!*******************************************************************!*\
  !*** ./src/react-lite/lib/reconciliation/handleReactComponent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reconcile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconcile */ "./src/react-lite/lib/reconciliation/reconcile.js");
/* harmony import */ var _flattenChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flattenChildren */ "./src/react-lite/lib/flattenChildren.js");
/* harmony import */ var _scenarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenarios */ "./src/react-lite/lib/reconciliation/scenarios.js");
/* harmony import */ var _createContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createContainer */ "./src/react-lite/lib/createContainer.js");





var handleReactComponent = function handleReactComponent(parentDOMElement, previousContainer, nextElement) {
  var scenario = Object(_scenarios__WEBPACK_IMPORTED_MODULE_2__["getScenario"])(previousContainer, nextElement);
  var nextContainer;

  switch (scenario) {
    case _scenarios__WEBPACK_IMPORTED_MODULE_2__["ADD_NEW_ELEMENT"]:
      nextContainer = Object(_createContainer__WEBPACK_IMPORTED_MODULE_3__["createReactContainer"])(nextElement);
      componentDidMount(nextContainer);
      parentDOMElement.appendChild(nextContainer.dom);
      return nextContainer;

    case _scenarios__WEBPACK_IMPORTED_MODULE_2__["REMOVE_EXISTING_ELEMENT"]:
      componentWillUnmount(previousContainer);
      parentDOMElement.removeChild(previousContainer.dom);
      return null;

    case _scenarios__WEBPACK_IMPORTED_MODULE_2__["UPDATE_EXISTING_ELEMENT"]:
      var publicContainer = previousContainer.publicContainer;
      var oldProps = publicContainer.props;
      publicContainer.props = nextElement.props;
      var nextChildElement = publicContainer.render();
      nextChildElement.props.children = Object(_flattenChildren__WEBPACK_IMPORTED_MODULE_1__["default"])(nextChildElement.props.children);
      var oldChildContainer = previousContainer.childContainer;
      var nextChildContainer = Object(_reconcile__WEBPACK_IMPORTED_MODULE_0__["default"])(parentDOMElement, oldChildContainer, nextChildElement);
      previousContainer.dom = nextChildContainer.dom;
      previousContainer.childContainer = nextChildContainer;
      previousContainer.element = nextElement;
      publicContainer.componentDidUpdate(oldProps);
      return previousContainer;

    case _scenarios__WEBPACK_IMPORTED_MODULE_2__["REPLACE_EXISTING_ELEMENT"]:
      nextContainer = Object(_createContainer__WEBPACK_IMPORTED_MODULE_3__["createReactContainer"])(nextElement);
      componentDidMount(nextContainer);
      parentDOMElement.replaceChild(nextContainer.dom, previousContainer.dom);
      return nextContainer;

    default:
      console.log("I DONT KNOW WHAT TO DO");
      return null;
  }
};

var componentDidMount = function componentDidMount(_ref) {
  var publicContainer = _ref.publicContainer;
  publicContainer.componentDidMount();
  publicContainer.isMounted = true;
};

var componentWillUnmount = function componentWillUnmount(_ref2) {
  var publicContainer = _ref2.publicContainer;
  publicContainer.componentWillUnmount();
};

/* harmony default export */ __webpack_exports__["default"] = (handleReactComponent);

/***/ }),

/***/ "./src/react-lite/lib/reconciliation/reconcile.js":
/*!********************************************************!*\
  !*** ./src/react-lite/lib/reconciliation/reconcile.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handleReactComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleReactComponent */ "./src/react-lite/lib/reconciliation/handleReactComponent.js");
/* harmony import */ var _scenarios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenarios */ "./src/react-lite/lib/reconciliation/scenarios.js");
/* harmony import */ var _createContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createContainer */ "./src/react-lite/lib/createContainer.js");
/* harmony import */ var _updateAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../updateAttributes */ "./src/react-lite/lib/updateAttributes.js");





var reconcile = function reconcile(parentDOMElement, previousContainer, nextElement) {
  if (Object(_scenarios__WEBPACK_IMPORTED_MODULE_1__["isReactComponent"])(nextElement)) {
    return Object(_handleReactComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(parentDOMElement, previousContainer, nextElement);
  }

  var scenario = Object(_scenarios__WEBPACK_IMPORTED_MODULE_1__["getScenario"])(previousContainer, nextElement);
  var nextContainer;

  switch (scenario) {
    case _scenarios__WEBPACK_IMPORTED_MODULE_1__["ADD_NEW_ELEMENT"]:
      nextContainer = Object(_createContainer__WEBPACK_IMPORTED_MODULE_2__["createDOMContainer"])(nextElement);
      parentDOMElement.appendChild(nextContainer.dom);
      return nextContainer;

    case _scenarios__WEBPACK_IMPORTED_MODULE_1__["REMOVE_EXISTING_ELEMENT"]:
      parentDOMElement.removeChild(previousContainer.dom);
      return null;

    case _scenarios__WEBPACK_IMPORTED_MODULE_1__["UPDATE_EXISTING_ELEMENT"]:
      Object(_updateAttributes__WEBPACK_IMPORTED_MODULE_3__["default"])(previousContainer.dom, previousContainer.element.props, nextElement.props);
      previousContainer.childContainers = reconcileChildren(previousContainer, nextElement);
      previousContainer.element = nextElement;
      return previousContainer;

    case _scenarios__WEBPACK_IMPORTED_MODULE_1__["REPLACE_EXISTING_ELEMENT"]:
      nextContainer = Object(_createContainer__WEBPACK_IMPORTED_MODULE_2__["createDOMContainer"])(nextElement);
      parentDOMElement.replaceChild(nextContainer.dom, previousContainer.dom);
      return nextContainer;

    default:
      console.log("I DONT KNOW WHAT TO DO");
      return null;
  }
};

var reconcileChildren = function reconcileChildren(_ref, nextElement) {
  var dom = _ref.dom,
      childContainers = _ref.childContainers;
  var nextChildElements = nextElement.props.children || [];
  var newChildContainers = [];
  var count = Math.max(childContainers.length, nextChildElements.length);

  for (var i = 0; i < count; i++) {
    var childContainer = childContainers[i];
    var childElement = nextChildElements[i];
    var newChildContainer = reconcile(dom, childContainer, childElement);
    newChildContainers.push(newChildContainer);
  }

  return newChildContainers;
};

/* harmony default export */ __webpack_exports__["default"] = (reconcile);

/***/ }),

/***/ "./src/react-lite/lib/reconciliation/scenarios.js":
/*!********************************************************!*\
  !*** ./src/react-lite/lib/reconciliation/scenarios.js ***!
  \********************************************************/
/*! exports provided: ADD_NEW_ELEMENT, UPDATE_EXISTING_ELEMENT, REPLACE_EXISTING_ELEMENT, REMOVE_EXISTING_ELEMENT, getScenario, isReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_ELEMENT", function() { return ADD_NEW_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EXISTING_ELEMENT", function() { return UPDATE_EXISTING_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPLACE_EXISTING_ELEMENT", function() { return REPLACE_EXISTING_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_EXISTING_ELEMENT", function() { return REMOVE_EXISTING_ELEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScenario", function() { return getScenario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReactComponent", function() { return isReactComponent; });
/* harmony import */ var _api_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/Component */ "./src/react-lite/api/Component.js");

var ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
var UPDATE_EXISTING_ELEMENT = "UPDATE_EXISTING_ELEMENT";
var REPLACE_EXISTING_ELEMENT = "REPLACE_EXISTING_ELEMENT";
var REMOVE_EXISTING_ELEMENT = "REMOVE_EXISTING_ELEMENT";
var getScenario = function getScenario(previousContainer, nextElement) {
  if (!previousContainer) {
    return ADD_NEW_ELEMENT;
  } else if (!nextElement) {
    return REMOVE_EXISTING_ELEMENT;
  } else if (previousContainer.element.type === nextElement.type) {
    return UPDATE_EXISTING_ELEMENT;
  } else {
    return REPLACE_EXISTING_ELEMENT;
  }
};
var isReactComponent = function isReactComponent(element) {
  return element.type.prototype instanceof _api_Component__WEBPACK_IMPORTED_MODULE_0__["default"];
};

/***/ }),

/***/ "./src/react-lite/lib/updateAttributes.js":
/*!************************************************!*\
  !*** ./src/react-lite/lib/updateAttributes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var updateAttributes = function updateAttributes(dom, props, nextProps) {
  Object.keys(props).forEach(function (propName) {
    if (propName === "children") {} else if (propName.startsWith('on')) {
      var event = propName.slice(2).toLowerCase();
      dom.removeEventListener(event, props[propName]);
    } else {
      dom[propName] = null;
    }
  });
  Object.keys(nextProps).forEach(function (propName) {
    if (propName === "children") {} else if (propName.startsWith('on')) {
      var event = propName.slice(2).toLowerCase();
      dom.addEventListener(event, nextProps[propName]);
    } else {
      dom[propName] = nextProps[propName];
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (updateAttributes);

/***/ }),

/***/ "./src/react-lite/lib/updateContainer.js":
/*!***********************************************!*\
  !*** ./src/react-lite/lib/updateContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reconciliation_reconcile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconciliation/reconcile */ "./src/react-lite/lib/reconciliation/reconcile.js");


var updateContainer = function updateContainer(internalContainer, callback) {
  var parentNode = internalContainer.dom.parentNode;
  var element = internalContainer.element;
  Object(_reconciliation_reconcile__WEBPACK_IMPORTED_MODULE_0__["default"])(parentNode, internalContainer, element);
  callback();
};

/* harmony default export */ __webpack_exports__["default"] = (updateContainer);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map