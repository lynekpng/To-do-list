import React, { useState } from "react";

function Input({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a new task to do..."
        value={newTask}
        onChange={handleInputChange} 
        class="border-2 border-blue-100 rounded-lg py-0.5 px-2 m-2" 
      />
      <button class=" border-2 border-blue-100 bg-blue-200 rounded-lg px-2 py-0.5 m-2 text-blue-900" onClick={handleAddTask}>Add Task</button>
    
    </div>
  );
}

export default Input;
