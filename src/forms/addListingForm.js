import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";
import "../../src/scss/addListing.scss";

function AddListingForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="addListing">
      <img src={values.imgUrl} alt=""/>

      <div className="inputs">
        <div>
          <p>Image Url</p>
          {touched.imgUrl && errors.imgUrl && <p className="error">{errors.imgUrl}</p>}
          <Field type="url" name="imgUrl" placeholder="Image Url" />
        </div>

        <div>
          <p>Listing Name</p>
          {touched.listingName && errors.listingName && <p>{errors.listingName}</p>}
          <Field type="username" name="listingName" placeholder="Listing Name" />
        </div>

        <div>
          <p>Description</p>
          {touched.description && errors.description && <p>{errors.description}</p>}
          <Field component="textarea" name="description" placeholder="description" />
        </div>
      </div>
      <button className="addListingModal" type="submit" disabled={isSubmitting}>Add</button>
    </Form>
  );
}

const AddListingComponent = withFormik({
  mapPropsToValues({ imgUrl, listingName, description }) {
    return {
      listingName: listingName || "",
      imgUrl: imgUrl || "",
      description: description || ""
    };
  },
  validationSchema: Yup.object().shape({
    listingName: Yup.string()
      .min(4, "Listing must be 6 characters or longer")
      .required("Listing is required"),
      description: Yup.string()
      .min(16, "Description must be 16 characters or longer")
      .required("Description is required")
  }),

  handleSubmit(values) {
    console.log("Add Listing form submission with values", values);

  }

})(AddListingForm);

export default AddListingComponent;