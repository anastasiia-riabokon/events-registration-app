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

export const schemaSearch = Yup.object({
  fullName: Yup.string()
    .test("is-empty-or-valid", "Invalid full name", (value) => {
      return value === "" || /^[A-Z][a-zA-Z'-]+(?: [A-Z][a-zA-Z'-]+)+$/.test(value);
    })
    .notRequired(),

  email: Yup.string()
    .test("is-empty-or-valid", "Invalid email address", (value) => {
      return value === "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    })
    .notRequired(),
});
