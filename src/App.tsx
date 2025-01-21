
import { TaskProvider } from "./context/TaskContext"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Task Management App</h1>
        <Dashboard />
      </div>
    </TaskProvider>
  )
}

export default App

