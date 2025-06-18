
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Formato de email inválido")
    .min(1, "Email é obrigatório"),
  password: z
    .string()
    .min(1, "Senha é obrigatória"),
});

export const registerSchema = z.object({
  email: z
    .string()
    .email("Formato de email inválido")
    .min(1, "Email é obrigatório"),
  password: z
    .string() 
    .min(3, "A senha deve ter pelo menos 3 caracteres") 
    .min(1, "Senha é obrigatória"), 
  confirmPassword: z
    .string()
    .min(1, "Confirmação de senha é obrigatória"), 
}).refine((data) => data.password === data.confirmPassword, {
 
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});