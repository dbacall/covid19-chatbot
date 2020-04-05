import React, { Component } from "react";
import "./App.css";
import Chatbot from "./Components/Chatbot";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Chatbot</h1>
        <Chatbot />
      </React.Fragment>
    );
  }
}

export default App;
