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

const Tipsy = React.createClass({

  propTypes: {

    /**
     * Use this property to render your component inside the `Tipsy`.
     *
     * **NOTE** Tipsy only supports tooltip for a single component/
     * DOM element.
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
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  },

  getDefaultProps() {
    return {
      placement: 'top'
    };
  },

  componentWillMount() {
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

  componentDidMount() {
    // get the top-level DOM element for that this component is wrapped around.
    this.tipsy.target = ReactDOM.findDOMNode(this);
  },

  componentDidUpdate() {
    if (this.tipsy.show) {
      const show = this.show;
      setTimeout(() => show(true), 1); // defer to allow for child component to render
    }
  },

  componentWillUnmount() {
    // unmount element so we can trigger React component lifecycle methods.
    const unmounted = ReactDOM.unmountComponentAtNode(this.tipsy.portal);

    if (unmounted) {
      // remove portal from DOM.
      document.body.removeChild(this.tipsy.portal);
    }
  },

  render() {
    const children = React.Children.only(this.props.children);
    const {
      onBlur,
      onFocus,
      onMouseOver,
      onMouseOut
    } = children.props;
    const props = {
      onBlur: this._onBlur.bind(this, onBlur),
      onFocus: this._onFocus.bind(this, onFocus),
      onMouseOver: this._onMouseOver.bind(this, onMouseOver),
      onMouseOut: this._onMouseOut.bind(this, onMouseOut)
    };

    return React.cloneElement(children, props);
  },

  renderTipsy() {
    // render tooltip
    const { content, placement } = this.props;
    const className = 'Tipsy in ' + placement;

    return (
      <div className={className} role="tooltip">
        <div className="Tipsy-arrow"></div>
        <div className="Tipsy-inner">{content}</div>
      </div>
    );
  },

  show(forceUpdate=false) {
    // return early if tooltip is already shown or "forceUpdate" is false
    if (!forceUpdate && this.tipsy.show) return;

    // render tooltip
    const tooltip = this.renderTipsy();

    // mount the component
    document.body.appendChild(this.tipsy.portal);

    // render element
    this.tipsy.el = ReactDOM.render(tooltip, this.tipsy.portal);

    // update position
    this.updatePosition();

    // flip `show` flag
    this.tipsy.show = true;
  },

  hide() {
    // return early if tooltip is not visible
    if (!this.tipsy.show) return;

    // unmount the component
    ReactDOM.unmountComponentAtNode(this.tipsy.portal);

    // remove portal
    document.body.removeChild(this.tipsy.portal);

    // flip `show` flag
    this.tipsy.show = false;
  },

  updatePosition() {
    const { target, el } = this.tipsy;
    const { placement } = this.props;
    const targetOffset = offset(target);

    let left = targetOffset.left;
    let top = targetOffset.top;

    if (placement == 'top') {
      top = top - el.offsetHeight;
      left = left + (target.offsetWidth/2 - el.offsetWidth/2);
    } else if (placement == 'bottom') {
      top = top + target.offsetHeight;
      left = left + (target.offsetWidth/2 - el.offsetWidth/2);
    } else if (placement == 'right') {
      top = top + (target.offsetHeight/2 - el.offsetHeight/2);
      left = left + target.offsetWidth;
    } else { // placement == 'left'
      top = top + (target.offsetHeight/2 - el.offsetHeight/2);
      left = left - el.offsetWidth;
    }

    el.style.top = top + 'px';
    el.style.left = left + 'px';
  },

  _onBlur(handler, e) {
    this.hide();

    if (handler) handler(e);
  },

  _onFocus(handler, e) {
    this.show();

    if (handler) handler(e);
  },

  _onMouseOver(handler, e) {
    this.show();

    if (handler) handler(e);
  },

  _onMouseOut(handler, e) {
    this.hide();

    if (handler) handler(e);
  }

});

function offset(el) {
  let rect = el.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

Tipsy.version = '0.3.0';

export default Tipsy;