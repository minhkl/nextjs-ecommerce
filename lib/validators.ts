import * as z from "zod";

export const signInFormSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Please enter your email"),
  password: z.string().min(1, "Please enter password"),
});
