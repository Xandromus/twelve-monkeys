import React, { Component } from 'react';
import Monkey from "./Monkey";
import monkeyArray from "../monkeyArray.json";
import "../styles/Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shuffle: false
    }
  }

  shuffleMonkeys = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  handleClick = (id) => {
    this.props.handleScore(id);
    this.setState({ shuffle: true })
    this.shuffleMonkeys(monkeyArray);
  }

  render() {
    return (
      <div>
        <div className="container-fluid middle">
          <div className="jumbotron">
            <p>Click on all 12 monkeys to earn points, but don't click on any monkey more than once!</p>
          </div>
          <div className="container monkey-pen">
            {monkeyArray.map(image =>
              <Monkey
                src={image.src}
                alt={image.name}
                id={image.id}
                key={image.id}
                handleClick={this.handleClick}
              />)}

          </div>
        </div>
      </div>
    )
  }
}
