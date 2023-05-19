import React from "react";
import { useParams } from "react-router-dom";

export default function Data() {
  const { data } = useParams();
  return <h1>{`Data ${data}`}</h1>;
}
