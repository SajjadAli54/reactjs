import React from "react";
import UpdatedComponent from "./hoc";

function Person1({ money, increaseMoney }) {
  return (
    <>
      <h2> Jimmy is offering ${money}</h2>
      <button onClick={increaseMoney}>Increase money</button>
    </>
  );
}

export default UpdatedComponent(Person1);
