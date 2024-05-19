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

# Custom Hooks

```jsx
import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);

  return data;
};

function UseCustom() {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  const liStyle = {
    listStyle: "none",
    padding: "1rem",
    margin: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id} style={liStyle}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

export default UseCustom;
```

# Forms in React

## Controlled Components

- Does not have its own state. State cam from its parent as props
- Data input => Get and set in general, not in react
- We have to set the values by ourselves using state
- Reason: **Single source of truth**

```jsx
import React, { Component } from "react";

export class SignupClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      gender: "",
      about: "",
      male: false,
      react: false,
      typescript: false,
      language: ["urdu", "english"],
      country: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Event Synthesize object: event
    let { name, value, type, checked, selectedOptions } = event.target;
    if (type === "checkbox") value = checked;
    else if (name === "language")
      value = Array.from(selectedOptions, (option) => option.value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <h1>Register</h1>
        <p>{JSON.stringify(this.state)}</p>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            onChange={this.handleChange}
          />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label>About me</label>
          <textarea
            type="text"
            name="about"
            value={this.state.about}
            onChange={this.handleChange}
          />

          <label>Skills</label>
          <label>React:</label>
          <input
            type="checkbox"
            name="react"
            checked={this.state.react}
            onChange={this.handleChange}
          />
          <label>Typescript:</label>
          <input
            type="checkbox"
            name="typescript"
            checked={this.state.typescript}
            onChange={this.handleChange}
          />

          <label>Gender</label>
          <input type="radio" name="male" value="Male" />
          <label>Male</label>
          <input type="radio" name="male" value="female" />
          <label>Female</label>

          <label>Language</label>
          <select
            name="language"
            value={this.state.language}
            onChange={this.handleChange}
            multiple
          >
            <option value="urdu">Urdu</option>
            <option value="english">English</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="japanese">Japanese</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default SignupClass;
```

## Formik Docs

### Basics

[Docs](https://formik.org/docs/tutorial)

```sh
npm install formik --save
```

or

```html
<!-- Add this to the bottom of html page -->
<script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"></script>
```

```jsx
import React from "react";
import { useFormik } from "formik";

export default function Basic() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

```jsx
import React from "react";
import { useFormik } from "formik";

export default function Basic() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Validation

```jsx
import React from "react";
import { useFormik } from "formik";

export default function Basic() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? (
        <div style={{ color: "red" }}>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? (
        <div style={{ color: "red" }}>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Visited Fields

```jsx
import React from "react";
import { useFormik } from "formik";

export default function Basic() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div style={{ color: "red" }}>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div style={{ color: "red" }}>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Schema Validation with Yup

```sh
npm install yup --save

# or via yarn

yarn add yup
```

```jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function MyYup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div style={{ color: "red" }}>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div style={{ color: "red" }}>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Formik, Form, Field and ErrorMessage

```jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignupUsingFormik() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    isMarried: false,
    languages: [],
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
        </div>
        <div>
          <label htmlFor="isMarried">Is Married</label>
          <Field name="isMarried" type="checkbox" />
          <ErrorMessage name="isMarried" />
        </div>
        <div>
          <label htmlFor="languages">Select your language</label>
          <Field name="languages" as="select" multiple>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </Field>
          <ErrorMessage name="languages" />
        </div>

        <Field name="submit" as="button" type="submit">
          Submit
        </Field>
      </Form>
    </Formik>
  );
}

export default SignupUsingFormik;
```

## ORM vs ODM

Object-Relational Mapping (ORM) and Object-Document Mapping (ODM) are two popular techniques used to interact with databases in a programming language. Both ORM and ODM provide an abstraction layer that allows developers to work with the database using their programming language's objects, rather than writing raw SQL queries. This makes it easier to write, maintain, and test the code. However, there are some key differences between ORM and ODM, and it's important to understand these differences to choose the right approach for your project.

### ORM

As the name suggests, is used to interact with relational databases. Relational databases, such as MySQL, PostgreSQL, and Oracle, store data in tables, with each table representing a specific entity and each row representing an instance of that entity. The relationships between tables are defined using foreign keys. ORM provides a way to map these tables and relationships to objects in the programming language, making it easy to work with the data using the familiar object-oriented paradigm. For example, using an ORM library such as Hibernate, a Java developer can define a class to represent a "Person" entity, and Hibernate will automatically create the corresponding table in the database and handle all the CRUD operations.

### ODM

On the other hand, is used to interact with document-based databases, such as MongoDB and CouchDB. Document-based databases store data in the form of documents, with each document representing an instance of an entity. These databases are more flexible than relational databases, as the structure of the documents can vary from one document to another. ODM provides a way to map these documents to objects in the programming language, making it easy to work with the data using the familiar object-oriented paradigm. For example, using an ODM library such as Mongoose, a JavaScript developer can define a schema to represent a "Person" entity, and Mongoose will automatically handle all the CRUD operations.

### Usecase

So, when should you use ORM, and when should you use ODM? The main difference between ORM and ODM is the type of database they are used with. If you are working with a relational database, ORM is the way to go. ORM is more powerful and flexible than ODM, as it can handle complex relationships between tables. However, if you are working with a document-based database, ODM is the better choice. ODM is simpler and more suited for document-based databases, as it is designed to work with the flexible schema of these databases.
Database Variance

It's also important to note that there are other types of databases like Graph databases and Time series databases, which have their ORM or ODM libraries specific to them. For example, Neo4j uses Cypher as the query language and has its own ORM library called "Neo4j-OGM" (Object Graph Mapping) and InfluxDB uses InfluxQL and has its own ORM library called "InfluxDB-ORM".

In conclusion, ORM and ODM are powerful techniques that allow developers to work with databases more efficiently and conveniently. ORM is best suited for relational databases, while ODM is best suited for document-based databases. However, the choice of which to use ultimately depends on the specific needs of your project and the type of database you are working with.

## Seqeulite

[Docs](https://sequelize.org/docs/v6/getting-started/)

```sh

npm install sequelize sqlite3
# or
yarn add sequelize sqlite3
```
