import React, { Component } from "react";

export class SignupClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
    };
  }

  handleChange = (event) => {
    // Event Synthesize object: event
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      (prevState) => {
        console.log(prevState.fullname);
      }
    );
  };

  render() {
    return (
      <>
        <h1>Register</h1>
        <form>
          <label>Name: </label>
          <input type="text" name="fullname" onChange={this.handleChange} />
          <br /> <br />
          <label>Email: </label>
          <input type="email" name="email" />
        </form>
      </>
    );
  }
}

export default SignupClass;
