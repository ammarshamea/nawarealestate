import { z } from "zod";

export const leadFormSchema = z.object({
  interest: z.enum(["purchase", "investment", "partnership", "land", "services", "general"]),
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .min(9, "Valid phone required")
    .regex(/^(\+966|966|0)?5\d{8}$/, "Saudi mobile number required"),
  email: z.union([z.string().email(), z.literal("")]).optional(),
  privacy: z.boolean().refine((v) => v === true, { message: "Privacy consent required" }),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
