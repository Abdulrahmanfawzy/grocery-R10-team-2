import { z } from "zod";

const signUpSchema = z.object({
  usename: z.string().min(1, { message: "UserName is required" }),
  email: z.string().min(1, { message: "Email address is required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters longs" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should contain at least 1 special character",
    }),
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .regex(/^[0-9]+$/, { message: "Phone must contain only numbers" })
    .min(11, { message: "Phone must be at least 11 digits" }),
});
type signUpType = z.infer<typeof signUpSchema>;

export { signUpSchema, type signUpType };
