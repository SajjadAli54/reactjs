import React, { Component } from "react";

export class SignupClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
    };
  }
  render() {
    return (
      <>
        <h1>Register</h1>
        <form>
          <label>Name: </label>
          <input type="text" name="fullname" />
          <br /> <br />
          <label>Email: </label>
          <input type="email" name="email" />
        </form>
      </>
    );
  }
}

export default SignupClass;
