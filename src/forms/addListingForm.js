import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";

function AddListingForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <h1>Add a Listing</h1>

      <div>
        <p>Listing Name</p>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="username" name="username" placeholder="username" />
      </div>

      <div>
        <p>Description</p>
        <Field component="textarea" name="description" placeholder="Description" />
      </div>
    
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const AddListingComponent = withFormik({
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

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log("Sign Up form submission with values", values);

  }

})(AddListingForm);

export default AddListingComponent;