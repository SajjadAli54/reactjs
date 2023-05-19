import React from "react";
import UpdatedComponent from "./hoc";

function Person2({ money, increaseMoney }) {
  return (
    <>
      <h2> John is offering ${money}</h2>
      <button onClick={increaseMoney}>Increase money</button>
    </>
  );
}

export default UpdatedComponent(Person2);
