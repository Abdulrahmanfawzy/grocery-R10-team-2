import { z } from "zod";

const changePasswordSchema = z
  .object({
    current_password: z
      .string()
      .min(1, { message: "Current password is required" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/.*[0-9].*/, {
        message: "Password must contain at least one number",
      }),

    password_confirmation: z
      .string()
      .min(1, { message: "Please confirm your new password" }),
  })
  .refine((input) => input.password === input.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

export { changePasswordSchema, type ChangePasswordFormData };