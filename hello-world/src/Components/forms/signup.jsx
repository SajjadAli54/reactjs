import React from "react";

export default function Signup() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <>
      <h1>Register</h1>
      <form>
        <label>Name: </label>
        <input type="text" name="fullname" />
        <br /> <br />
        <label>Email: </label>
        <input type="email" name="email" />
      </form>
    </>
  );
}
