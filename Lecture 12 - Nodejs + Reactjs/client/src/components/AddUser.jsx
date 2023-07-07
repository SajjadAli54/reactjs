import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

/**
 * Bootstrap Form with textfield for name and add button
 * @param {*} param0
 * @returns
 */
function AddUser({ value, onChange, onClick }) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your name"
          value={value}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Button onClick={onClick}>Add</Button>
      </Form.Group>
    </Form>
  );
}

export default AddUser;
