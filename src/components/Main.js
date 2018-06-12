import React, { Component } from 'react';
import Monkey from "./Monkey";
import "../styles/Main.css";

let monkeyArray = [
  {
    id: "01",
    src: "assets/images/bluemonkey.jpg",
    name: "Blue Monkey"
  },
  {
    id: "02",
    src: "assets/images/capuchin.jpg",
    name: "Capuchin"
  },
  {
    id: "03",
    src: "assets/images/gibbon.jpg",
    name: "Gibbon"
  },
  {
    id: "04",
    src: "assets/images/macaque.jpg",
    name: "Macaque"
  },
  {
    id: "05",
    src: "assets/images/mandrill.jpg",
    name: "Mandrill"
  },
  {
    id: "06",
    src: "assets/images/marmoset.jpg",
    name: "Marmoset"
  },
  {
    id: "07",
    src: "assets/images/proboscis.jpg",
    name: "Proboscis"
  },
  {
    id: "08",
    src: "assets/images/rhesus.jpg",
    name: "Rhesus"
  },
  {
    id: "09",
    src: "assets/images/spidermonkey.jpg",
    name: "Spider Monkey"
  },
  {
    id: "10",
    src: "assets/images/squirrelmonkey.jpg",
    name: "Squirrel Monkey"
  },
  {
    id: "11",
    src: "assets/images/tamarin.jpg",
    name: "Tamarin"
  },
  {
    id: "12",
    src: "assets/images/vervet.jpg",
    name: "Vervet"
  },
]



export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shuffle: false
    }
  }

  shuffleMonkeys = (array) => {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  handleClick = () => {
    
    this.setState({shuffle: true})
    this.shuffleMonkeys(monkeyArray);
  }

  render() {
    return (
      <div>
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
    )
  }
}
