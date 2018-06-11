import React, { Component } from 'react';
import "../styles/Main.css";

export default class Main extends Component {
  render() {
    return (
      <div>
      <div className="jumbotron">
        <p>Click on all 12 monkeys to earn points, but don't click on any monkey more than once!</p>
      </div>
      <div className="container monkey-pen">

      </div>
      </div>
    )
  }
}
