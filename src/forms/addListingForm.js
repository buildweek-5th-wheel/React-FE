import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";
import "../../src/scss/addListing.scss";

function AddListingForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="addListing">
      <div className="inputs">
        <div>
          <p>Listing Name</p>
          {touched["listing_name"] && errors["listing_name"] && <p>{errors["listing_name"]}</p>}
          <Field type="text" name="listing_name" placeholder="listing_name" />
        </div>

        <div>
          <p>Description</p>
          <Field component="textarea" name="description" placeholder="Description" />
        </div>
      </div>
      <button type="submit" disabled={isSubmitting}>Add</button>
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