function Counter() {
  const [count, setCount] = React.useState(() => 0);

  const counterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const btnStyle = {
    backgroundColor: "red",
    color: "white",
    fontSize: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const spanStyle = {
    fontSize: "20px",
    padding: "10px 20px",
  };

  return (
    <div style={counterStyle}>
      <button
        style={btnStyle}
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        +
      </button>
      <span style={spanStyle}>Count: {count}</span>
      <button
        style={btnStyle}
        onClick={() => setCount((currentCount) => currentCount - 1)}
      >
        -
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
