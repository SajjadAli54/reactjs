import React, { Component } from "react";

export class SignupClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      isMarried: false,
      gender: "",
      city: "",
      languages: [],
    };
  }

  handleChange = (e) => {
    let { name, type, value, checked, selectedOptions } = e.target;

    if (type === "checkbox") {
      value = checked;
    } else if (type === "select-multiple") {
      value = Array.from(selectedOptions, (option) => option.value);
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <h1>Signup</h1>
        <br />
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="isMarried">Married</label>
            <input
              id="isMarried"
              type="checkbox"
              name="isMarried"
              checked={this.state.isMarried}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Gender</label>
            <div>
              <input
                id="male"
                type="radio"
                name="gender"
                value="Male"
                onChange={this.handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                id="female"
                type="radio"
                name="gender"
                value="Female"
                onChange={this.handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div>
            <label htmlFor="city">City</label>
            <select
              id="city"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>

          <div>
            <label htmlFor="languages">Languages</label>
            <select
              id="languages"
              name="languages"
              value={this.state.languages}
              onChange={this.handleChange}
              multiple
            >
              <option value="Sindhi">Sindhi</option>
              <option value="Urdu">Urdu</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Kannada">Kannada</option>
              <option value="Tamil">Tamil</option>
            </select>
          </div>

          <button type="submit">Submit</button>
          <p>{JSON.stringify(this.state)}</p>
        </form>
      </>
    );
  }
}

export default SignupClass;
