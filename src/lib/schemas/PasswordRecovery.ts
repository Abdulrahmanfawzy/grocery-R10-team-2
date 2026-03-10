import { z } from "zod";

const EmailSchema = z.object({
  email: z.string().min(1, { message: "Email address is required" }).email(),
});
type EmailSchematype = z.infer<typeof EmailSchema>;

export { EmailSchema, type EmailSchematype };

const PhoneSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .regex(/^\+\d{7,15}$/, {
      message:
        "Please enter a valid phone number with country code (e.g., +1234567890)",
    })
});

type Phonetype = z.infer<typeof PhoneSchema>;

export { PhoneSchema, type Phonetype };
