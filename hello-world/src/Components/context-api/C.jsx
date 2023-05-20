import React from "react";

import { PersonConsumer } from "./personContext";

function C(props) {
  return (
    <>
      <PersonConsumer>
        {(person) => <h1> Component C: hello {person}</h1>}
      </PersonConsumer>
    </>
  );
}

export default C;
