import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/tasks">TaskMaster</Link>
      <Link to="/contacts">ConnectHub</Link>
      <Link to="/finance">MoneyFlow</Link>
    </nav>
  )
}