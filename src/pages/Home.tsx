import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Portal de Utilidades
      </h1>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        
        <Link
          to="/tasks"
          className="bg-blue-600 text-white p-10 rounded-2xl shadow-lg text-center text-xl font-semibold hover:scale-105 transition"
        >
          TaskMaster
        </Link>

        <Link
          to="/contacts"
          className="bg-green-600 text-white p-10 rounded-2xl shadow-lg text-center text-xl font-semibold hover:scale-105 transition"
        >
          ConnectHub
        </Link>

        <Link
          to="/finance"
          className="bg-purple-600 text-white p-10 rounded-2xl shadow-lg text-center text-xl font-semibold hover:scale-105 transition"
        >
          MoneyFlow
        </Link>

      </div>
    </div>
  )
}