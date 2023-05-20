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

<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>mermaid.initialize({ startOnLoad: true });</script>

## Providers

## Consumers

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
