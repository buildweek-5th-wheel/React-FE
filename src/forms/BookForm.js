import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";
import "../../src/scss/addListing.scss";

function AddBookingForm({ values, errors, touched, isSubmitting, setFieldValue,
  setFieldTouched, handleSubmit }) {
  return (
    <Form className="addListing">
      <img src={values.imgUrl} alt=""/>

      <div className="inputs">
       

        <div>
          <p>Booking Name</p>
          {touched.listingName && errors.listingName && <p>{errors.listingName}</p>}
          <Field type="username" name="listingName" placeholder="Listing Name" />
        </div>

        <div>
          <p>Dates</p>
          {touched.date && errors.date && <p>{errors.date}</p>}
          <Field type="date" name="date" placeholder="date" />
        </div>
      </div>
      <button className="addListingModal" type="submit" disabled={isSubmitting}>Add</button>
    </Form>
  );
}

const AddBookingComponent = withFormik({
  mapPropsToValues({ listingName, date }) {
    return {
      listingName: listingName || "",
     
      date: date || ""
    };
  },
  validationSchema: Yup.object().shape({
    listingName: Yup.string()
    
      .required("Listing is required"),
    }),

  handleSubmit(values) {
    console.log("Add booking form submission with values", values);

  }

})(AddBookingForm);

export default AddBookingComponent;