import React from "react";
import "./app.css";

import NewTodo from "../new-todo";
import TodoList from "../todo-list";
import Footer from "../footer";

function App() {
  const todos = [
    {
      description: "Completed task",
      created: "created 17 seconds ago",
      className: "completed",
      id: 0,
    },
    {
      description: "Editing task",
      created: "created 5 minutes ago",
      className: "completed",
      id: 1,
    },
    {
      description: "Active task",
      created: "created 5 minutes ago",
      className: "completed",
      id: 2,
    },
  ];

  return (
    <section className="app">
      <header className="header">
        <h1>todos</h1>
        <NewTodo />
      </header>
      <section className="main">
        <TodoList todos={todos} />
      </section>
      <Footer />
    </section>
  );
}

export default App;
