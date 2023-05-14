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
      react: false,
      typescript: false,
      language: ["urdu", "english"],
      country: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Event Synthesize object: event
    let { name, value, type, checked, selectedOptions } = event.target;
    if (type === "checkbox") value = checked;
    else if (name === "language")
      value = Array.from(selectedOptions, (option) => option.value);
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

          <label>Language</label>
          <select
            name="language"
            value={this.state.language}
            onChange={this.handleChange}
            multiple
          >
            <option value="urdu">Urdu</option>
            <option value="english">English</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="japanese">Japanese</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default SignupClass;
