import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  consoleType: z.string().min(1, "Please select a console model"),
  issueDescription: z.string().min(10, "Please provide more detail about the issue"),
  contactInfo: z.string().min(5, "Please provide valid contact information"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
