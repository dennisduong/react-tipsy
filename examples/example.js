/******/ (function(modules) { // webpackBootstrap
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactTipsy = __webpack_require__(1);

	var _reactTipsy2 = _interopRequireDefault(_reactTipsy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'react-tipsy-demo' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'react-tipsy'
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { margin: '0 100px' } },
	          _react2.default.createElement(
	            'table',
	            { style: { width: '100%' } },
	            _react2.default.createElement(
	              'tbody',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    _reactTipsy2.default,
	                    {
	                      ref: 'tooltip',
	                      content: 'Tooltip on left',
	                      placement: 'left'
	                    },
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'button' },
	                      'Left'
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    _reactTipsy2.default,
	                    {
	                      content: _react2.default.createElement(
	                        'h4',
	                        null,
	                        'This is actually an <H4> React Element!'
	                      ),
	                      placement: 'top'
	                    },
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'button' },
	                      'Top..;)'
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    _reactTipsy2.default,
	                    {
	                      content: 'Tooltip on right',
	                      placement: 'right'
	                    },
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'button' },
	                      'Right'
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    _reactTipsy2.default,
	                    { content: 'Tooltip on bottom', placement: 'bottom' },
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'button' },
	                      'Bottom'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { margin: '25px auto' } },
	          'What about dealing with tooltips wrapping a deeply nested DOM node?',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          'You should use ',
	          _react2.default.createElement(
	            'code',
	            null,
	            'event.stopPropagation()'
	          ),
	          ' on "onFocus", "onMouseOver" and "onTouchStart" to prevent bubbling to the parent and triggering Tipsy.. See the following example:',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactTipsy2.default,
	            { content: 'Hello, world!' },
	            _react2.default.createElement(
	              'ul',
	              { style: { display: 'inline-block' } },
	              _react2.default.createElement(
	                'li',
	                null,
	                'If you hover over me, you will see the tooltip!',
	                _react2.default.createElement(
	                  'ul',
	                  { onFocus: stopPropagation, onMouseOver: stopPropagation, onTouchStart: stopPropagation },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    'But try hovering over me and see if it shows up or not!'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	function stopPropagation(e) {
	  e.stopPropagation();
	}

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Tipsy"] = factory(require("react"), require("react-dom"));else root["Tipsy"] = factory(root["React"], root["ReactDOM"]);
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(1);

				var _react2 = _interopRequireDefault(_react);

				var _reactDom = __webpack_require__(2);

				var _reactDom2 = _interopRequireDefault(_reactDom);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				/**
	    * Inspired by Bootstrap's jQuery tooltip plugin, which drew its inspiration
	    * from the jQuery.tipsy plugin written by Jason Frame, Tipsy is a
	    * simple component that allows you to easily add tooltips to any React
	    * component.
	    *
	    * Like bootstrap's tooltip plugin, Tipsy does not rely on images.
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
							var element = _react2.default.createElement('div', { className: 'Tipsy in ' + this.props.placement, role: 'tooltip' }, _react2.default.createElement('div', { className: 'Tipsy-arrow' }), _react2.default.createElement('div', { className: 'Tipsy-inner' }, this.props.content));

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

				Tipsy.propTypes = {

					/**
	     * Use this property to render your component inside the `Tipsy`.
	     */
					children: _propTypes2.default.element.isRequired,

					/**
	     * The contents to render. It's assumed to be a string but if you wish,
	     * you may pass in any mountable "node".
	     */
					content: _propTypes2.default.node.isRequired,

					/**
	     * Specify where to place the tooltip.
	     *
	     * defaults to 'top'
	     */
					placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),

					/**
	     * How tooltip is triggered - click | hover | focus | touch | manual.
	     *
	     * You may pass multiple triggers; separate them with a space. Pass an string with value "manual" to manually trigger the tooltip.
	     */
					trigger: _propTypes2.default.string

				};

				Tipsy.version = "0.5.0";

				// IE8+ equiv. of $.fn.offset
				function offset(el) {
					var rect = el.getBoundingClientRect();

					return {
						top: rect.top + document.body.scrollTop,
						left: rect.left + document.body.scrollLeft
					};
				}
				module.exports = exports['default'];

				/***/
			},
			/* 1 */
			/***/function (module, exports) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

				/***/
			},
			/* 2 */
			/***/function (module, exports) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */

					if (process.env.NODE_ENV !== 'production') {
						var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

						var isValidElement = function isValidElement(object) {
							return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
						};

						// By explicitly using `prop-types` you are opting into new development behavior.
						// http://fb.me/prop-types-in-prod
						var throwOnDirectAccess = true;
						module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
					} else {
						// By explicitly using `prop-types` you are opting into new production behavior.
						// http://fb.me/prop-types-in-prod
						module.exports = __webpack_require__(11)();
					}

					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(4));

				/***/
			},
			/* 4 */
			/***/function (module, exports) {

				// shim for using process in browser
				var process = module.exports = {};

				// cached from whatever global is present so that test runners that stub it
				// don't break things.  But we need to wrap it in a try catch in case it is
				// wrapped in strict mode code which doesn't define any globals.  It's inside a
				// function because try/catches deoptimize in certain engines.

				var cachedSetTimeout;
				var cachedClearTimeout;

				function defaultSetTimout() {
					throw new Error('setTimeout has not been defined');
				}
				function defaultClearTimeout() {
					throw new Error('clearTimeout has not been defined');
				}
				(function () {
					try {
						if (typeof setTimeout === 'function') {
							cachedSetTimeout = setTimeout;
						} else {
							cachedSetTimeout = defaultSetTimout;
						}
					} catch (e) {
						cachedSetTimeout = defaultSetTimout;
					}
					try {
						if (typeof clearTimeout === 'function') {
							cachedClearTimeout = clearTimeout;
						} else {
							cachedClearTimeout = defaultClearTimeout;
						}
					} catch (e) {
						cachedClearTimeout = defaultClearTimeout;
					}
				})();
				function runTimeout(fun) {
					if (cachedSetTimeout === setTimeout) {
						//normal enviroments in sane situations
						return setTimeout(fun, 0);
					}
					// if setTimeout wasn't available but was latter defined
					if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
						cachedSetTimeout = setTimeout;
						return setTimeout(fun, 0);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedSetTimeout(fun, 0);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
							return cachedSetTimeout.call(null, fun, 0);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
							return cachedSetTimeout.call(this, fun, 0);
						}
					}
				}
				function runClearTimeout(marker) {
					if (cachedClearTimeout === clearTimeout) {
						//normal enviroments in sane situations
						return clearTimeout(marker);
					}
					// if clearTimeout wasn't available but was latter defined
					if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
						cachedClearTimeout = clearTimeout;
						return clearTimeout(marker);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedClearTimeout(marker);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
							return cachedClearTimeout.call(null, marker);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
							// Some versions of I.E. have different rules for clearTimeout vs setTimeout
							return cachedClearTimeout.call(this, marker);
						}
					}
				}
				var queue = [];
				var draining = false;
				var currentQueue;
				var queueIndex = -1;

				function cleanUpNextTick() {
					if (!draining || !currentQueue) {
						return;
					}
					draining = false;
					if (currentQueue.length) {
						queue = currentQueue.concat(queue);
					} else {
						queueIndex = -1;
					}
					if (queue.length) {
						drainQueue();
					}
				}

				function drainQueue() {
					if (draining) {
						return;
					}
					var timeout = runTimeout(cleanUpNextTick);
					draining = true;

					var len = queue.length;
					while (len) {
						currentQueue = queue;
						queue = [];
						while (++queueIndex < len) {
							if (currentQueue) {
								currentQueue[queueIndex].run();
							}
						}
						queueIndex = -1;
						len = queue.length;
					}
					currentQueue = null;
					draining = false;
					runClearTimeout(timeout);
				}

				process.nextTick = function (fun) {
					var args = new Array(arguments.length - 1);
					if (arguments.length > 1) {
						for (var i = 1; i < arguments.length; i++) {
							args[i - 1] = arguments[i];
						}
					}
					queue.push(new Item(fun, args));
					if (queue.length === 1 && !draining) {
						runTimeout(drainQueue);
					}
				};

				// v8 likes predictible objects
				function Item(fun, array) {
					this.fun = fun;
					this.array = array;
				}
				Item.prototype.run = function () {
					this.fun.apply(null, this.array);
				};
				process.title = 'browser';
				process.browser = true;
				process.env = {};
				process.argv = [];
				process.version = ''; // empty string to avoid regexp issues
				process.versions = {};

				function noop() {}

				process.on = noop;
				process.addListener = noop;
				process.once = noop;
				process.off = noop;
				process.removeListener = noop;
				process.removeAllListeners = noop;
				process.emit = noop;
				process.prependListener = noop;
				process.prependOnceListener = noop;

				process.listeners = function (name) {
					return [];
				};

				process.binding = function (name) {
					throw new Error('process.binding is not supported');
				};

				process.cwd = function () {
					return '/';
				};
				process.chdir = function (dir) {
					throw new Error('process.chdir is not supported');
				};
				process.umask = function () {
					return 0;
				};

				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */

					'use strict';

					var emptyFunction = __webpack_require__(6);
					var invariant = __webpack_require__(7);
					var warning = __webpack_require__(8);

					var ReactPropTypesSecret = __webpack_require__(9);
					var checkPropTypes = __webpack_require__(10);

					module.exports = function (isValidElement, throwOnDirectAccess) {
						/* global Symbol */
						var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
						var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

						/**
	      * Returns the iterator method function contained on the iterable object.
	      *
	      * Be sure to invoke the function with the iterable as context:
	      *
	      *     var iteratorFn = getIteratorFn(myIterable);
	      *     if (iteratorFn) {
	      *       var iterator = iteratorFn.call(myIterable);
	      *       ...
	      *     }
	      *
	      * @param {?object} maybeIterable
	      * @return {?function}
	      */
						function getIteratorFn(maybeIterable) {
							var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
							if (typeof iteratorFn === 'function') {
								return iteratorFn;
							}
						}

						/**
	      * Collection of methods that allow declaration and validation of props that are
	      * supplied to React components. Example usage:
	      *
	      *   var Props = require('ReactPropTypes');
	      *   var MyArticle = React.createClass({
	      *     propTypes: {
	      *       // An optional string prop named "description".
	      *       description: Props.string,
	      *
	      *       // A required enum prop named "category".
	      *       category: Props.oneOf(['News','Photos']).isRequired,
	      *
	      *       // A prop named "dialog" that requires an instance of Dialog.
	      *       dialog: Props.instanceOf(Dialog).isRequired
	      *     },
	      *     render: function() { ... }
	      *   });
	      *
	      * A more formal specification of how these methods are used:
	      *
	      *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	      *   decl := ReactPropTypes.{type}(.isRequired)?
	      *
	      * Each and every declaration produces a function with the same signature. This
	      * allows the creation of custom validation functions. For example:
	      *
	      *  var MyLink = React.createClass({
	      *    propTypes: {
	      *      // An optional string or URI prop named "href".
	      *      href: function(props, propName, componentName) {
	      *        var propValue = props[propName];
	      *        if (propValue != null && typeof propValue !== 'string' &&
	      *            !(propValue instanceof URI)) {
	      *          return new Error(
	      *            'Expected a string or an URI for ' + propName + ' in ' +
	      *            componentName
	      *          );
	      *        }
	      *      }
	      *    },
	      *    render: function() {...}
	      *  });
	      *
	      * @internal
	      */

						var ANONYMOUS = '<<anonymous>>';

						// Important!
						// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
						var ReactPropTypes = {
							array: createPrimitiveTypeChecker('array'),
							bool: createPrimitiveTypeChecker('boolean'),
							func: createPrimitiveTypeChecker('function'),
							number: createPrimitiveTypeChecker('number'),
							object: createPrimitiveTypeChecker('object'),
							string: createPrimitiveTypeChecker('string'),
							symbol: createPrimitiveTypeChecker('symbol'),

							any: createAnyTypeChecker(),
							arrayOf: createArrayOfTypeChecker,
							element: createElementTypeChecker(),
							instanceOf: createInstanceTypeChecker,
							node: createNodeChecker(),
							objectOf: createObjectOfTypeChecker,
							oneOf: createEnumTypeChecker,
							oneOfType: createUnionTypeChecker,
							shape: createShapeTypeChecker
						};

						/**
	      * inlined Object.is polyfill to avoid requiring consumers ship their own
	      * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	      */
						/*eslint-disable no-self-compare*/
						function is(x, y) {
							// SameValue algorithm
							if (x === y) {
								// Steps 1-5, 7-10
								// Steps 6.b-6.e: +0 != -0
								return x !== 0 || 1 / x === 1 / y;
							} else {
								// Step 6.a: NaN == NaN
								return x !== x && y !== y;
							}
						}
						/*eslint-enable no-self-compare*/

						/**
	      * We use an Error-like object for backward compatibility as people may call
	      * PropTypes directly and inspect their output. However, we don't use real
	      * Errors anymore. We don't inspect their stack anyway, and creating them
	      * is prohibitively expensive if they are created too often, such as what
	      * happens in oneOfType() for any type before the one that matched.
	      */
						function PropTypeError(message) {
							this.message = message;
							this.stack = '';
						}
						// Make `instanceof Error` still work for returned errors.
						PropTypeError.prototype = Error.prototype;

						function createChainableTypeChecker(validate) {
							if (process.env.NODE_ENV !== 'production') {
								var manualPropTypeCallCache = {};
								var manualPropTypeWarningCount = 0;
							}
							function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
								componentName = componentName || ANONYMOUS;
								propFullName = propFullName || propName;

								if (secret !== ReactPropTypesSecret) {
									if (throwOnDirectAccess) {
										// New behavior only for users of `prop-types` package
										invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
									} else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
										// Old behavior for people using React.PropTypes
										var cacheKey = componentName + ':' + propName;
										if (!manualPropTypeCallCache[cacheKey] &&
										// Avoid spamming the console because they are often not actionable except for lib authors
										manualPropTypeWarningCount < 3) {
											warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
											manualPropTypeCallCache[cacheKey] = true;
											manualPropTypeWarningCount++;
										}
									}
								}
								if (props[propName] == null) {
									if (isRequired) {
										if (props[propName] === null) {
											return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
										}
										return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
									}
									return null;
								} else {
									return validate(props, propName, componentName, location, propFullName);
								}
							}

							var chainedCheckType = checkType.bind(null, false);
							chainedCheckType.isRequired = checkType.bind(null, true);

							return chainedCheckType;
						}

						function createPrimitiveTypeChecker(expectedType) {
							function validate(props, propName, componentName, location, propFullName, secret) {
								var propValue = props[propName];
								var propType = getPropType(propValue);
								if (propType !== expectedType) {
									// `propValue` being instance of, say, date/regexp, pass the 'object'
									// check, but we can offer a more precise error message here rather than
									// 'of type `object`'.
									var preciseType = getPreciseType(propValue);

									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}

						function createAnyTypeChecker() {
							return createChainableTypeChecker(emptyFunction.thatReturnsNull);
						}

						function createArrayOfTypeChecker(typeChecker) {
							function validate(props, propName, componentName, location, propFullName) {
								if (typeof typeChecker !== 'function') {
									return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
								}
								var propValue = props[propName];
								if (!Array.isArray(propValue)) {
									var propType = getPropType(propValue);
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
								}
								for (var i = 0; i < propValue.length; i++) {
									var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
									if (error instanceof Error) {
										return error;
									}
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}

						function createElementTypeChecker() {
							function validate(props, propName, componentName, location, propFullName) {
								var propValue = props[propName];
								if (!isValidElement(propValue)) {
									var propType = getPropType(propValue);
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}

						function createInstanceTypeChecker(expectedClass) {
							function validate(props, propName, componentName, location, propFullName) {
								if (!(props[propName] instanceof expectedClass)) {
									var expectedClassName = expectedClass.name || ANONYMOUS;
									var actualClassName = getClassName(props[propName]);
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}

						function createEnumTypeChecker(expectedValues) {
							if (!Array.isArray(expectedValues)) {
								process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
								return emptyFunction.thatReturnsNull;
							}

							function validate(props, propName, componentName, location, propFullName) {
								var propValue = props[propName];
								for (var i = 0; i < expectedValues.length; i++) {
									if (is(propValue, expectedValues[i])) {
										return null;
									}
								}

								var valuesString = JSON.stringify(expectedValues);
								return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
							}
							return createChainableTypeChecker(validate);
						}

						function createObjectOfTypeChecker(typeChecker) {
							function validate(props, propName, componentName, location, propFullName) {
								if (typeof typeChecker !== 'function') {
									return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
								}
								var propValue = props[propName];
								var propType = getPropType(propValue);
								if (propType !== 'object') {
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
								}
								for (var key in propValue) {
									if (propValue.hasOwnProperty(key)) {
										var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
										if (error instanceof Error) {
											return error;
										}
									}
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}

						function createUnionTypeChecker(arrayOfTypeCheckers) {
							if (!Array.isArray(arrayOfTypeCheckers)) {
								process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
								return emptyFunction.thatReturnsNull;
							}

							function validate(props, propName, componentName, location, propFullName) {
								for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
									var checker = arrayOfTypeCheckers[i];
									if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
										return null;
									}
								}

								return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
							}
							return createChainableTypeChecker(validate);
						}

						function createNodeChecker() {
							function validate(props, propName, componentName, location, propFullName) {
								if (!isNode(props[propName])) {
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}

						function createShapeTypeChecker(shapeTypes) {
							function validate(props, propName, componentName, location, propFullName) {
								var propValue = props[propName];
								var propType = getPropType(propValue);
								if (propType !== 'object') {
									return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
								}
								for (var key in shapeTypes) {
									var checker = shapeTypes[key];
									if (!checker) {
										continue;
									}
									var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
									if (error) {
										return error;
									}
								}
								return null;
							}
							return createChainableTypeChecker(validate);
						}

						function isNode(propValue) {
							switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
								case 'number':
								case 'string':
								case 'undefined':
									return true;
								case 'boolean':
									return !propValue;
								case 'object':
									if (Array.isArray(propValue)) {
										return propValue.every(isNode);
									}
									if (propValue === null || isValidElement(propValue)) {
										return true;
									}

									var iteratorFn = getIteratorFn(propValue);
									if (iteratorFn) {
										var iterator = iteratorFn.call(propValue);
										var step;
										if (iteratorFn !== propValue.entries) {
											while (!(step = iterator.next()).done) {
												if (!isNode(step.value)) {
													return false;
												}
											}
										} else {
											// Iterator will provide entry [k,v] tuples rather than values.
											while (!(step = iterator.next()).done) {
												var entry = step.value;
												if (entry) {
													if (!isNode(entry[1])) {
														return false;
													}
												}
											}
										}
									} else {
										return false;
									}

									return true;
								default:
									return false;
							}
						}

						function isSymbol(propType, propValue) {
							// Native Symbol.
							if (propType === 'symbol') {
								return true;
							}

							// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
							if (propValue['@@toStringTag'] === 'Symbol') {
								return true;
							}

							// Fallback for non-spec compliant Symbols which are polyfilled.
							if (typeof Symbol === 'function' && propValue instanceof Symbol) {
								return true;
							}

							return false;
						}

						// Equivalent of `typeof` but with special handling for array and regexp.
						function getPropType(propValue) {
							var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
							if (Array.isArray(propValue)) {
								return 'array';
							}
							if (propValue instanceof RegExp) {
								// Old webkits (at least until Android 4.0) return 'function' rather than
								// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
								// passes PropTypes.object.
								return 'object';
							}
							if (isSymbol(propType, propValue)) {
								return 'symbol';
							}
							return propType;
						}

						// This handles more types than `getPropType`. Only used for error messages.
						// See `createPrimitiveTypeChecker`.
						function getPreciseType(propValue) {
							var propType = getPropType(propValue);
							if (propType === 'object') {
								if (propValue instanceof Date) {
									return 'date';
								} else if (propValue instanceof RegExp) {
									return 'regexp';
								}
							}
							return propType;
						}

						// Returns class name of the object, if any.
						function getClassName(propValue) {
							if (!propValue.constructor || !propValue.constructor.name) {
								return ANONYMOUS;
							}
							return propValue.constructor.name;
						}

						ReactPropTypes.checkPropTypes = checkPropTypes;
						ReactPropTypes.PropTypes = ReactPropTypes;

						return ReactPropTypes;
					};

					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(4));

				/***/
			},
			/* 6 */
			/***/function (module, exports) {

				"use strict";

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * 
	    */

				function makeEmptyFunction(arg) {
					return function () {
						return arg;
					};
				}

				/**
	    * This function accepts and discards inputs; it has no side effects. This is
	    * primarily useful idiomatically for overridable function endpoints which
	    * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	    */
				var emptyFunction = function emptyFunction() {};

				emptyFunction.thatReturns = makeEmptyFunction;
				emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
				emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
				emptyFunction.thatReturnsNull = makeEmptyFunction(null);
				emptyFunction.thatReturnsThis = function () {
					return this;
				};
				emptyFunction.thatReturnsArgument = function (arg) {
					return arg;
				};

				module.exports = emptyFunction;

				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

					'use strict';

					/**
	     * Use invariant() to assert state which your program assumes to be true.
	     *
	     * Provide sprintf-style format (only %s is supported) and arguments
	     * to provide information about what broke and what you were
	     * expecting.
	     *
	     * The invariant message will be stripped in production, but the invariant
	     * will remain to ensure logic does not differ in production.
	     */

					var validateFormat = function validateFormat(format) {};

					if (process.env.NODE_ENV !== 'production') {
						validateFormat = function validateFormat(format) {
							if (format === undefined) {
								throw new Error('invariant requires an error message argument');
							}
						};
					}

					function invariant(condition, format, a, b, c, d, e, f) {
						validateFormat(format);

						if (!condition) {
							var error;
							if (format === undefined) {
								error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
							} else {
								var args = [a, b, c, d, e, f];
								var argIndex = 0;
								error = new Error(format.replace(/%s/g, function () {
									return args[argIndex++];
								}));
								error.name = 'Invariant Violation';
							}

							error.framesToPop = 1; // we don't care about invariant's own frame
							throw error;
						}
					}

					module.exports = invariant;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(4));

				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2014-2015, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

					'use strict';

					var emptyFunction = __webpack_require__(6);

					/**
	     * Similar to invariant but only logs a warning if the condition is not met.
	     * This can be used to log issues in development environments in critical
	     * paths. Removing the logging code for production environments will keep the
	     * same logic and follow the same code paths.
	     */

					var warning = emptyFunction;

					if (process.env.NODE_ENV !== 'production') {
						(function () {
							var printWarning = function printWarning(format) {
								for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									args[_key - 1] = arguments[_key];
								}

								var argIndex = 0;
								var message = 'Warning: ' + format.replace(/%s/g, function () {
									return args[argIndex++];
								});
								if (typeof console !== 'undefined') {
									console.error(message);
								}
								try {
									// --- Welcome to debugging React ---
									// This error was thrown as a convenience so that you can use this stack
									// to find the callsite that caused this warning to fire.
									throw new Error(message);
								} catch (x) {}
							};

							warning = function warning(condition, format) {
								if (format === undefined) {
									throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
								}

								if (format.indexOf('Failed Composite propType: ') === 0) {
									return; // Ignore CompositeComponent proptype check.
								}

								if (!condition) {
									for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
										args[_key2 - 2] = arguments[_key2];
									}

									printWarning.apply(undefined, [format].concat(args));
								}
							};
						})();
					}

					module.exports = warning;
					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(4));

				/***/
			},
			/* 9 */
			/***/function (module, exports) {

				/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */

				'use strict';

				var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

				module.exports = ReactPropTypesSecret;

				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {

				/* WEBPACK VAR INJECTION */(function (process) {
					/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */

					'use strict';

					if (process.env.NODE_ENV !== 'production') {
						var invariant = __webpack_require__(7);
						var warning = __webpack_require__(8);
						var ReactPropTypesSecret = __webpack_require__(9);
						var loggedTypeFailures = {};
					}

					/**
	     * Assert that the values match with the type specs.
	     * Error messages are memorized and will only be shown once.
	     *
	     * @param {object} typeSpecs Map of name to a ReactPropType
	     * @param {object} values Runtime values that need to be type-checked
	     * @param {string} location e.g. "prop", "context", "child context"
	     * @param {string} componentName Name of the component for error messages.
	     * @param {?Function} getStack Returns the component stack.
	     * @private
	     */
					function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
						if (process.env.NODE_ENV !== 'production') {
							for (var typeSpecName in typeSpecs) {
								if (typeSpecs.hasOwnProperty(typeSpecName)) {
									var error;
									// Prop type validation may throw. In case they do, we don't want to
									// fail the render phase where it didn't fail before. So we log it.
									// After these have been cleaned up, we'll let them throw.
									try {
										// This is intentionally an invariant that gets caught. It's the same
										// behavior as without this statement except with a better message.
										invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
										error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
									} catch (ex) {
										error = ex;
									}
									warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
									if (error instanceof Error && !(error.message in loggedTypeFailures)) {
										// Only monitor this failure once because there tends to be a lot of the
										// same error.
										loggedTypeFailures[error.message] = true;

										var stack = getStack ? getStack() : '';

										warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
									}
								}
							}
						}
					}

					module.exports = checkPropTypes;

					/* WEBPACK VAR INJECTION */
				}).call(exports, __webpack_require__(4));

				/***/
			},
			/* 11 */
			/***/function (module, exports, __webpack_require__) {

				/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    */

				'use strict';

				var emptyFunction = __webpack_require__(6);
				var invariant = __webpack_require__(7);

				module.exports = function () {
					// Important!
					// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
					function shim() {
						invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
					};
					shim.isRequired = shim;
					function getShim() {
						return shim;
					};
					var ReactPropTypes = {
						array: shim,
						bool: shim,
						func: shim,
						number: shim,
						object: shim,
						string: shim,
						symbol: shim,

						any: shim,
						arrayOf: getShim,
						element: shim,
						instanceOf: getShim,
						node: shim,
						objectOf: getShim,
						oneOf: getShim,
						oneOfType: getShim,
						shape: getShim
					};

					ReactPropTypes.checkPropTypes = emptyFunction;
					ReactPropTypes.PropTypes = ReactPropTypes;

					return ReactPropTypes;
				};

				/***/
			}])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ]);