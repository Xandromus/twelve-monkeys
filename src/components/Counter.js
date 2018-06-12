import React, { Component } from 'react';

export default class Counter extends Component {

  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <span> {this.state.count}
      </span>
    )
  }
}
