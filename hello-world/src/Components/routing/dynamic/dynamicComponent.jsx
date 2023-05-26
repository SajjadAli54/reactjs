import React from "react";

function DynamicComponent({ title, content }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
}

export default DynamicComponent;
