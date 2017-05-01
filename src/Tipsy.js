import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Inspired by Bootstrap's jQuery tooltip plugin, which drew its inspiration
 * from the jQuery.tipsy plugin written by Jason Frame, Tipsy is a
 * simple component that allows you to easily add tooltips to any React
 * component.
 *
 * Like bootstrap's tooltip plugin, Tipsy does not rely on images.
 */
const DefaultContainer = React.createClass({
  propTypes: {
    content: React.PropTypes.node.isRequired,
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  },
  render: function () {
    return (
      <div className={`Tipsy in ${this.props.placement}`} role="tooltip" >
        <div className="Tipsy-arrow" />
        <div className="Tipsy-inner" >{this.props.children}</div>
      </div>)
  }
});

const Tipsy = React.createClass({
  statics: {
    version: '0.4.1'
  },

  propTypes: {

    /**
     * Use this property to render your component inside the `Tipsy`.
     */
    children: React.PropTypes.element.isRequired,

    /**
     * The contents to render. It's assumed to be a string but if you wish,
     * you may pass in any mountable "node".
     */
    content: React.PropTypes.node.isRequired,

    /**
     * Specify where to place the tooltip.
     *
     * defaults to 'top'
     */
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * How tooltip is triggered - click | hover | focus | touch | manual.
     *
     * You may pass multiple triggers; separate them with a space. Pass an string with value "manual" to manually trigger the tooltip.
     */
    trigger: React.PropTypes.string,

    /**
     * Specify an override Tipsy Container.
     *
     * Needs to be a React.Class as unstable_renderSubtreeIntoContainer doesn't bind into Stateless components
     */
    container: React.PropTypes.element,

  },

  getDefaultProps: function() {
    return {
      placement: 'top',
      trigger: 'hover focus touch',
      container: DefaultContainer,
    };
  },

  componentWillMount: function () {
    // ref. to the tipsy React element.
    this.tipsy = null;
    // ref. to the "portal" DOM element
    this.portal = document.createElement('div');
    // flag used to update position if child component was updated
    this.isVisible = false;
  },

  componentDidUpdate: function (prevProps) {
    // if content and/or placement prop has changed, and tooltip is visible, forceUpdate the tooltip.
    if ((this.props.content != prevProps.content || this.props.placement != prevProps.placement) && this.isVisible) {
      this.show(true);
    }
  },

  componentWillUnmount: function () {
    this.destroy();
  },

  render: function () {
    const children = React.Children.only(this.props.children);
    const {
      onBlur,
      onClick,
      onFocus,
      onMouseOut,
      onMouseOver,
      onTouchEnd,
      onTouchStart
    } = children.props;
    const props = {};
    const triggers = this.props.trigger.split(' ');

    let i, trigger;
    for (i = triggers.length; i--;) {
      trigger = triggers[i]

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

    return React.cloneElement(children, props);
  },

  // Public API
  // ----------

  destroy: function () {
    // unmount element so we can trigger React component lifecycle methods.
    const unmounted = ReactDOM.unmountComponentAtNode(this.portal);

    if (unmounted) document.body.removeChild(this.portal); // remove portal from DOM.

    this.isVisible = false;
    this.tipsy = null;
  },

  hide: function () {
    // return early if tooltip is not visible
    if (!this.isVisible) return;

    // unmount the component
    ReactDOM.unmountComponentAtNode(this.portal);

    // remove portal
    document.body.removeChild(this.portal);

    // flip `show` flag
    this.isVisible = false;
  },

  show: function (forceUpdate) {
    // return early if tooltip is already visible or "forceUpdate" is false
    if (!forceUpdate && this.isVisible) return;

    // render tooltip
    const Element = this.props.container;
    const element = <Element placement={this.props.placement} >{this.props.content}</Element>;

    // mount the component
    document.body.appendChild(this.portal);

    // render element
    this.tipsy = ReactDOM.unstable_renderSubtreeIntoContainer(this, element, this.portal);

    // update position
    this.updatePosition();

    // flip `show` flag
    this.isVisible = true;
  },

  toggle: function() {
    if (this.isVisible) this.hide();
    else this.show();
  },

  updatePosition: function() {
    if (!this.tipsy) return;
    const el = ReactDOM.findDOMNode(this);
    const tipsy = ReactDOM.findDOMNode(this.tipsy);
    const placement = this.props.placement;

    let { left, top } = offset(el);
    if (placement == 'top') {
      top = top - tipsy.offsetHeight;
      left = left + (el.offsetWidth/2 - tipsy.offsetWidth/2);
    } else if (placement == 'bottom') {
      top = top + el.offsetHeight;
      left = left + (el.offsetWidth/2 - tipsy.offsetWidth/2);
    } else if (placement == 'right') {
      top = top + (el.offsetHeight/2 - tipsy.offsetHeight/2);
      left = left + el.offsetWidth;
    } else { // placement == 'left'
      top = top + (el.offsetHeight/2 - tipsy.offsetHeight/2);
      left = left - tipsy.offsetWidth;
    }

    tipsy.style.top = top + 'px';
    tipsy.style.left = left + 'px';
  },

  // Private API
  // -----------

  _hide: function (callback, e) {
    this.hide();

    if (callback) return callback(e);
  },

  _toggle: function (callback, e) {
    this.toggle();

    if (callback) return callback(e);
  },

  _show: function (callback, e) {
    this.show();

    if (callback) return callback(e);
  }

});

// IE8+ equiv. of $.fn.offset
function offset(el) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

export default Tipsy;
