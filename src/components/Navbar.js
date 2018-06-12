import React, { Component } from 'react';
import "../styles/Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
     
     <nav>
        <div className="row">
    
          <div className="nav-item col-4">
              <p className="navbar-brand my-auto">12 Monkeys</p>
            </div>
            <div className="nav-item col-4 my-auto">
              Click a monkey to begin!
            </div>
            <div className="nav-item col-4 my-auto">
              Your score : {this.props.score} | High score : {this.props.highScore}
            </div>
        
          
        </div>
    </nav>
      </div>
    )
  }
}
