import type React from "react"
import { useTaskContext } from "../context/TaskContext"
import type { Task } from "../context/TaskContext"

interface TaskItemProps {
  task: Task
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { dispatch } = useTaskContext()

  const handleStatusUpdate = () => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { ...task, status: "Completed" },
    })
  }

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id })
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      {task.status === "Pending" && (
        <button onClick={handleStatusUpdate} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
          Mark as Completed
        </button>
      )}
      <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded">
        Delete
      </button>
    </div>
  )
}

export default TaskItem

