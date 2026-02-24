import { z } from "zod"

export const taskSchema = z.object({
  title: z.string().min(5, "O título deve ter no mínimo 5 caracteres"),
  category: z.enum(["Trabalho", "Pessoal", "Urgente"])
})

export type TaskFormData = z.infer<typeof taskSchema>