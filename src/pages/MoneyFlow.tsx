import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { financeSchema } from "../schemas/financeSchema"
import type { FinanceFormData } from "../schemas/financeSchema"
import { useState } from "react"

export default function MoneyFlow() {
  const [items, setItems] = useState<FinanceFormData[]>([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FinanceFormData>({
    resolver: zodResolver(financeSchema) as any
  })

  const onSubmit: SubmitHandler<FinanceFormData> = (data) => {
    setItems((prev) => [...prev, data])
    reset()
  }

  const total = items.reduce((acc, item) => acc + item.value, 0)

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">MoneyFlow</h1>

      <h2 className="text-xl font-semibold mb-6">
        Saldo Total: R$ {total.toFixed(2)}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-8">
        <div>
          <input
            {...register("description")}
            placeholder="Descrição"
            className="border p-2 w-full rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            step="0.01"
            {...register("value")}
            placeholder="Valor"
            className="border p-2 w-full rounded"
          />
          {errors.value && (
            <p className="text-red-500 text-sm">
              {errors.value.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </form>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between bg-white shadow p-3 rounded"
          >
            <span>{item.description}</span>
            <span>R$ {item.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}