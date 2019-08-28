// Helper styles for demo


import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "./DatePicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => (
  <div className="DatePick">
    <Formik
      initialValues={{ date: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setFieldValue
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <DatePicker
              name="date"
              value={values.date}
              onChange={setFieldValue}
            />
            

          
          </form>
        );
      }}
    </Formik>
  </div>
);

render(<App />, document.getElementById("root"));
