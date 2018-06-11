import React, { Component } from 'react';

export default class Monkey extends Component {
  render() {
    return (
      <div className="monkey">
        { this.props.children }
      </div>
    )
  }
}
