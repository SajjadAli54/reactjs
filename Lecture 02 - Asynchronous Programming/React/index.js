// JSX: JavaScript XML
// Babel: Transpiler from XML to JS
// React: Library to create UI

/**
 * Two Types of React components
 * 1. Functional Component
 *      - Pure function
 *      - No state
 *      - No lifecycle methods
 *      - No this
 * 2. Class Component
 *     - Has state
 *     - Has lifecycle methods
 *     - Has this
 *     - Can be extended
 *     - Can be used as a base class
 *     - Can be used as a mixin
 */

// Functional Component

let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const [[first], [sec], [third]] = array;
console.log(first, sec, third);

function Button({ obj: { name } }) {
  return <button>{name}</button>;
}

function App() {
  return (
    <>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <Button obj={{ name: "Click Me" }} />
    </>
  );
}

const div2 = document.getElementById("root");
const root = ReactDOM.createRoot(div2);
setInterval(() => root.render(<App />), 1000);
