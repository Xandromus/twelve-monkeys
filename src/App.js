import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';
import StatusModal from './components/StatusModal';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      highScore: 0,
      alreadyClicked: [],
      openModal: false,
      message: "",
      bodyMessage: ""
    }
  }

  handleScore = (id) => {
    if (this.state.alreadyClicked.includes(id)) {
      this.setState({
        score: 0,
        alreadyClicked: [],
        openModal: true,
        message: "You lost!",
        bodyMessage: "Quit monkeying around! Close to play again . . ."
      });
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
        this.setState({
          score: 0,
          alreadyClicked: [],
          openModal: true,
          message: "You won!",
          bodyMessage: "That was more fun than a barrel of monkeys! Close to play again . . ."
        });
      }
    }
  }

  renderModal = () => {
    if (this.state.openModal) {
      return <StatusModal
      message={this.state.message}
      bodyMessage={this.state.bodyMessage}
      resetModal={this.resetModal}
    />
    } 
  }

  resetModal = () => {
      this.setState({openModal: false});
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header
            score={this.state.score}
            highScore={this.state.highScore}
          />
          <Main
            handleScore={this.handleScore}
          />
          {this.renderModal()}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
