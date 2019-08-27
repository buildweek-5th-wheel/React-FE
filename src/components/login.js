import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";

function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <h3>Welcome to the login page</h3>
      <div className="username field">
        <label>Username</label>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="username" name="username" placeholder="Username" />
      </div>
      <div className="password field">
        <label>Password</label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
}

const LoginComponent = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be 6 characters or longer")
      .required("Username is required"),
    password: Yup.string()
      .min(16, "Password must be 16 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log("Login form submission with values", values);
  }
})(LoginForm);

export default LoginComponent;
