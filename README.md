# react-tipsy

A React component that allows you to easily create simple tooltips.

Inspired by [Bootstrap's 3.x jQuery tooltips](http://getbootstrap.com/javascript/#tooltips), 
which drew its inspiration from the jQuery.tipsy plugin written by Jason Frame, `react-tipsy` is a
simple React component that allows you to easily add tooltips to any React element.

Like bootstrap's tooltip plugin, react-tipsy does not rely on images.

## Installation

The easiest way to use `react-tipsy` is to install it from NPM and include it in your React build process (using [Webpack](https://webpack.github.io/), etc).

```bash
npm install react-tipsy --save
```

You can also use the standalone build by including `dist/react-alerts.js` and `dist/react-alerts.css` in your page. If you do this, make sure you already included the following dependencies:

* [React](http://facebook.github.io/react/)
* [ReactDOM](https://www.npmjs.com/package/react-dom)

## Usage

`react-tipsy` is a React component that wraps a single React element.

```
var Tipsy = require('react-tipsy');

<Tipsy content="Hello, world!" position="bottom">
    <h1>Welcome!</h1>
</Tipsy>
```

The `content` property can be a any mountable type but this is most likely a string.
The `position` property is where to position the tooltip. Valid options are: `top`, `right`, `bottom` and `left`.

`react-tipsy` will position the tooltip based on the relative position of the DOM element of the wrapped React Element.

## CSS stylesheet

I've built a default stylesheet, `dist/react-tipsy.css`, that you may include in your sites/projects. 

You can customize the styles by modifying the stylesheet itself or by using [less](http://lesscss.org/) and modifying the less files in the `/less` directory.

## How does the tooltip get rendered exactly?

`react-tipsy` generates a "portal" DOM element in which it renders the actual tooltip content into. Using React's component lifecycle, we can ensure that the tooltip is removed from the DOM as well as the "portal" container.

When a user hovers over the wrapped React element, the tooltip will be displayed. And when the user hovers out, the tooltip will be hidden.

When it comes to users on mobile/tablet devices where mouse events are not present, then the tooltip will be visible when the wrapped React element has focus and hidden when burred.

## Examples

* [Showcase][1]

[1]: http://dennisduong.github.io/react-tipsy/examples/
