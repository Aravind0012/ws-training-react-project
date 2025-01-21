import type React from "react"
import { useState } from "react"
import { useTaskContext } from "../context/TaskContext"

const TaskForm: React.FC = () => {
  const { dispatch } = useTaskContext()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("Low")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "Pending" as const,
      priority: priority as "Low" | "Medium" | "High",
    }

    dispatch({ type: "ADD_TASK", payload: newTask })
    setTitle("")
    setDescription("")
    setPriority("Low")

    // Display success notification
    alert("Task added successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label htmlFor="title" className="block">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="description" className="block">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <div>
        <label htmlFor="priority" className="block">
          Priority:
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm

