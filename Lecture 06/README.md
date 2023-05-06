# Recap

## useEffect

### ComponentDidMount

When a child is born

`useEffect(callback, [])`

### ComponentDidUpdate

He faces ups and downs of life

`useEffect(callback, [depedencies])`

### ComponentWillUnmount

He just dies off!

`useEffect(callback, [])`

callback returns array that will be called when component will be unmounted!

## Event Handlers Registeration

State is a single source of truth. There will be a single component updating the state.

```jsx
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
```

- State Lift up: Move state to its parent component to share with its siblings or other
- We use `useReducer` and `useContext` for this purpose. We can also use `redux` for state management.

---

# Forms in React

## Controlled Components

- Does not have its own state. State cam from its parent as props
- Data input => Get and set in general, not in react
- We have to set the values by ourselves using state
- Reason: **Single source of truth**
