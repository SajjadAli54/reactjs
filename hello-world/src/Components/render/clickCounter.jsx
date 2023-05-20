import React from "react";

function ClickCounter({ count, increment }) {
  return (
    <>
      <h1>Hi Clicker</h1>
      <button onClick={increment}>Clicked {count} times</button>
    </>
  );
}

export default ClickCounter;
