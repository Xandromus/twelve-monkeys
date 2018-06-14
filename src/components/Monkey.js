import React, { Component } from 'react';
import "../styles/Monkey.css";

export default class Monkey extends Component {

  render() {
    return (
      <img className={"img-fluid monkey" + this.props.animate}
      id={"monkey" + this.props.id}
      src={this.props.src} 
      alt={this.props.name}
      onClick={() => { this.props.removeAnimation(); this.props.handleClick(this.props.id); } }
      />
    )
  }
}
