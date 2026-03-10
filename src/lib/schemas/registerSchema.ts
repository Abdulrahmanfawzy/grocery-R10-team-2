import { z } from "zod";

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "UserName is required" })
      .max(100, { message: "userName Not Vaild" }),
    email: z.string().min(1, { message: "Email address is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    agree_terms: z.number().refine((val) => val === 1, {
      message: "You must agree to the terms and conditions.",
    }),

    phone: z
      .string()
      .min(1, { message: "Phone is required" })
      .regex(/^\+\d{7,15}$/, {
        message:
          "Please enter a valid phone number with country code (e.g., +1234567890)",
      }),
    password_confirmation: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.password_confirmation, {
    message: "Password and Confirm Password does not match",
    path: ["password_confirmation"],
  });
type signUpType = z.infer<typeof signUpSchema>;

export { signUpSchema, type signUpType };
