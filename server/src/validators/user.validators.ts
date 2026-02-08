import * as yup from "yup";

export const registerInput = yup.object({
  email: yup
    .string()
    .trim()
    .email("Invalid email!!!")
    .required("Email is required!!!"),

  username: yup
    .string()
    .trim()
    .min(3, "Use something longer!!!")
    .max(20, "Too long a username!!!")
    .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscores allowed")
    .required("User name required"),

  password: yup
    .string()
    .min(8, "Password should be at least 8 characters long!!!")
    .matches(
      /[A-Z]/,
      "Password should contain at least one uppercase letter!!!",
    )
    .matches(/[a-z]/, "Password should contain at least one lowercase letter")
    .matches(/d/, "Password should contain at least one digit!!!")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character",
    ),
});

export const loginInput = yup.object({
  identifier: yup.string().required("Please provide username or email!!!"),
  password: yup.string().required("Please provide password!!!"),
});

//Creating types for the both validators
export type RegisterInput = yup.InferType<typeof registerInput>;

export type LoginInput = yup.InferType<typeof loginInput>;
