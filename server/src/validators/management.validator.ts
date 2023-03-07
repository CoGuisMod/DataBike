import { z } from "zod";

export const createUserSchema = z.object({
  first_name: z.string({
    required_error: "First name is required.",
    invalid_type_error: "First name must be a string.",
  }),
  last_name: z.string({
    required_error: "Last name is required.",
    invalid_type_error: "Last name must be a string.",
  }),
  username: z
    .string({
      required_error: "Username is required.",
      invalid_type_error: "Username must be a string.",
    })
    .endsWith("@databike", {
      message: "The username should end with '@databike'.",
    }),
  password: z
    .string({
      required_error: "Password is required.",
      invalid_type_error: "Password must be a string.",
    })
    .min(8, { message: "Password should be atleast 8 characters long." }),
  role: z.enum(["admin", "super_admin", "cashier", "mechanic"], {
    required_error: "Role is required.",
  }),
});

export const readUserSchema = z.object({
  _id: z.string({
    required_error: "User id is required.",
    invalid_type_error: "User id must be a string.",
  }),
});

export const updateUserSchema = z.object({
  _id: z.string({
    required_error: "User id is required.",
    invalid_type_error: "User id must be a string.",
  }),
  first_name: z.string({
    required_error: "First name is required.",
    invalid_type_error: "First name must be a string.",
  }),
  last_name: z.string({
    required_error: "Last name is required.",
    invalid_type_error: "Last name must be a string.",
  }),
  username: z
    .string({
      required_error: "Username is required.",
      invalid_type_error: "Username must be a string.",
    })
    .endsWith("@databike", {
      message: "The username should end with '@databike'.",
    }),
  password: z
    .string({
      invalid_type_error: "Password must be a string.",
    })
    .min(8, { message: "Password should be atleast 8 characters long." })
    .optional(),
  role: z.enum(["admin", "super_admin", "cashier", "mechanic"], {
    required_error: "Role is required.",
  }),
});

export const deleteUserSchema = z.object({
  _id: z.string({
    required_error: "User id is required.",
    invalid_type_error: "User id must be a string.",
  }),
});
