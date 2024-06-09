import * as z from "zod";

export const signInFormSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Please enter your email"),
  password: z.string().min(1, "Please enter password"),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email().min(1, "Please enter your email"),
    password: z.string().min(3, "Password must be at least 3 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
