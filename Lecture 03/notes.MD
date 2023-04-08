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

# Monolithic and micro services

While a monolithic application is a single unified unit, a microservices architecture
breaks it down into a collection of smaller independent units.
These units carry out every application process as a separate service.
So, all the services have their own logic and databases, as well as perform specific functions.

# System Design

Systems design is the process of defining elements of a system like modules, architecture, components and their interfaces and data for a system based on the specified requirements.

Highest paid job

# Raectjs

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

## React bootsrap

```bash
npm install react-bootstrap bootstrap
```

```jsx
import { Button } from "react-bootstrap";
```

# Separation of Concerns

- Different files for different components
- Each file has its own html (jsx), css, and js

# Exports

Types of Exports in React

## Default Export

-      Only one default export per file
-      Can be imported with any name
-      Can be imported without curly braces
-      Can be imported with or without curly braces

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

-      Can be imported with any name
-      Can be imported without curly braces
-      Can be imported with curly braces

```jsx
export function Avatar() {
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
