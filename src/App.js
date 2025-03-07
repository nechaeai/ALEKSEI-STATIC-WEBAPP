import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">To-Do List</h2>
        
        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full p-2 rounded-l-lg border-none focus:outline-none text-black"
            placeholder="Add a new task..."
          />
          <button onClick={addTask} className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600">
            Add
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-gray-700 rounded-lg">
              <span
                onClick={() => toggleTask(index)}
                className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)} className="text-red-400 hover:text-red-500">
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
