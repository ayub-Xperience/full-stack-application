import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("email must be valid"),
  password:z.string()
    .min(8,"Password must be at least 8 characters")
    .max(100, "Password must be at most 100 characters")
    
});
