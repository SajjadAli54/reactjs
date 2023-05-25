import React from "react";

function FC({ name, age, isMarried }) {
  return <h1>{`Name: ${name}, Age: ${age}, Married: ${isMarried}`}</h1>;
}

FC.defaultProps = {
  name: "Default",
  age: 0,
  isMarried: false,
};

export default FC;
