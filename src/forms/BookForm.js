import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";
import "../../src/scss/addListing.scss";
import { Button } from "semantic-ui-react";

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
          <Field
            style={
              errors.checkin && touched.checkin
                ? { border: "1px solid red" }
                : null
            }
            type="date"
            name="checkin"
            placeholder="checkin"
          />
          {touched.checkin && errors.checkin && (
            <p className="error">{errors.checkin}</p>
          )}
        </div>
        <div>
          <p>Check-out</p>
          <Field
            style={
              errors.checkout && touched.checkout
                ? { border: "1px solid red" }
                : null
            }
            type="date"
            name="checkout"
            placeholder="checkout"
          />
          {touched.checkout && errors.checkout && (
            <p className="error">{errors.checkout}</p>
          )}
        </div>
      </div>
      <Button
        className="positive"
        color="green"
        type="submit"
        disabled={isSubmitting}
      >
        Add
      </Button>
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
