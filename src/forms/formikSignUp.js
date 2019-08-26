import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

//Stretch ideas: add password limits including regex

function SignUpForm({ values, errors, touched, isSubmitting }) {
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
      <label>
        <Field type="checkbox" name="landowner" checked={values.landowner} />
        Landowner
      </label>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, password, landowner }) {
    return {
      username: username || "",
      password: password || "",
      landowner: landowner || false
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

})(SignUpForm);

export default FormikSignUpForm;