import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "../schemas/contactSchema"
import type { ContactFormData } from "../schemas/contactSchema"

export default function ConnectHub() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  function onSubmit(data: ContactFormData) {
    console.log(data)
    reset()
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ConnectHub</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <input
            {...register("name")}
            placeholder="Nome Completo"
            className="border p-2 w-full rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="E-mail"
            className="border p-2 w-full rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            placeholder="Telefone"
            className="border p-2 w-full rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Cadastrar
        </button>

      </form>
    </div>
  )
}