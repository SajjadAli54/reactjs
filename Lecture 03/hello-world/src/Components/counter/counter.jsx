import React, { useState } from "react";

/**
 * React Hooks
 *
 * useState
 *  - useState is a Hook that lets you add React state to function components.
 *  - useState returns a pair: the current state value and a function that lets you update it.
 *  - useState is similar to this.state in a class, except it doesn’t merge the old and new state together.
 *  - useState is a new way to use the exact same capabilities that this.state provides in a class.
 *  - useState is a Hook (we’ll talk about what this means in a moment). We call it inside a function component to add some local state to it.
 *  - React will preserve this state between re-renders.
 *  - It must not be called conditionally because that would prevent React from tracking it.
 *  - It also must not be called nested in another function because that would make it a local variable that would be re-initialized on every render.
 *  - Hooks don’t work inside classes. But you can use them instead of writing classes.
 *  - Hooks are functions that let you “hook into” React state and lifecycle features from function components.
 *
 */

function CounterFunction() {
  const [count, setCount] = useState(() => 0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default CounterFunction;
