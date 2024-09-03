import React from "react";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
