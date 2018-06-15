// component and style imports
import React, { Component } from 'react';
import "../styles/Footer.css";

// variable for current year
let year = new Date().getFullYear();

// class for Footer component
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; {year} Xander Rapstine</p>
      </footer>
    )
  }
}
