import { z } from "zod";

const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    password_confirmation: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.password_confirmation, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });

type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;

export { ResetPasswordSchema, type ResetPasswordType };
