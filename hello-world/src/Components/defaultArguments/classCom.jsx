import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return (
      <h1>
        {`Name: ${this.props.name}, Age: ${this.props.age}, Married: ${this.props.isMarried}`}
      </h1>
    );
  }
}

ClassComponent.defaultProps = {
  name: "Default",
  age: 0,
  isMarried: false,
};

export default ClassComponent;
