import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      highScore: 0,
      alreadyClicked: []
    }
  }

  handleScore = (id) => {
    if (this.state.alreadyClicked.includes(id)) {
      alert("you lose");
      this.setState({ score: 0 });
      this.setState({ alreadyClicked: [] });
    } else {
      this.setState({ alreadyClicked: [...this.state.alreadyClicked, id] });
      const newScore = this.state.score + 1;
      this.setState({
        score: newScore
      });
      if (newScore >= this.state.highScore) {
        this.setState({ highScore: newScore });
      }
      if (newScore === 12) {
        alert("you win");
        this.setState({ score: 0 });
        this.setState({ alreadyClicked: [] });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Main
          handleScore={this.handleScore}
        />
      </div>
    );
  }
}

export default App;
