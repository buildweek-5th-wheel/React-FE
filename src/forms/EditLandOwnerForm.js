import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import "../scss/EditLandOwnerForm.scss";

function EditLandOwnerForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="userAccount">
      <img src={values.img_url} alt="" />

      <div>
        <p>Listing Name</p>

        <Field
          style={(errors.listing_name && touched.listing_name) ? { border: "1px solid red" } : null} 
          type="text"
          name="listing_name" 
          placeholder="Listing Name" />
        {touched.listing_name && errors.listing_name && (
          <p className="error">{errors.listing_name}</p>
        )}
      </div>

      <div>
        <p>Image Url</p>
        {touched.img_url && errors.img_url && (
          <p className="error">{errors.img_url}</p>
        )}
        <Field type="text" name="img_url" placeholder="Image Url" />
      </div>

      <div>
        <p>Description</p>
        
        <Field
          style={(errors.description && touched.description) ? { border: "1px solid red" } : null}
          component={"textarea"}
          type="textarea"
          name="description"
          placeholder="Description"
        />
        {touched.description && errors.description && (
          <p className="error">{errors.description}</p>
        )}
      </div>

      <Button className="positive" color="green" type="submit" disabled={isSubmitting}>
        Save Changes
      </Button>
    </Form>
  );
}

const FormikEditLandOwnerForm = withFormik({
  mapPropsToValues({ listing_name, image_url, description, user }) {
    return {
      listing_name: listing_name || "",
      image_url: image_url || "",
      description: description || "",
      user_id: user
    };
  },
  validationSchema: Yup.object().shape({
    listing_name: Yup.string()
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
