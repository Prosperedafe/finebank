import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  firstName: yup.string().min(1, "Please enter your First Name").required("Required"),
  lastName: yup.string().min(1, "Please enter your LastName").required("Required"),
//   country: yup.string().min(1, "Please select a country").required("Required"),
//   gender: yup.string().min(1, "Please select a Gender").required("Required"),
//   role: yup.string().min(1, "Please select a Role").required("Required"),
//   phoneNumber: yup.number().positive().integer().required("Required"),
  password: yup.string().min(5).matches(passwordRules, { message: "Password must be a min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" }).required("Required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password must be a min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" })
    .required("Required"),
});