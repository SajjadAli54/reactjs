import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { components, reducer } from "./dynamicComponentsData";
import DynamicComponent from "./dynamicComponent";
import Navbar from "./navbar";
import { useReducer } from "react";

function Main() {
  const [state, dispatch] = useReducer(reducer, components);

  const onClick = () => {
    dispatch({ type: "ADD" });
  };
  return (
    <>
      <h1>Create Dynamic Routes and Components Demo</h1>
      <BrowserRouter>
        <Navbar onClick={onClick} components={state} />
        <Routes>
          {state.map((component, index) => (
            <Route
              key={index}
              path={component.route}
              element={
                <DynamicComponent
                  title={component.title}
                  content={component.content}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
