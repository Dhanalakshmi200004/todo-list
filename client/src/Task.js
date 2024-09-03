import React from "react";

const Task = ({ task, updateTask, deleteTask }) => {
  const handleToggle = () => {
    updateTask(task._id, { completed: !task.completed });
  };

  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <button onClick={handleToggle}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </li>
  );
};

export default Task;
