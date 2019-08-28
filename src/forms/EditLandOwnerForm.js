import React, {useState} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


function EditLandOwnerForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="userAccount">
      <img src={values.imgUrl} alt=""/>

        <div>
           <p>Listing Name</p> 
           {touched.listingName && errors.listingName && <p className="error">{errors.listingName}</p>}
            <Field type="text" name="listingName" placeholder="Listing Name" />
        </div>

      <div>
        <p>Image Url</p>
        {touched.imgUrl && errors.imgUrl && <p className="error">{errors.imgUrl}</p>}
        <Field type="text" name="imgUrl" placeholder="Image Url" />
      </div>

      <div>
        <p>Description</p>
        {touched.description && errors.description && <p className="error">{errors.description}</p>}
        <Field component={"textarea"} type="textarea" name="Description" placeholder="Description"/>
      </div>

      <button type='submit' disabled={isSubmitting}>Save Changes</button>
    </Form>
  );
}

const FormikEditLandOwnerForm = withFormik({
  mapPropsToValues({ listingName, imgUrl, description }) {
    return {
      listingName: listingName || "",
      imgUrl: imgUrl || "",
      description: description || ""
    };
  },
  validationSchema: Yup.object().shape({
    listingName: Yup.string()
      .min(6, "Listing Name must be 6 characters or longer")
      .required("Listing Name is required"),
      description: Yup.string()
      .min(5, "Description must be 5 characters or longer")
      .required("Description is required")
  }),

  handleSubmit(values) {
      console.log("Editing The land Owner form saved changes");
      console.log(values);
  }
})(EditLandOwnerForm);

export default FormikEditLandOwnerForm;
