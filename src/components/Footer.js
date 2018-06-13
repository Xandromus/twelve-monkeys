import React, { Component } from 'react';
import "../styles/Footer.css";

let year = new Date().getFullYear();

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; {year} Xander Rapstine</p>
        
      </footer>
    )
  }
}
