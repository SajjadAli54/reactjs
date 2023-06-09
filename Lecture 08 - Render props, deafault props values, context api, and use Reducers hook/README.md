# Class Based HOC

```jsx
import React, { Component } from "react";

const updatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      const style = { ...this.props.style, filter: "grayscale(100%)" };
      return <OriginalComponent {...this.props} style={style} />;
    }
  }
  return NewComponent;
};

function Image({ style, url, alt, width, height }) {
  return (
    <img src={url} alt={alt} width={width} height={height} style={style} />
  );
}

export default updatedComponent(Image);
```

# Render Props

The render props pattern is a way to share functionality between components without repeating code. The official React docs define it as — The term `render prop` refers to a simple technique for sharing code between React components using a prop whose value is a function.

We have full control over components!

Use either render or as children!

```jsx
import React from "react";

function ClickCounter({ count, increment }) {
  return (
    <>
      <h1>Hi Clicker</h1>
      <button onClick={increment}>Clicked {count} times</button>
    </>
  );
}

export default ClickCounter;
```

```jsx
import React, { useState } from "react";
import ClickCounter from "./clickCounter";

function Counter(props) {
  const [count, setCount] = useState(() => 0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return <>{props.render(count, increment)}</>;
}

function UseCounter() {
  return (
    <Counter
      render={(count, increment) => {
        return <ClickCounter count={count} increment={increment} />;
      }}
    />
  );
}

export default UseCounter;
```

```jsx
import "./App.css";
import UseCounter from "./Components/render/counter";

function App() {
  return (
    <div className="App">
      <UseCounter />
    </div>
  );
}

export default App;
```

# Difference between render props and hoc

HOC , Render Props and now hooks all serve to the same purpose: Share stateful logic between components. There is actually no way to tell which one is better or worst. All depends on your use case. On the other hand, render props it's easy to set up, have less boilerplate and in most cases are easier to reason about.

# Context Api

- Used to avoid prop dealing issue
- Helps in state management
- Global State
- Use Reducer for global
- Providers and Consumers

```mermaid
graph TD;
    App-->A;
    App-->B;
    A-->C;
    C-->G;
    A-->D;
    B-->E;
    B-->F;
```

## Providers and Consumers

```jsx
import React from "react";

const PersonContext = React.createContext();

const PersonProvider = PersonContext.Provider;

const PersonConsumer = PersonContext.Consumer;

export { PersonProvider, PersonConsumer };
```

```jsx
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
```

```jsx
import React from "react";
import B from "./B";

function A(props) {
  return (
    <>
      <h1>Component A</h1>
      <B />
    </>
  );
}

export default A;
```

```jsx
import React from "react";
import C from "./C";

function B(props) {
  return (
    <>
      <h1>Component B</h1>
      <C />
    </>
  );
}

export default B;
```

```jsx
import React from "react";

import { PersonConsumer } from "./personContext";

function C(props) {
  return (
    <>
      <PersonConsumer>
        {(person) => <h1> Component C: hello {person}</h1>}
      </PersonConsumer>
    </>
  );
}

export default C;
```

## Multiple Consumers and Providers

```jsx
import React from "react";

const PersonContext = React.createContext();
const CartContext = React.createContext();

const PersonProvider = PersonContext.Provider;
const PersonConsumer = PersonContext.Consumer;

const CartProvider = CartContext.Provider;
const CartConsumer = CartContext.Consumer;

export { PersonProvider, PersonConsumer, CartProvider, CartConsumer };
```

```jsx
import React from "react";
import A from "./A";

import { PersonProvider, CartProvider } from "./personContext";

function Main() {
  return (
    <PersonProvider value={"Ali"}>
      <CartProvider value={"Cart"}>
        <h1>Component Main</h1>
        <A />
      </CartProvider>
    </PersonProvider>
  );
}

export default Main;
```

```jsx
import React from "react";
import B from "./B";

function A(props) {
  return (
    <>
      <h1>Component A</h1>
      <B />
    </>
  );
}

export default A;
```

```jsx
import React from "react";
import C from "./C";

function B(props) {
  return (
    <>
      <h1>Component B</h1>
      <C />
    </>
  );
}

export default B;
```

```jsx
import React from "react";

import { CartConsumer, PersonConsumer } from "./personContext";

function C(props) {
  return (
    <>
      <PersonConsumer>
        {(person) => {
          return (
            <CartConsumer>
              {(cart) => (
                <h1>
                  {" "}
                  Component C: hello {person}, {cart}
                </h1>
              )}
            </CartConsumer>
          );
        }}
      </PersonConsumer>
    </>
  );
}

export default C;
```

## Default values in context

```jsx
import React from "react";

const PersonContext = React.createContext("Sajjad Ali");
const CartContext = React.createContext();

const PersonProvider = PersonContext.Provider;
const PersonConsumer = PersonContext.Consumer;

const CartProvider = CartContext.Provider;
const CartConsumer = CartContext.Consumer;

export { PersonProvider, PersonConsumer, CartProvider, CartConsumer };
```

```jsx
import React from "react";
import A from "./A";

import { CartProvider } from "./personContext";

function Main() {
  return (
    <CartProvider value={"Cart"}>
      <h1>Component Main</h1>
      <A />
    </CartProvider>
  );
}

export default Main;
```

![1684576162444](image/README/1684576162444.png)

## context type

```jsx
import React from "react";

import { PersonContext } from "./personContext";

class C extends React.Component {
  render() {
    return (
      <>
        <h1>
          Context {this.context} {this.context.context}
        </h1>
      </>
    );
  }
}

C.contextType = PersonContext;

export default C;
```

## use context

```jsx
import React from "react";
import C from "./C";

import { useContext } from "react";
import { PersonContext } from "./personContext";

function B(props) {
  const context = useContext(PersonContext);
  return (
    <>
      <h1>Component B</h1>
      <h2>My name is {context}</h2>
      <C />
    </>
  );
}

export default B;
```

# Use Reducer

- Global State management

## reduce in js

```js
const array = [1, 2, 3, 4, 5];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const result = array.reduce(reducer, 2);

console.log(result); // 17

// reduce as fliter
const evenReducer = (accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    accumulator["even"].push(currentValue);
  } else {
    accumulator["odd"].push(currentValue);
  }
  return accumulator;
};

const evenResult = array.reduce(evenReducer, {
  even: [],
  odd: [],
});

console.log(evenResult);
```

reduce as map

```js
// reduce as map
const mapReducer = (accumulator, currentValue) => {
  accumulator.push(currentValue * 2);

  return accumulator;
};

const mapResult = array.reduce(mapReducer, []);
console.log(mapResult); // [ 2, 4, 6, 8, 10 ]
```

## use Reducers

```jsx
import React from "react";
import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return ++state;
    case "decrement":
      return --state;
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default Counter;
```

Passing data from button to dispatcher

```jsx
import React from "react";
import { useReducer } from "react";
import "./reducer.css";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        -
      </button>
    </>
  );
}

export default Counter;
```

```css
.h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}

button {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
}
```

## Adding and Removing Person records using useReducers and Formik forms

```jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

const initialState = [
  {
    id: 1,
    name: "John",
    age: 20,
  },
  {
    id: 2,
    name: "Smith",
    age: 30,
  },
  {
    id: 3,
    name: "Bob",
    age: 40,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.length + 1, ...action.payload }];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

function Practice() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const initialValues = {
    name: "",
    age: 0,
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.age) {
      errors.age = "Required";
    }
    return errors;
  };
  const onSubmit = (values, { resetForm }) => {
    dispatch({ type: "ADD", payload: values });
    resetForm();
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    padding: "8px",
    textAlign: "left",
  };

  const tdStyle = {
    padding: "8px",
    borderBottom: "1px solid #ddd",
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <Field type="number" name="age" />
            <ErrorMessage name="age" />
          </div>
          <button type="submit">Submit</button>
          <br />
          <br />
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Id</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Age</th>
                <th style={thStyle}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {state.map(({ id, name, age }) => (
                <tr key={id}>
                  <td style={tdStyle}>{id}</td>
                  <td style={tdStyle}>{name}</td>
                  <td style={tdStyle}>{age}</td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => dispatch({ type: "DELETE", payload: id })}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Form>
      )}
    </Formik>
  );
}

export default Practice;
```

![Code output](image/README/1685102432334.png)

<p style="display: none;">
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <script>mermaid.initialize({ startOnLoad: true });</script>
</p>
