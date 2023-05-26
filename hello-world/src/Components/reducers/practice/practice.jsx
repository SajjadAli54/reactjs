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
