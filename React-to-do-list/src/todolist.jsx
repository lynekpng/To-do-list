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
              
            class="w-4 h-4 cursor-pointer appearance-none border border-gray-300 rounded-md mr-2 bg-white checked:bg-purple-200 checked:border-purple-300 checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%223%22%3E%3Cpath%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20d=%22M5%2013l4%204L19%207%22/%3E%3C/svg%3E')] checked:bg-center checked:bg-no-repeat"
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