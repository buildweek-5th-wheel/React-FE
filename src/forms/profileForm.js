import React, {useState} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


function UserAccountForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="userAccount">
      <img src={values.imgUrl} alt=""/>

      <div>
        <p>Image Url</p>
        {touched.imgUrl && errors.imgUrl && <p className="error">{errors.imgUrl}</p>}
        <Field type="text" name="imgUrl" placeholder="Image Url" />
      </div>
      <div>
        <p>User Name</p>
        {touched.username && errors.username && <p className="error">{errors.username}</p>}
        <Field type="username" name="username" placeholder="username" />
      </div>
      <div>
        <p>Password</p>
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>

      <div>
        <p>Bio</p>
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <Field type="textarea" name="bio" placeholder="bio"/>
      </div>

      <button type='submit' disabled={isSubmitting}>Save Changes</button>

    </Form>
  );
}

const FormikUserAccountForm = withFormik({
  mapPropsToValues({ username, password, bio, imgUrl }) {
    return {
      username: username || "",
      password: password || "",
      bio: bio || "",
      imgUrl: imgUrl || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be 6 characters or longer")
      .required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
      console.log("User account form saved changes");
      console.log(values);
  }
})(UserAccountForm);

export default FormikUserAccountForm;