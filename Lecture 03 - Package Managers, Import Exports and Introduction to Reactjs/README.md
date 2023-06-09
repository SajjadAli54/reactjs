# Package managers

Nodejs

- npm
  - default package installer
  - npm init -> creates package.json file
  - package-lock.json
- npx
- Yarn
  - Much better than npm in terms of performance
  - Provides better security
  - lock.json file for depedencies

---

# Monolithic and micro services

While a monolithic application is a single unified unit, a microservices architecture
breaks it down into a collection of smaller independent units.
These units carry out every application process as a separate service.
So, all the services have their own logic and databases, as well as perform specific functions.

---

# System Design

Systems design is the process of defining elements of a system like modules, architecture, components and their interfaces and data for a system based on the specified requirements.

Highest paid job

---

# Reactjs

## Creating react app and running

```bash
npx creact-react-app hello-world
npm start
```

## React Comments

```jsx
{
  /* <p>This is commened p</p> */
}
```

## Adding bootstrap in to the app

[Tutorail](https://blog.logrocket.com/using-bootstrap-with-react-tutorial-with-examples/)

```bash
npm install bootstrap
# OR
yarn add bootstrap
```

```jsx
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
```

## React bootstrap or reactstrap

```bash
npm install react-bootstrap bootstrap
```

```jsx
import { Button } from "react-bootstrap";
```

# Separation of Concerns

- Different files for different components
- Each file has its own html (jsx), css, and js

---

# Exports

Types of Exports in React

## Default Export

- Only one default export per file
- Can be imported with any name
- Can be imported without curly braces

```jsx
export default function Avatar() {
  return (
    <img
      src="https://picsum.photos/20/30"
      width={20}
      height={20}
      alt="Avatar"
    />
  );
}
```

```jsx
import Avatar from "./Components/Avatar";
```

## Named Export

- Can be imported with curly braces

```jsx
export function Avatar2() {
  return (
    <>
      <img src="https://picsum.photos/300/200" alt="Avatar" />
      <p>{PI}</p>
    </>
  );
}
```

```jsx
import { Avatar2 } from "./Components/Avatar";
```

# Conditional Rendering

```jsx
import "./App.css";
import Avatar, { Avatar2 } from "./Components/Avatar";

function App() {
  let isLogged = true;
  return <div className="App">{isLogged ? <Avatar /> : <Avatar2 />}</div>;
}

export default App;
```

---

# Props

```jsx
function Avatar(props) {
  const { url, alt } = props;
  const style = {
    margin: "10px",
  };
  return (
    <>
      <img src={url} alt={alt} style={style} />
    </>
  );
}

function App() {
  let isLogged = false;

  return (
    <div className="App">
      {isLogged ? (
        <Avatar
          url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Sun set image"
        />
      ) : (
        <Avatar
          url="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png"
          alt="Logo image"
        />
      )}
    </div>
  );
}
```

## Default Props

In React, default props are used to provide default values for a component's props in case they are not specified by the parent component. This can be useful when you want to provide sensible default values for optional props, or when you want to avoid errors caused by missing props.

To define default props for a component, you can use the "defaultProps" property. Here's an example:

```jsx
import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return (
      <h1>
        {`Name: ${this.props.name}, Age: ${this.props.age}, Married: ${this.props.isMarried}`}
      </h1>
    );
  }
}

ClassComponent.defaultProps = {
  name: "Default",
  age: 0,
  isMarried: false,
};

export default ClassComponent;
```

If a prop is specified by the parent component, its value will override the default value.

Default props can also be defined for functional components using the "defaultProps" property:

```jsx
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
```

Or by

```jsx
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
```
