import React from 'react';

function Todolist({ tasks, handleBoxChecked }) {
  return (
    <div >
      <h2>Todos: </h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleBoxChecked(index)}
             
            />
            <span className={task.checked ? "  line-through" : ""}>{task.title}</span>
            <span>
              {task.checked ? " finished !" : "working on it..."}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;