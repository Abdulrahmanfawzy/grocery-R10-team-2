import { z } from "zod";

const LoginSchema = z.object({
  login: z
    .string()
    .min(1, { message: "Email address is required" })
    .email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters longs" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should contain at least 1 special character",
    }),
});
type signUpType = z.infer<typeof LoginSchema>;

export { LoginSchema, type signUpType };
