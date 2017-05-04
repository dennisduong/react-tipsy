import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * Inspired by Bootstrap's jQuery tooltip plugin, which drew its inspiration
 * from the jQuery.tipsy plugin written by Jason Frame, Tipsy is a
 * simple component that allows you to easily add tooltips to any React
 * component.
 *
 * Like bootstrap's tooltip plugin, Tipsy does not rely on images.
 */

export default class Tipsy extends Component {

  static statics: {
    version: '0.4.2'
  }

  componentWillMount() {
    // ref. to the tipsy React element.
    this.tipsy = null;
    // ref. to the "portal" DOM element
    this.portal = document.createElement('div');
    // flag used to update position if child component was updated
    this.isVisible = false;
  }

  componentDidUpdate(prevProps) {
    // if content and/or placement prop has changed, and tooltip is visible, forceUpdate the tooltip.
    if ((this.props.content != prevProps.content || this.props.placement != prevProps.placement) && this.isVisible) {
      this.show(true);
    }
  }

  componentWillUnmount() {
    this.destroy();
  }

  render() {
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
  }

  // Public API
  // ----------

  destroy() {
    // unmount element so we can trigger React component lifecycle methods.
    const unmounted = ReactDOM.unmountComponentAtNode(this.portal);

    if (unmounted) document.body.removeChild(this.portal); // remove portal from DOM.

    this.isVisible = false;
    this.tipsy = null;
  }

  hide() {
    // return early if tooltip is not visible
    if (!this.isVisible) return;

    // unmount the component
    ReactDOM.unmountComponentAtNode(this.portal);

    // remove portal
    document.body.removeChild(this.portal);

    // flip `show` flag
    this.isVisible = false;
  }

  show(forceUpdate) {
    // return early if tooltip is already visible or "forceUpdate" is false
    if (!forceUpdate && this.isVisible) return;

    // render tooltip
    const element = (
      <div className={`Tipsy in ${this.props.placement}`} role="tooltip">
        <div className="Tipsy-arrow"></div>
        <div className="Tipsy-inner">{this.props.content}</div>
      </div>
    );

    // mount the component
    document.body.appendChild(this.portal);

    // render element
    this.tipsy = ReactDOM.unstable_renderSubtreeIntoContainer(this, element, this.portal);

    // update position
    this.updatePosition();

    // flip `show` flag
    this.isVisible = true;
  }

  toggle() {
    if (this.isVisible) this.hide();
    else this.show();
  }

  updatePosition() {
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
  }

  // Private API
  // -----------

  _hide(callback, e) {
    this.hide();

    if (callback) return callback(e);
  }

  _toggle(callback, e) {
    this.toggle();

    if (callback) return callback(e);
  }

  _show(callback, e) {
    this.show();

    if (callback) return callback(e);
  }

};

Tipsy.defaultProps = {
  placement: 'top',
  trigger: 'hover focus touch'
}

Tipsy.propTypes = {

    /**
     * Use this property to render your component inside the `Tipsy`.
     */
    children: PropTypes.element.isRequired,

    /**
     * The contents to render. It's assumed to be a string but if you wish,
     * you may pass in any mountable "node".
     */
    content: PropTypes.node.isRequired,

    /**
     * Specify where to place the tooltip.
     *
     * defaults to 'top'
     */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * How tooltip is triggered - click | hover | focus | touch | manual.
     *
     * You may pass multiple triggers; separate them with a space. Pass an string with value "manual" to manually trigger the tooltip.
     */
    trigger: PropTypes.string

  }

// IE8+ equiv. of $.fn.offset
function offset(el) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}
