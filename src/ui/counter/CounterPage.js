import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { increment } from 'redux/modules/counter';

@connect(
  state => ({
    counter: state.counter
  }),
  { increment }
)
export default class CounterPage extends Component {

  static propTypes = {
    counter: PropTypes.object,
    increment: PropTypes.func
  }

  handleIncrement() {
    this.props.increment();
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Counter Page</h1>
        <p>Current Count: {counter.get('count')}</p>
        <Button bsStyle="info" onClick={this.handleIncrement.bind(this)}>Increment Counter</Button>
      </div>
    );
  }
}
