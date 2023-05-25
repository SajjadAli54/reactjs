import React from "react";

function Functional({ name = "Default", age = 0, isMarried = false }) {
  return <h1>{`Name: ${name}, Age: ${age}, Married: ${isMarried}`}</h1>;
}

export default function UseFunctional() {
  return (
    <>
      <Functional />
      <Functional name="John" age={25} isMarried={true} />
      <Functional name="Jane" age={22} />
    </>
  );
}
