import { z } from "zod"

export const financeSchema = z.object({
  description: z
    .string()
    .min(1, "Descrição obrigatória"),

  value: z.coerce
    .number()
    .min(0.01, "O valor deve ser maior que zero"),

  type: z
    .string()
    .min(1, "Selecione o tipo")
})

export type FinanceFormData = z.infer<typeof financeSchema>