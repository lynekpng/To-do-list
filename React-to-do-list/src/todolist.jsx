import React from 'react';

function Todolist({ tasks, handleBoxChecked }) {
  return (
    <div >
      <h2 class="text-2xl">Todos </h2>
      <ul class="text-lg">
        {tasks.map((task, index) => (
          <li class="my-4" key={index}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleBoxChecked(index)}
             
            />
            <span>{task.title}</span>
            <span class={task.checked ? " py-0.5 px-2 m-2 bg-green-100 rounded-lg text-green-500 font-semibold" : "text-yellow-500 italic rounded-lg px-2 m-2 py-0.5 bg-yellow-100"}>
              {task.checked ? "finished !" : "working on it..."}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;