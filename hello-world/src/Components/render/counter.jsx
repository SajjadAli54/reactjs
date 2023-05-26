import React, { useState } from "react";
import ClickCounter from "./clickCounter";

function Counter({ render }) {
  const [count, setCount] = useState(() => 0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return <>{render(count, increment)}</>;
}

function UseCounter() {
  function renderCounter(count, increment) {
    return <ClickCounter count={count} increment={increment} />;
  }

  return <Counter render={renderCounter} />;
}

export default UseCounter;
