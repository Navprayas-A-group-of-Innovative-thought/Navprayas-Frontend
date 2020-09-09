import React from "react";
// import { initialValues } from "../../shared/profileEdit.initialValues";
import validationSchema from "../../util/validationSchema";
import FormEdit from "./profile.formEdit";

const ProfileEdit = ({ initialValues, updateProfile }) => {
  const handleSubmit = (user) => {
    updateProfile(user);
  };

  return (
    <section style={{ height: "auto", marginTop: "80px" }}>
      <div className="text-center bold m-5">
        <h1>Edit Profile</h1>
      </div>
      <FormEdit
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default ProfileEdit;
