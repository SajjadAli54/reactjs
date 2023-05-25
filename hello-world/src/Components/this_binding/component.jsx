import React, { Component } from "react";

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: "Click a button",
    };

    this.handleButtonClickA = this.handleButtonClickA.bind(this);
  }

  handleButtonClickA() {
    this.setState({ clickedButton: "Button A clicked" });
  }

  handleButtonClickB() {
    this.setState({ clickedButton: "Button B clicked" });
  }

  handleButtonClickC = () => {
    this.setState({ clickedButton: "Button C clicked" });
  };

  handleButtonClickD() {
    this.setState({ clickedButton: "Button D clicked" });
  }
  render() {
    return (
      <>
        <h1>{this.state.clickedButton}</h1>
        <button onClick={this.handleButtonClickA}>Button A</button>
        <button onClick={this.handleButtonClickB.bind(this)}>Button B</button>
        <button onClick={this.handleButtonClickC}>Button C</button>
        <button onClick={() => this.handleButtonClickD()}>Button D</button>
      </>
    );
  }
}

export default Component;
