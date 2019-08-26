import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/loginForm.scss";

//Stretch ideas: add password limits including regex

function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div className="username field">
        <label>Username</label>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="username" name="username" placeholder="Username" />
      </div>
      <div className="password field">
        <label>Password</label>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
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
    // if (values.email === "alreadytaken@atb.dev") {
    //   setErrors({ email: "That email is already taken" });
    // } else {
    //   axios
    //     .post("https://yourdatabaseurlgoeshere.com", values)
    //     .then(res => {
    //       console.log(res); // Data was created successfully and logs to console
    //       resetForm();
    //       setSubmitting(false);
    //     })
    //     .catch(err => {
    //       console.log(err); // There was an error creating the data and logs to console
    //       setSubmitting(false);
    //     });
    // }
  }
})(LoginForm);

export default FormikLoginForm;