import React from "react";

import { CartConsumer, PersonConsumer } from "./personContext";

function C(props) {
  return (
    <>
      <PersonConsumer>
        {(person) => {
          return (
            <CartConsumer>
              {(cart) => (
                <h1>
                  Component C: hello {person}, {cart}
                </h1>
              )}
            </CartConsumer>
          );
        }}
      </PersonConsumer>
    </>
  );
}

export default C;
