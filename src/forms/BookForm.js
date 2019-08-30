import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/scss/formStyles.scss";
import "../../src/scss/addListing.scss";
import { connect } from "react-redux";
import { postBooking } from "../util/actions/authActions";
import { withRouter } from "react-router-dom";

import { Button } from "semantic-ui-react";

function AddBookingForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="addListing">
      <div className="inputs">
        <div>
          <p>Check-in</p>
          <Field
            style={
              errors.startDate && touched.startDate
                ? { border: "1px solid red" }
                : null
            }
            type="date"
            name="startDate"
            placeholder="startDate"
          />
          {touched.startDate && errors.startDate && (
            <p className="error">{errors.startDate}</p>
          )}
        </div>
        <div>
          <p>Check-out</p>
          <Field
            style={
              errors.stopDate && touched.stopDate
                ? { border: "1px solid red" }
                : null
            }
            type="date"
            name="stopDate"
            placeholder="stopDate"
          />
          {touched.stopDate && errors.stopDate && (
            <p className="error">{errors.stopDate}</p>
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
  mapPropsToValues({ startDate, stopDate }) {
    return {
      startDate: startDate || "",

      stopDate: stopDate || ""
    };
  },
  validationSchema: Yup.object().shape({}),

  handleSubmit(values, formikBag) {
    if (localStorage.getItem("token")) {
      formikBag.props.postBooking(formikBag.props.listing_id, values);
    } else {
      formikBag.props.history.push("/login");
    }
  }
})(AddBookingForm);

export default withRouter(
  connect(
    null,
    { postBooking }
  )(AddBookingComponent)
);
