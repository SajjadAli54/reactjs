import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormikComponent() {
  const initialValues = {
    username: "",
    password: "",
    email: "",
    isMarried: false,
    gender: "",
    languages: [],
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().ensure().required("Required"),
      password: Yup.string().ensure().required("Required").min(8, "Too Short"),
      email: Yup.string().ensure().required("Required").email("Invalid Email"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });
  return (
    <>
      <h1>Signup</h1>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            onBlur={formik.handleBlur}
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.username && formik.touched && (
          <ErrorMessage msg={formik.errors.username} />
        )}

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.password && formik.touched && (
          <ErrorMessage msg={formik.errors.password} />
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.email && formik.touched && (
          <ErrorMessage msg={formik.errors.email} />
        )}
        <div>
          <label htmlFor="isMarried">Married</label>
          <input
            id="isMarried"
            type="checkbox"
            name="isMarried"
            checked={formik.values.isMarried}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={formik.handleChange}
            />
            <label htmlFor="male">Male</label>
          </div>

          <div>
            <input
              id="female"
              type="radio"
              name="gender"
              value="Female"
              onChange={formik.handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div>
          <label htmlFor="languages">Languages</label>
          {/* Multi selection selection box */}
          <select
            id="languages"
            name="languages"
            multiple
            onChange={formik.handleChange}
          >
            <option value="Urdu">Urdu</option>
            <option value="Sindhi">Sindhi</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Russian">Russian</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormikComponent;

const ErrorMessage = ({ msg }) => {
  return <div style={{ color: "red" }}> {msg}</div>;
};
