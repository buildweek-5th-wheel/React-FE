import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";
import "../../src/scss/addListing.scss";
import { connect } from "react-redux";
import { postListing } from "../util/actions/listingActions";

function AddListingForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="addListing">
      <img src={values.image_url} alt="" />

      <div className="inputs">
        <div>
          <p>Image Url</p>
          {touched.image_url && errors.image_url && (
            <p className="error">{errors.image_url}</p>
          )}
          <Field type="url" name="image_url" placeholder="Image Url" />
        </div>

        <div>
          <p>Listing Name</p>
          {touched.listing_name && errors.listing_name && (
            <p>{errors.listingName}</p>
          )}
          <Field
            type="username"
            name="listing_name"
            placeholder="Listing Name"
          />
        </div>

        <div>
          <p>Description</p>
          {touched.description && errors.description && (
            <p>{errors.description}</p>
          )}
          <Field
            component="textarea"
            name="description"
            placeholder="description"
          />
        </div>
      </div>
      <button className="addListingModal" type="submit" disabled={isSubmitting}>
        Add
      </button>
    </Form>
  );
}

const AddListingComponent = withFormik({
  mapPropsToValues({ image_url, listing_name, description, user }) {
    return {
      listing_name: listing_name || "",
      image_url: image_url || "",
      description: description || "",
      user_id: user
    };
  },
  validationSchema: Yup.object().shape({
    listing_name: Yup.string()
      .min(4, "Listing must be 6 characters or longer")
      .required("Listing is required"),
    description: Yup.string()
      .min(5, "Description must be 5 characters or longer")
      .required("Description is required")
  }),

  handleSubmit(values, formikBag) {
    console.log("Add Listing form submission with values", values);
    console.log(formikBag);
    formikBag.props.postListing(values);
    formikBag.props.history.push("/userListing");
  }
})(AddListingForm);

export default connect(
  null,
  { postListing }
)(AddListingComponent);
