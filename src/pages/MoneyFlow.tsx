import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { financeSchema } from "../schemas/financeSchema"
import type { FinanceFormData } from "../schemas/financeSchema"
import { useState } from "react"

// componente principal da página de fluxo de caixa
// funciona como um mini sistema de registros financeiros
export default function MoneyFlow() {
  // lista de lançamentos cadastrados pelo usuário
  const [items, setItems] = useState<FinanceFormData[]>([])

  // hooks do react-hook-form para controlar o formulário
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FinanceFormData>({
    // zodResolver inferência produz `unknown` para value antes da coerção;
    // fazemos cast para contornar incompatibilidade de tipos.
    resolver: zodResolver(financeSchema) as any
  })

  // chamada quando o formulário é enviado com sucesso
  const onSubmit = (data: FinanceFormData) => {
    setItems((prev) => [...prev, data])
    reset() // limpa os campos após adicionar
  }

  // calcula o saldo total a partir dos lançamentos
  const total = items.reduce((acc, item) => {
    if (item.type === "entrada") {
      return acc + item.value
    }

    return acc - item.value // saída de dinheiro
  }, 0)

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

        <div>
          <select
            {...register("type")}
            className="border p-2 w-full rounded"
          >
            <option value="">Selecione o tipo</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>

          {errors.type && (
            <p className="text-red-500 text-sm">
              {errors.type.message}
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
            <span>
              {item.description} ({item.type})
            </span>

            <span
              className={
                item.type === "entrada"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              R$ {item.value.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}