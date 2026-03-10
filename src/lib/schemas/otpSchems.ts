import z from "zod";

const OtpSchema = z.object({
  otp: z.string().length(4, "Please enter all 4 digits"),
});

type OtpSchemaType = z.infer<typeof OtpSchema>;
export { OtpSchema, type OtpSchemaType };
