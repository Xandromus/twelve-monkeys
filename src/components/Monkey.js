import React, { Component } from 'react';
import "../styles/Monkey.css";

export default class Monkey extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <img className="img-fluid monkey"
      src={this.props.src} 
      alt={this.props.name}
      onClick={this.props.handleIncrement}
      />
    )
  }
}
