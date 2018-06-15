// component and style imports
import React, { Component } from 'react';
import "../styles/Monkey.css";

// class for Monkey component
export default class Monkey extends Component {

  // render component, using the id, src, and alt passed as props from Main and animate passed as a prop from App and Main. onClick fires both the removeAnimation and handleClick methods passed as props from App and/or Main
  render() {
    return (
      <img className={"img-fluid monkey" + this.props.animate}
        id={"monkey" + this.props.id}
        src={this.props.src}
        alt={this.props.name}
        onClick={() => { this.props.removeAnimation(); this.props.handleClick(this.props.id); }}
      />
    )
  }
}
