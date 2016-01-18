var React = require('react');
var ReactDOM = require('react-dom');
var ReactTipsy = require('../../react-tipsy');

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

        <table style={{width: '100%'}}>
          <tbody>
            <tr>
              <td>
                <ReactTipsy
                  content="Tooltip on left"
                  placement="left"
                >
                  <button type="button">Left</button>
                </ReactTipsy>
              </td>
              <td>
                <ReactTipsy
                  content={(
                    <h4>This is actually an H4 element!</h4>
                  )}
                  placement="top"
                >
                  <button type="button">Top ...;)</button>
                </ReactTipsy>
              </td>
              <td>
                <ReactTipsy
                  content="Tooltip on right"
                  placement="right"
                >
                  <button type="button">Right</button>
                </ReactTipsy>
              </td>
              <td>
                <ReactTipsy content="Tooltip on bottom" placement="bottom">
                  <button type="button">Bottom</button>
                </ReactTipsy>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{margin: '25px auto', paddingTop: 50, textAlign: 'center'}}>
          {showBox &&
            <h2>Counter: {counter}</h2>
          }
          <ReactTipsy
            ref="tooltip"
            content="Showed this tooltip via this.refs.tooltip.show()"
            placement="right"
          >
            <button type="button">Watch the tooltip update position automatically!</button>
          </ReactTipsy>
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

ReactDOM.render(<App />, document.getElementById('app'));