import React, { Component } from 'react';
import "../styles/Monkey.css";

export default class Monkey extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <img className="img-fluid monkey"
      id={"monkey" + this.props.id}
      src={this.props.src} 
      alt={this.props.name}
      onClick={() => this.props.handleClick(this.props.id)}
      />
    )
  }
}
