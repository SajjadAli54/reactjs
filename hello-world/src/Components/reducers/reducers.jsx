import React from "react";
import { useReducer } from "react";
import "./reducer.css";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        -
      </button>
    </>
  );
}

export default Counter;
