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
    .regex(/^[0-9]+$/, { message: "Phone must contain only numbers" })
    .min(11, { message: "Phone must be at least 11 digits" }),
});

type Phonetype = z.infer<typeof PhoneSchema>;

export { PhoneSchema, type Phonetype };
