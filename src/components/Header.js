import React, { Component } from 'react';
import Navbar from './Navbar';
import "../styles/Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="header">
        <Navbar
        score={this.props.score}
        highScore={this.props.highScore}
        />
      </header>
    )
  }
}
