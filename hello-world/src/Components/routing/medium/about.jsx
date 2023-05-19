import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const name = location.state.name;
  return <h1>About + {`  ${name}`}</h1>;
}
