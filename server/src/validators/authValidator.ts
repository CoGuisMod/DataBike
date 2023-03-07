import { z } from "zod";

export const loginSchema = z.object({
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
});
