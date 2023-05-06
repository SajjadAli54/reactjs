import React, { Component } from "react";

export class SignupClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      gender: "",
      about: "",
      male: false,
      TS: false,
      react: false,
      typescript: false,
      age: 22,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Event Synthesize object: event
    let { name, value, type, checked } = event.target;
    if (type === "checkbox") value = checked;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <h1>Register</h1>
        <p>{JSON.stringify(this.state)}</p>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            onChange={this.handleChange}
          />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label>About me</label>
          <textarea
            type="text"
            name="about"
            value={this.state.about}
            onChange={this.handleChange}
          />

          <label>Skills</label>
          <label>React:</label>
          <input
            type="checkbox"
            name="react"
            checked={this.state.react}
            onChange={this.handleChange}
          />
          <label>Typescript:</label>
          <input
            type="checkbox"
            name="typescript"
            checked={this.state.typescript}
            onChange={this.handleChange}
          />

          <label>Gender</label>
          <input type="radio" name="male" value="Male" />
          <label>Male</label>
          <input type="radio" name="male" value="female" />
          <label>Female</label>
        </form>
      </>
    );
  }
}

export default SignupClass;
