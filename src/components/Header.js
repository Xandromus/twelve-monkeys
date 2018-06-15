// component and style imports
import React, { Component } from 'react';
import Navbar from './Navbar';
import "../styles/Header.css";

// class for Header component
export default class Header extends Component {

  // header takes score and high score as props from app and passes them as props to navbar component
  render() {
    return (
      <header className="header sticky-top">
        <Navbar
          score={this.props.score}
          highScore={this.props.highScore}
        />
      </header>
    )
  }
}
