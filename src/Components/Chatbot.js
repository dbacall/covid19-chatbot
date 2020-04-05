import React, { Component } from "react";
import $ from "jquery";

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $.ajax({
      url: `https://api.landbot.io/v`,
      Authorization: "Token 20889e7afb06e0946b806b2a0a90a9bb0b9c5981",
      Type: "application/json",
      success: (data) => {
        console.log(data);
      },
    });
  }

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

export default Chatbot;
