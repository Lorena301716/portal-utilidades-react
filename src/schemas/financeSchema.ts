import { z } from "zod"

export const financeSchema = z.object({
  description: z.string().min(1, "Descrição obrigatória"),
  value: z.coerce.number().positive("O valor deve ser maior que zero")
})

export type FinanceFormData = z.infer<typeof financeSchema>