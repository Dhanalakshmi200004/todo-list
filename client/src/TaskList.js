import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const addTask = (task) => {
    axios.post("http://localhost:5000/tasks", task).then((response) => {
      setTasks([...tasks, response.data]);
    });
  };

  const updateTask = (id, updatedTask) => {
    axios
      .put(`http://localhost:5000/tasks/${id}`, updatedTask)
      .then((response) => {
        setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
