import React, { useState } from "react";
import ClickCounter from "./clickCounter";

function Counter(props) {
  const [count, setCount] = useState(() => 0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return <>{props.render(count, increment)}</>;
}

function UseCounter() {
  return (
    <Counter
      render={(count, increment) => {
        return <ClickCounter count={count} increment={increment} />;
      }}
    />
  );
}

export default UseCounter;
