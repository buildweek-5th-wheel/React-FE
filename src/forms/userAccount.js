import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function UserAccountForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="username" name="username" placeholder="username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikUserAccountForm = withFormik({
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
      console.log("User account form saved changes");
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
})(UserAccountForm);

export default FormikUserAccountForm;