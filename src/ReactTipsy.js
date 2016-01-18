import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Inspired by Bootstrap's jQuery tooltip plugin, which drew its inspiration
 * from the jQuery.tipsy plugin written by Jason Frame, react-tipsy is a
 * simple component that allows you to easily add tooltips to any React
 * component.
 *
 * Like bootstrap's tooltip plugin, react-tipsy does not rely on images.
 */

// **NOTE** we do not need jQuery for this library but if its available, we
// will use it for mouse events in case users want to support IE < 9
const $ = window.$ || window.jQuery;

function offset(el) {
  if ($) return $(el).offset();

  // IE 8+ only
  let rect = el.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

const ReactTipsy = React.createClass({

  propTypes: {

    /**
     * Use this property to render your component inside the `ReactTipsy`.
     *
     * **NOTE** ReactTipsy only supports tooltip for a single component/
     * DOM element.
     */
    children: React.PropTypes.element.isRequired,

    /**
     * The contents to render. It's assumed to be a string but if you wish,
     * you may pass in any mountable "node".
     */
    content: React.PropTypes.node,

    /**
     * Specify where to place the tooltip.
     *
     * defaults to 'top'
     */
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])

  },

  getDefaultProps() {
    return {
      content: '',
      placement: 'bottom'
    }
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
    const target = this.tipsy.target = ReactDOM.findDOMNode(this);

    // setup events -- using jQuery if available otherwise falls back to
    // browser `addEventListener`
    if ($) {
      $(target)
        .on('mouseenter', this.show)
        .on('mouseleave', this.hide);
    } else {
      target.addEventListener('mouseenter', this.show);
      target.addEventListener('mouseleave', this.hide);
    }
  },

  componentDidUpdate() {
    if (this.tipsy.show) this.updatePosition();
  },

  componentWillUnmount() {
    const { target } = this.tipsy;

    if ($) {
      $(target).off();
    } else {
      target.removeEventListener('mouseenter', this.show);
      target.removeEventListener('mouseleave', this.hide);
    }

    // unmount element so we can trigger React component lifecycle methods.
    const unmounted = ReactDOM.unmountComponentAtNode(this.tipsy.portal);

    if (unmounted) {
      // remove portal from DOM.
      document.body.removeChild(this.tipsy.portal);
    }
  },

  render() {
    return this.props.children;
  },

  renderTipsy() {
    // render tooltip
    const { placement } = this.props;
    const className = 'react-tipsy in ' + placement;

    return (
      <div className={className} role="tooltip" style={{display: ''}}>
        <div className="react-tipsy-arrow"></div>
        <div className="react-tipsy-inner">{this.props.content}</div>
      </div>
    );
  },

  show() {
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
  }

});

ReactTipsy.version = '0.1.1';

export default ReactTipsy;