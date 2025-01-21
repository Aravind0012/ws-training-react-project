import type { Task } from "../context/TaskContext"

const API_URL = "https://jsonplaceholder.typicode.com/todos"

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error("Failed to fetch tasks")
  }
  const data = await response.json()
  return data.slice(0, 10).map((task: any) => ({
    id: task.id,
    title: task.title,
    status: task.completed ? "Completed" : "Pending",
    priority: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
  }))
}

