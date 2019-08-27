import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/userAccount.scss";

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
      <div>
        <Field component="textarea" name="bio" placeholder="bio" />
      </div>
      <button type="submit" >Save Changes</button>
    </Form>
  );
}

const FormikUserAccountForm = withFormik({
  mapPropsToValues({ username, password, bio }) {
    return {
      username: username || "",
      password: password || "",
      bio: bio || ""
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
      console.log(values);
  }
})(UserAccountForm);

export default FormikUserAccountForm;