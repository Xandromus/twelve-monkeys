// component and style imports
import React, { Component } from 'react';
import Monkey from "./Monkey";
import monkeyArray from "../monkeyArray.json";
import "../styles/Main.css";

// class for Main component
export default class Main extends Component {

  // method to shuffle the images, taking an array as an argument
  shuffleMonkeys = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // method to handle each click on an image, taking the id of the image as an argument
  handleClick = (id) => {

    // run the handlescore method passed as a prop from App, taking the id of the image as an argument
    this.props.handleScore(id);

    // run the shufflemonkeys method, taking the monkeyarray JSON array as an argument
    this.shuffleMonkeys(monkeyArray);
  }

  // render component, passing props to Monkey component
  render() {
    return (
      <div className="main">
        <div className="container-fluid middle">
          <div className="jumbotron">
            {/* <p>Click on all 12 monkeys to earn points,<span className="breakpoint"></span>but don't click on any monkey more than once!</p> */}
          </div>
          <div className="container-fluid monkey-pen">
            {monkeyArray.map(image =>
              // render each monkey image from the array, setting src, name, id, and key as props using the JSON, and passing animate and the handleClick and removeAnimation methods taken as props from App as props to the Monkey component
              <Monkey
                src={image.src}
                alt={image.name}
                id={image.id}
                key={image.id}
                animate={this.props.animate}
                handleClick={this.handleClick}
                removeAnimation={this.props.removeAnimation}
              />)}

          </div>
        </div>
      </div>
    )
  }
}
