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
