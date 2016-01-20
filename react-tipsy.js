(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactTipsy"] = factory(require("react"), require("react-dom"));
	else
		root["ReactTipsy"] = factory(root["React"], root["ReactDOM"]);
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Inspired by Bootstrap's jQuery tooltip plugin, which drew its inspiration
	 * from the jQuery.tipsy plugin written by Jason Frame, react-tipsy is a
	 * simple component that allows you to easily add tooltips to any React
	 * component.
	 *
	 * Like bootstrap's tooltip plugin, react-tipsy does not rely on images.
	 */

	function offset(el) {
	  // IE 8+ only
	  var rect = el.getBoundingClientRect();

	  return {
	    top: rect.top + document.body.scrollTop,
	    left: rect.left + document.body.scrollLeft
	  };
	}

	var ReactTipsy = _react2.default.createClass({
	  displayName: 'ReactTipsy',

	  propTypes: {

	    /**
	     * Use this property to render your component inside the `ReactTipsy`.
	     *
	     * **NOTE** ReactTipsy only supports tooltip for a single component/
	     * DOM element.
	     */
	    children: _react2.default.PropTypes.element.isRequired,

	    /**
	     * The contents to render. It's assumed to be a string but if you wish,
	     * you may pass in any mountable "node".
	     */
	    content: _react2.default.PropTypes.node.isRequired,

	    /**
	     * Specify where to place the tooltip.
	     *
	     * defaults to 'top'
	     */
	    placement: _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'top'
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    // we don't use this.state because we don't want to trigger
	    // `render` on children.
	    this.tipsy = {
	      // ref. to the child node we are wrapped around
	      target: null,
	      // ref. to the tipsy DOM element.
	      el: null,
	      // ref. to the "portal" DOM element
	      portal: document.createElement('div'),
	      // flag used to update position if child component was updated
	      show: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    // get the top-level DOM element for that this component is wrapped around.
	    this.tipsy.target = _reactDom2.default.findDOMNode(this);
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.tipsy.show) this.updatePosition();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    // unmount element so we can trigger React component lifecycle methods.
	    var unmounted = _reactDom2.default.unmountComponentAtNode(this.tipsy.portal);

	    if (unmounted) {
	      // remove portal from DOM.
	      document.body.removeChild(this.tipsy.portal);
	    }
	  },
	  render: function render() {
	    var children = _react2.default.Children.only(this.props.children);
	    var _children$props = children.props;
	    var onBlur = _children$props.onBlur;
	    var onFocus = _children$props.onFocus;
	    var onMouseOver = _children$props.onMouseOver;
	    var onMouseOut = _children$props.onMouseOut;

	    var props = {
	      onBlur: this._onBlur.bind(this, onBlur),
	      onFocus: this._onFocus.bind(this, onFocus),
	      onMouseOver: this._onMouseOver.bind(this, onMouseOver),
	      onMouseOut: this._onMouseOut.bind(this, onMouseOut)
	    };

	    return _react2.default.cloneElement(children, props);
	  },
	  renderTipsy: function renderTipsy() {
	    // render tooltip
	    var placement = this.props.placement;

	    var className = 'react-tipsy in ' + placement;

	    return _react2.default.createElement(
	      'div',
	      { className: className, role: 'tooltip' },
	      _react2.default.createElement('div', { className: 'react-tipsy-arrow' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'react-tipsy-inner' },
	        this.props.content
	      )
	    );
	  },
	  show: function show() {
	    // return early if tooltip is already shown.
	    if (this.tipsy.show) return;

	    // render tooltip
	    var tooltip = this.renderTipsy();

	    // mount the component
	    document.body.appendChild(this.tipsy.portal);

	    // render element
	    this.tipsy.el = _reactDom2.default.render(tooltip, this.tipsy.portal);

	    // update position
	    this.updatePosition();

	    // flip `show` flag
	    this.tipsy.show = true;
	  },
	  hide: function hide() {
	    // return early if tooltip is not visible
	    if (!this.tipsy.show) return;

	    // unmount the component
	    _reactDom2.default.unmountComponentAtNode(this.tipsy.portal);

	    // remove portal
	    document.body.removeChild(this.tipsy.portal);

	    // flip `show` flag
	    this.tipsy.show = false;
	  },
	  updatePosition: function updatePosition() {
	    var _tipsy = this.tipsy;
	    var target = _tipsy.target;
	    var el = _tipsy.el;
	    var placement = this.props.placement;

	    var targetOffset = offset(target);

	    var left = targetOffset.left;
	    var top = targetOffset.top;

	    if (placement == 'top') {
	      top = top - el.offsetHeight;
	      left = left + (target.offsetWidth / 2 - el.offsetWidth / 2);
	    } else if (placement == 'bottom') {
	      top = top + target.offsetHeight;
	      left = left + (target.offsetWidth / 2 - el.offsetWidth / 2);
	    } else if (placement == 'right') {
	      top = top + (target.offsetHeight / 2 - el.offsetHeight / 2);
	      left = left + target.offsetWidth;
	    } else {
	      // placement == 'left'
	      top = top + (target.offsetHeight / 2 - el.offsetHeight / 2);
	      left = left - el.offsetWidth;
	    }

	    el.style.top = top + 'px';
	    el.style.left = left + 'px';
	  },
	  _onBlur: function _onBlur(handler, e) {
	    this.hide();

	    if (handler) handler(e);
	  },
	  _onFocus: function _onFocus(handler, e) {
	    this.show();

	    if (handler) handler(e);
	  },
	  _onMouseOver: function _onMouseOver(handler, e) {
	    this.show();

	    if (handler) handler(e);
	  },
	  _onMouseOut: function _onMouseOut(handler, e) {
	    this.hide();

	    if (handler) handler(e);
	  }
	});

	ReactTipsy.version = '0.2.0';

	exports.default = ReactTipsy;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;