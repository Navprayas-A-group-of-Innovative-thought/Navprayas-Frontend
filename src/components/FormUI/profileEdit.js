import React from "react";
import { initialValues } from "../../shared/profileEdit.initialValues";
import validationSchema from "../../util/validationSchema";
import FormEdit from "./profile.formEdit";

const onSubmit = (initialvalues, onSubmitProps) => {
  console.log("Form data", initialvalues);
  onSubmitProps.setSubmitting(false);
};

const ProfileEdit = () => {
  return (
    <section style={{ height: "auto", marginTop: "80px" }}>
      <div className="text-center bold m-5">
        <h1>Edit Profile</h1>
      </div>
      <FormEdit
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export default ProfileEdit;
