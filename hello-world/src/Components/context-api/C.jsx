import React from "react";

import { PersonContext, CartContext } from "./personContext";

class C extends React.Component {
  render() {
    return (
      <>
        <h1>
          Context {this.context} {this.context.context}
        </h1>
        {/* <PersonConsumer>
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
        </PersonConsumer> */}
      </>
    );
  }
}

C.contextType = PersonContext;
C.contextType.contextType = CartContext;
export default C;
