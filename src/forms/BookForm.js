import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";
import "../../src/scss/addListing.scss";

function AddBookingForm({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  handleSubmit
}) {
  return (
    <Form className="addListing">
      <img src={values.imgUrl} alt="" />

      <div className="inputs">
        <div>
          <p>Check-in</p>
          {touched.checkin && errors.checkin && <p>{errors.checkin}</p>}
          <Field type="date" name="checkin" placeholder="checkin" />
        </div>
        <div>
          <p>Check-out</p>
          {touched.checkout && errors.checkout && <p>{errors.checkout}</p>}
          <Field type="date" name="checkout" placeholder="checkout" />
        </div>
      </div>
      <button className="addListingModal" type="submit" disabled={isSubmitting}>
        Add
      </button>
    </Form>
  );
}

const AddBookingComponent = withFormik({
  mapPropsToValues({ checkin, checkout }) {
    return {
      checkin: checkin || "",

      checkout: checkout || ""
    };
  },
  validationSchema: Yup.object().shape({}),

  handleSubmit(values) {}
})(AddBookingForm);

export default AddBookingComponent;
