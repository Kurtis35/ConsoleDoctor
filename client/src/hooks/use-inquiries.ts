import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";

export function useCreateInquiry() {
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit inquiry");
      }

      return res.json();
    },
  });
}
