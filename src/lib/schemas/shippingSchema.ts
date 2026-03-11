import { z } from "zod";

export const shippingSchema = z.object({
  // Contact Info
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Please enter a valid email"),

  // Delivery Info
  deliveryMethod: z.enum(["delivery", "pickup"]),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  province: z.string().min(1, "Province is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  scheduleDelivery: z.enum(["now", "later"]),
  deliverySpeed: z.enum(["standard", "priority"]),
  estimatedArrival: z.string().optional(),

  // Notes
  noteOne: z.string().optional(),
  noteTwo: z.string().optional(),
  noteThree: z.string().optional(),
  noteFour: z.string().optional(),
});

export type ShippingFormData = z.infer<typeof shippingSchema>;
