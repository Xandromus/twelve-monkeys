// component and style imports
import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import StatusModal from './components/StatusModal';
import Footer from './components/Footer';
import './App.css';

// class for App component
class App extends Component {
  constructor(props) {
    super(props)

    // state for score, high score, ids of clicked images, modal boolean, modal messages, and animation class
    this.state = {
      score: 0,
      highScore: 0,
      alreadyClicked: [],
      openModal: false,
      message: "",
      bodyMessage: "",
      animate: " animate"
    }
  }

  // method to change state of scores and modal options. takes id of image as an argument
  handleScore = (id) => {

    // if the array of already clicked images includes the current image id, empty array, open the modal, and add losing message
    if (this.state.alreadyClicked.includes(id)) {
      this.setState({
        alreadyClicked: [],
        openModal: true,
        message: "You lost!",
        bodyMessage: "Quit monkeying around! Close to play again . . ."
      });
    } else {
      // otherwise add the id to the array of already clicked images
      this.setState({ alreadyClicked: [...this.state.alreadyClicked, id] });

      // variable to hold new score, equal to the state score plus one
      const newScore = this.state.score + 1;

      // set the state of the score to the value of the new score
      this.setState({
        score: newScore
      });

      // if the new score is greater than the current high score in state, set high score to the value of the new score
      if (newScore > this.state.highScore) {
        this.setState({ highScore: newScore });
      }

      // once the score equals 12 (user has clicked all images), empty array, open the modal, and add winning message
      if (newScore === 12) {
        this.setState({
          alreadyClicked: [],
          openModal: true,
          message: "You won!",
          bodyMessage: "That was more fun than a barrel of monkeys! Close to play again . . ."
        });
      }
    }
  }

  // method to render modal if the state of openmodal is set to true (conditional render). pass the messages and the reset modal method as props
  renderModal = () => {
    if (this.state.openModal) {
      return <StatusModal
        message={this.state.message}
        bodyMessage={this.state.bodyMessage}
        resetModal={this.resetModal}
      />
    }
  }

  // method to set openmodal to false (closing the modal) and resetting the score to zero. score's state is reset here so that user can view their score before closing modal regardless of win/loss outcome
  resetModal = () => {
    this.setState({ openModal: false, score: 0 });
  }

  // method to remove animation class after the images load the first time. animation must be removed because animation relies on timing, and this timing is disrupted when images shuffle
  removeAnimation = () => {
    this.setState({ animate: "" });
  }

  // render component, passing score and high score as props to header, and animate, handle score method, and remove animation method as props to main. renderModal method is called and will render if conditions are met
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
            animate={this.state.animate}
            removeAnimation={this.removeAnimation}
          />
          {this.renderModal()}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;