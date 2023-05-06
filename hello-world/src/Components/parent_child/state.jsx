import React from "react";

export default function Parent() {
  const [name, setName] = React.useState("");

  function handleChange(name) {
    setName(() => name);
  }
  return (
    <>
      <h1>Parent Component</h1>
      <strong>Name: {name}</strong>
      <Child nameChangeHandler={handleChange} />
    </>
  );
}

function Child(props) {
  function changeParentState() {
    props.nameChangeHandler("John");
  }
  return (
    <>
      <h1>Child Component</h1>
      <strong></strong>
      <button onClick={changeParentState}>Change Name</button>
    </>
  );
}
