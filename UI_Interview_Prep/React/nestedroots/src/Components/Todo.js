import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTasks((prev) => [...prev, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <span>{task}</span>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
