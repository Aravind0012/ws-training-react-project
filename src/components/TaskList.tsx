import type React from "react"
import TaskItem from "./TaskItem"
import type { Task } from "../context/TaskContext"

interface TaskListProps {
  tasks: Task[]
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList

