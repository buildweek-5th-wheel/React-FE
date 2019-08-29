import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { editUser } from "../util/actions/authActions";

function UserAccountForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="userAccount form">
      <div className="image">
        <img src={values.image_url} alt="" />
      </div>

      <div className="inputs">
        <div>
          <p>Image Url</p>
          {touched.image_url && errors.image_url && (
            <p className="error">{errors.image_url}</p>
          )}
          <Field type="text" name="image_url" placeholder="Image Url" />
        </div>

        <div>
          <p>User Name</p>
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <Field type="username" name="username" placeholder="username" />
        </div>
        {/* <div>
          <p>Password</p>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <Field type="password" name="password" placeholder="Password" />
        </div> */}

        <div>
          <p>Bio</p>
          {touched.bio && errors.bio && <p className="error">{errors.bio}</p>}
          <Field
            component={"textarea"}
            type="textarea"
            name="bio"
            placeholder="bio"
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          Save Changes
        </button>
      </div>
    </Form>
  );
}

const FormikUserAccountForm = withFormik({
  mapPropsToValues({ username, bio, image_url }) {
    return {
      username: username || "",
      bio: bio || "",
      image_url: image_url || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be 6 characters or longer")
      .required("Username is required")
  }),

  handleSubmit(values, formikBag) {
    console.log("User account form saved changes");
    console.log(values, formikBag.props.user.id);
    formikBag.props.editUser(values, formikBag.props.user.id);
  }
})(UserAccountForm);

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  { editUser }
)(FormikUserAccountForm);
