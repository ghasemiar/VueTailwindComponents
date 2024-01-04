import { validationHelper } from "./../../helper/ValidationHelpr";
import * as Yup from "yup";
export const useUserValidator = () => {
  const phoneRegex = new RegExp(
    "^(09|۰۹)[0-9|۰-۹]{3}[0-9|۰-۹]{3}[0-9|۰-۹]{3}$"
  );
  const { getInputProps } = validationHelper({
    firstName: { label: "firstName", name: "firstName" },
    lastName: { label: "lastName", name: "lastName" },
    username: { label: "username", name: "username" },
    email: { label: "email", type: "email", name: "email" },
    password: { label: "password", type: "password", name: "password" },
    confirmPassword: {
      label: "confirmPassword",
      type: "password",
      name: "confirmPassword",
    },
    phone: { label: "phone", type: "tel", name: "phone" },
  });
  const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), undefined],
      "Passwords must match"
    ),
    phone: Yup.string().matches(phoneRegex, "Phone number is not valid"),
  });
  const schemaCreate = schema;
  return { getInputProps, schemaCreate, schema };
};
