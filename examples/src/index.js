var React = require('react');
var ReactDOM = require('react-dom');
var Tipsy = require('../../dist/react-tipsy');

var App = React.createClass({

  getInitialState: function() {
    return {
      counter: 0,
      showBox: true
    };
  },

  componentDidMount: function() {
    this.timer = setInterval(this.incCounterAndToggleBox, 3000);
    this.refs.tooltip.show();
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
  },

  render: function() {
    var counter = this.state.counter;
    var showBox = this.state.showBox;

    return (
      <div className="react-tipsy-demo">
        <h3>react-tipsy</h3>

        <div style={{margin: '0 100px'}}>
          <table style={{width: '100%'}}>
            <tbody>
              <tr>
                <td>
                  <Tipsy
                    content="Tooltip on left"
                    placement="left"
                  >
                    <button type="button">Left</button>
                  </Tipsy>
                </td>
                <td>
                  <Tipsy
                    content={(
                      <h4>This is actually an H4 element!</h4>
                    )}
                    placement="top"
                  >
                    <button type="button">Top ...;)</button>
                  </Tipsy>
                </td>
                <td>
                  <Tipsy
                    content="Tooltip on right"
                    placement="right"
                  >
                    <button type="button">Right</button>
                  </Tipsy>
                </td>
                <td>
                  <Tipsy content="Tooltip on bottom" placement="bottom">
                    <button type="button">Bottom</button>
                  </Tipsy>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{margin: '25px auto', paddingTop: 50, textAlign: 'center'}}>
          {showBox &&
            <h2>Counter: {counter}</h2>
          }
          <Tipsy
            ref="tooltip"
            content="Showed this tooltip via this.refs.tooltip.show()"
            placement="right"
          >
            <button type="button">Watch the tooltip update position automatically!</button>
          </Tipsy>
        </div>

        <div style={{margin: '25px auto'}}>
          What about dealing with tooltips wrapping a deeply nested DOM node?
          <br/>
          <br/>
          You should use <code>event.stopPropagation()</code> on "onFocus", "onMouseOver" and "onMouseOut" to prevent bubbling to the parent and triggering Tipsy.. See the following example:
          <br/>
          <Tipsy content="Hello, world!">
            <ul style={{display: 'inline-block'}}>
              <li>
                If you hover over me, you will see the tooltip!
                <ul onFocus={stopPropagation} onMouseOver={stopPropagation} onMouseOut={stopPropagation}>
                  <li>
                    But try hovering over me and see if it shows up or not!
                  </li>
                </ul>
              </li>
            </ul>
          </Tipsy>
        </div>
      </div>
    );
  },

  incCounterAndToggleBox: function() {
    this.setState(function(state) {
      return {
        counter: state.counter + 1,
        showBox: !state.showBox
      };
    });
  }

});

function stopPropagation(e) {
  e.stopPropagation();
}

ReactDOM.render(<App />, document.getElementById('app'));