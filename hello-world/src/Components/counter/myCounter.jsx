import React from "react";

export default function MyCounter({ initialCount, min, max }) {
  const [count, setCount] = React.useState(
    initialCount < min ? min : initialCount > max ? max : initialCount
  );

  const handleIncrement = () => {
    setCount((prevCount) => {
      if (prevCount < max) {
        return prevCount + 1;
      }
      return prevCount;
    });
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > min) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };
  return (
    <div className="">
      <button className="btn btn-primary p-2" onClick={handleDecrement}>
        -
      </button>
      <span className="badge bg-success m-2 p-3 fg-black">{count}</span>
      <button className="btn btn-primary p-2" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
