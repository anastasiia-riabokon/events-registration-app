import * as Yup from "yup";

export const schemaRegister = Yup.object({
  fullName: Yup.string()
    .matches(/^[A-Z][a-zA-Z'-]+(?: [A-Z][a-zA-Z'-]+)+$/, "Invalid full name")
    .required("Full name is required"),
  email: Yup.string()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address")
    .required("Email is required"),
  dateBirth: Yup.date().required("Date of Birth is required"),
  source: Yup.string()
    .oneOf(["Social media", "Friends", "Found myself"])
    .required("Select a source"),
});
