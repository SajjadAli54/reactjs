import React from "react";
import A from "./A";

import { PersonProvider, CartProvider } from "./personContext";

function Main() {
  return (
    // <PersonProvider value={"Ali"}>
    <CartProvider value={"Cart"}>
      <h1>Component Main</h1>
      <A />
    </CartProvider>
    // </PersonProvider>
  );
}

export default Main;
