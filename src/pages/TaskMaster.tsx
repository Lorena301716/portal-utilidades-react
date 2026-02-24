import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { taskSchema } from "../schemas/taskSchema"
import type { TaskFormData } from "../schemas/taskSchema"
import { useEffect, useState } from "react"

export default function TaskMaster() {
  const [tasks, setTasks] = useState<TaskFormData[]>([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      category: "Trabalho"
    }
  })

  // Carregar tarefas do localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Salvar tarefas no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onSubmit(data: TaskFormData) {
    setTasks([...tasks, data])
    reset({ title: "", category: "Trabalho" })
  }

  function removeTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">TaskMaster</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-8">
        <div>
          <input
            {...register("title")}
            placeholder="Título da tarefa"
            className="border p-2 w-full rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <select
            {...register("category")}
            className="border p-2 w-full rounded"
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Urgente">Urgente</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </form>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white shadow p-3 rounded"
          >
            <span>
              {task.title} - {task.category}
            </span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-600 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
