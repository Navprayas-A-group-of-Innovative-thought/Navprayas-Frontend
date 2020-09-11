import * as Yup from "yup";

export const registerValidation = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Too Short - should be 8 chars minimum")
    .max(20, "should not exceed 20 character")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&_])(?=\S+$).{8,20}$/,
      "The password must be 8 to 20 characters long and must contain atleast one lower case, one uppercase, one special character(@,#,$,%,&,_) and one digit"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  dob: Yup.date()
    .min(new Date(1900, 0, 1))
    .max(new Date(2014, 0, 1))
    .required("Required"),
  gender: Yup.string().required("Required!"),
  terms: Yup.bool().required("You must accept our terms and condition"),
});
