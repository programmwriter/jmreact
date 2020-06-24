import React, { Component } from "react";
import "./app.css";

import NewTodo from "../new-todo";
import TodoList from "../todo-list";
import Footer from "../footer";

export default class App extends Component {
  state = {
    todos: [
      {
        description: "Completed task",
        created: "created 17 seconds ago",
        completed: false,
        id: 0,
      },
      {
        description: "Editing task",
        created: "created 5 minutes ago",
        completed: false,
        id: 1,
      },
      {
        description: "Active task",
        created: "created 5 minutes ago",
        completed: false,
        id: 2,
      },
    ],
  };

  completeTask = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id);
      const { completed } = todos[idx];
      const newTodos = [
        ...todos.slice(0, idx),
        { ...todos[idx], completed: !completed },
        ...todos.slice(idx + 1),
      ];

      return {
        todos: newTodos,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id);
      const newTodos = [
        ...todos.slice(0, idx),
        ...todos.slice(idx + 1),
      ];

      return {
        todos: newTodos,
      };
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <section className ="app">
        <header className ="header">
          <h1>todos</h1>
          <NewTodo />
        </header>
        <section className ="main">
          <TodoList 
            todos = {todos}
            completeTask = {this.completeTask}
            deleteTask = {this.deleteTask} 
          />
        </section>
        <Footer />
      </section>
    );
  }
}
