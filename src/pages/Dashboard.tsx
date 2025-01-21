import type React from "react"
import { useState } from "react"
import TaskList from "../components/TaskList"
import TaskForm from "../components/TaskForm"
import { useTaskContext } from "../context/TaskContext"

const Dashboard: React.FC = () => {
  const { state } = useTaskContext()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredTasks = state.tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "All" || task.status === statusFilter),
  )

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="p-2 border rounded mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="p-2 border rounded" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      {state.isLoading ? <p>Loading tasks...</p> : <TaskList tasks={filteredTasks} />}
      <TaskForm />
    </div>
  )
}

export default Dashboard

