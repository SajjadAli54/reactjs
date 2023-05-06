/**
 * @React.js Class based component
 *
 *  - Class based component is a ES6 class which extends React.Component
 *  - It has a render() method which returns the XML/JSX
 *  - It has a state object which is used to store the data
 *  - It has a constructor() method which is used to initialize the state
 *  - It has a setState() method which is used to update the state
 *  - It has a props object which is used to access the data passed from parent component
 *
 * Lifecycle methods
 *  - constructor()
 *    - It is used to initialize the state
 *    - It is used to bind the event handlers
 *
 *  - render()
 *    - It is used to return the XML/JSX
 *    - It is a mandatory method
 *    - It is called multiple times whenever there is a change in state or props object
 *
 *  - componentDidMount()
 *    - It is called only once after the first render()
 *    - It is used to make AJAX calls to fetch the data from server
 *    - It is used to update the state based on the props object received from parent component
 *    - It is used to interact with DOM or third party libraries like jQuery, D3.js, etc.
 *    - It is used to set timers using setTimeout() or setInterval()
 *
 *  - componentDidUpdate()
 *    - It is called after every render() method
 *    - It is used to make AJAX calls to fetch the data from server
 *    - It is used to update the state based on the props object received from parent component
 */

import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <>
        <h1>Counter</h1>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </>
    );
  }
}

export default CounterClass;
