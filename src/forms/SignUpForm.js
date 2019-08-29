import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../../src/scss/formStyles.scss";
import "../../src/scss/signUp.scss";
import SignUpImg from "../images/gooseNeckVine.jpg";
import { connect } from "react-redux";
import { doRegister } from "../util/actions/authActions";

function SignUpForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="signUp">
      <img src={SignUpImg} alt="A truck with beautiful fields" />
      <div>
        <h3>Sign Up!</h3>
        <p>User Name</p>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="username" name="username" placeholder="username" />
      </div>

      <div>
        <p>Password</p>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>

      <div className="checkbox">
        <p>Are you a land owner?</p>
        <label>
          <Field type="checkbox" name="landowner" checked={values.landowner} />
          Landowner
        </label>
      </div>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      <Link to="/login">Already signed up? Click here to login</Link>
    </Form>
  );
}

const SignUpComponent = withFormik({
  mapPropsToValues({ username, password, landowner }) {
    return {
      username: username || "",
      password: password || "",
      landowner: landowner || false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5, "Username must be 6 characters or longer")
      .required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, formikBag) {
    console.log("Sign Up form submission with values", values);
    formikBag.props.doRegister(values);
    formikBag.props.history.push("/profile");
  }
})(SignUpForm);

export default connect(
  null,
  { doRegister }
)(SignUpComponent);
