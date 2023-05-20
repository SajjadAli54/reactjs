import React from "react";
import A from "./A";

import { PersonProvider } from "./personContext";

function Main() {
  return (
    <PersonProvider value={"Ali"}>
      <A />
    </PersonProvider>
  );
}

export default Main;
