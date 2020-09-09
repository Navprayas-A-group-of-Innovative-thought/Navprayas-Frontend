import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required!"),
  lastName: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format!").required("Required!"),
  dob: Yup.date().min(new Date(1900, 0, 1)).max(new Date(2014, 0, 1)),
  gender: Yup.string().required("Required!"),
  schoolOrUniv: Yup.string().required("Required!"),
  fatherName: Yup.string().required("Required!"),
  motherName: Yup.string().required("Required!"),
  contact: Yup.string().length(10).required("Required!"),
  houseNumber: Yup.string().required("Required!"),
  addressLine1: Yup.string().required("Required!"),
  district: Yup.string().required("Required!"),
  city: Yup.string().required("Required!"),
  pincode: Yup.string().required("Required!"),
  country: Yup.string().required("Required!"),
});

export default validationSchema;
