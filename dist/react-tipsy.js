(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Tipsy"] = factory(require("react"), require("react-dom"));
	else
		root["Tipsy"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Inspired by Bootstrap's jQuery tooltip plugin, which drew its inspiration
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * from the jQuery.tipsy plugin written by Jason Frame, Tipsy is a
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * simple component that allows you to easily add tooltips to any React
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * component.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Like bootstrap's tooltip plugin, Tipsy does not rely on images.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/*
	 * const propTypes = {
	 *   
	 *   // Use this property to render your component inside the `Tipsy`.
	 *   children: PropTypes.element.isRequired,
	 *  
	 *   // The className property is a standard space-separated list of classes 
	 *   // to apply to the main tooltip element when it rendered. This can be used 
	 *   // to add custom styling to a specific tooltip.
	 *   className: PropTypes.string,
	 * 
	 *   // The contents to render. It's assumed to be a string but if you wish,
	 *   // you may pass in any mountable "node".
	 *   content: PropTypes.node.isRequired,
	 * 
	 *   // Specify where to place the tooltip.
	 *   // 
	 *   // defaults to 'top'
	 *   placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	 * 
	 *   // How tooltip is triggered - click | hover | focus | touch | manual.
	 *   // 
	 *   // You may pass multiple triggers; separate them with a space. Pass an string with value "manual" to manually trigger the tooltip.
	 *   trigger: PropTypes.string
	 * 
	 * };
	 */
	var Tipsy = function (_Component) {
	  _inherits(Tipsy, _Component);

	  function Tipsy() {
	    _classCallCheck(this, Tipsy);

	    return _possibleConstructorReturn(this, (Tipsy.__proto__ || Object.getPrototypeOf(Tipsy)).apply(this, arguments));
	  }

	  _createClass(Tipsy, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // ref. to the tipsy React element.
	      this.tipsy = null;
	      // ref. to the "portal" DOM element
	      this.portal = document.createElement('div');
	      // flag used to update position if child component was updated
	      this.isVisible = false;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      // if content and/or placement prop has changed, and tooltip is visible, forceUpdate the tooltip.
	      if ((this.props.content != prevProps.content || this.props.placement != prevProps.placement) && this.isVisible) {
	        this.show(true);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.destroy();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = _react2.default.Children.only(this.props.children);
	      var _children$props = children.props,
	          onBlur = _children$props.onBlur,
	          onClick = _children$props.onClick,
	          onFocus = _children$props.onFocus,
	          onMouseOut = _children$props.onMouseOut,
	          onMouseOver = _children$props.onMouseOver,
	          onTouchEnd = _children$props.onTouchEnd,
	          onTouchStart = _children$props.onTouchStart;

	      var props = {};
	      var triggers = this.props.trigger.split(' ');

	      var i = void 0,
	          trigger = void 0;
	      for (i = triggers.length; i--;) {
	        trigger = triggers[i];

	        if (trigger == 'click') {
	          props.onClick = this._toggle.bind(this, onClick);
	        } else if (trigger == 'hover') {
	          props.onMouseOut = this._hide.bind(this, onMouseOut);
	          props.onMouseOver = this._show.bind(this, onMouseOver);
	        } else if (trigger == 'focus') {
	          props.onBlur = this._hide.bind(this, onBlur);
	          props.onFocus = this._show.bind(this, onFocus);
	        } else if (trigger == 'touch') {
	          props.onTouchEnd = this._hide.bind(this, onTouchEnd);
	          props.onTouchStart = this._show.bind(this, onTouchStart);
	        }
	      }

	      return _react2.default.cloneElement(children, props);
	    }

	    // Public API
	    // ----------

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      // unmount element so we can trigger React component lifecycle methods.
	      var unmounted = _reactDom2.default.unmountComponentAtNode(this.portal);

	      if (unmounted) document.body.removeChild(this.portal); // remove portal from DOM.

	      this.isVisible = false;
	      this.tipsy = null;
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      // return early if tooltip is not visible
	      if (!this.isVisible) return;

	      // unmount the component
	      _reactDom2.default.unmountComponentAtNode(this.portal);

	      // remove portal
	      document.body.removeChild(this.portal);

	      // flip `show` flag
	      this.isVisible = false;
	    }
	  }, {
	    key: 'show',
	    value: function show(forceUpdate) {
	      // return early if tooltip is already visible or "forceUpdate" is false
	      if (!forceUpdate && this.isVisible) return;

	      // render tooltip
	      var element = _react2.default.createElement(
	        'div',
	        { className: 'Tipsy in ' + this.props.placement + ' ' + this.props.className, role: 'tooltip' },
	        _react2.default.createElement('div', { className: 'Tipsy-arrow' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'Tipsy-inner' },
	          this.props.content
	        )
	      );

	      // mount the component
	      document.body.appendChild(this.portal);

	      // render element
	      this.tipsy = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, element, this.portal);

	      // update position
	      this.updatePosition();

	      // flip `show` flag
	      this.isVisible = true;
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      if (this.isVisible) this.hide();else this.show();
	    }
	  }, {
	    key: 'updatePosition',
	    value: function updatePosition() {
	      if (!this.tipsy) return;
	      var el = _reactDom2.default.findDOMNode(this);
	      var tipsy = _reactDom2.default.findDOMNode(this.tipsy);
	      var placement = this.props.placement;

	      var _offset = offset(el),
	          left = _offset.left,
	          top = _offset.top;

	      if (placement == 'top') {
	        top = top - tipsy.offsetHeight;
	        left = left + (el.offsetWidth / 2 - tipsy.offsetWidth / 2);
	      } else if (placement == 'bottom') {
	        top = top + el.offsetHeight;
	        left = left + (el.offsetWidth / 2 - tipsy.offsetWidth / 2);
	      } else if (placement == 'right') {
	        top = top + (el.offsetHeight / 2 - tipsy.offsetHeight / 2);
	        left = left + el.offsetWidth;
	      } else {
	        // placement == 'left'
	        top = top + (el.offsetHeight / 2 - tipsy.offsetHeight / 2);
	        left = left - tipsy.offsetWidth;
	      }

	      tipsy.style.top = top + 'px';
	      tipsy.style.left = left + 'px';
	    }

	    // Private API
	    // -----------

	  }, {
	    key: '_hide',
	    value: function _hide(callback, e) {
	      this.hide();

	      if (callback) return callback(e);
	    }
	  }, {
	    key: '_toggle',
	    value: function _toggle(callback, e) {
	      this.toggle();

	      if (callback) return callback(e);
	    }
	  }, {
	    key: '_show',
	    value: function _show(callback, e) {
	      this.show();

	      if (callback) return callback(e);
	    }
	  }]);

	  return Tipsy;
	}(_react.Component);

	exports.default = Tipsy;
	;

	Tipsy.defaultProps = {
	  placement: 'top',
	  trigger: 'hover focus touch'
	};

	Tipsy.version = "0.6.2";

	// IE8+ equiv. of $.fn.offset
	function offset(el) {
	  var rect = el.getBoundingClientRect();
	  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

	  return {
	    top: rect.top + scrollTop,
	    left: rect.left + scrollLeft
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ])
});
;