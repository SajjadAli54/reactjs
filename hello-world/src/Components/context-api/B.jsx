import React from "react";
import C from "./C";

import { useContext } from "react";
import { PersonContext } from "./personContext";

function B(props) {
  const context = useContext(PersonContext);
  return (
    <>
      <h1>Component B</h1>
      <h2>My name is {context}</h2>
      <C />
    </>
  );
}

export default B;
