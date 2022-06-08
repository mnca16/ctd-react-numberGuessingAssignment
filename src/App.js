import React, { Component } from "react";
//import React from "react";
import NumberGuessingGame from "./NumberGuessingGame";
import "./App.css";

//Challenge for this assigment:
//Convert GuessControl and NumberGuessingGame class component
//into functional components
//1. [] GuessControl
//2. [] NumberGuessingame

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberGuessingGame />
      </div>
    );
  }
}

export default App;
