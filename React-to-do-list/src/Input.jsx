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
      />
      <button onClick={handleAddTask}>Add Task</button>
    
    </div>
  );
}

export default Input;
