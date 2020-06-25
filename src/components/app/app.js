import React, { Component } from "react";
import "./app.css";

import NewTodo from "../new-todo";
import TodoList from "../todo-list";
import Footer from "../footer";

export default class App extends Component {
  id = 100;
  state = {
    filter: "all",
    todos: [
      this.createNewTask("Completed task"),
      this.createNewTask("Editing task"),
      this.createNewTask("Active task")
    ],
  };

  createNewTask(text){
    return {
      description: text,
      created: "created 5 minutes ago",
      completed: false,
      id: this.id++,
    };
  };

  addNewTask = (text) => {
    
    this.setState(({ todos }) => {
      const newArr = [...todos, this.createNewTask(text)];
      return {
        todos: newArr
      } 
    });
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
      const newTodos = [...todos.slice(0, idx), ...todos.slice(idx + 1)];

      return {
        todos: newTodos,
      };
    });
  };

  filterTasks = (state) => {
    this.setState({
      filter:state
    });
  }

  countActiveTasks = () => {
    const {todos} = this.state;
    return todos.filter(todo =>!todo.completed).length;
  }

  clearCompletedTasks = () => {
    const {todos} = this.state;    
    const activeTasks = todos.filter(todo =>!todo.completed);
    this.setState({
      todos:activeTasks
    });
  }

  render() {
    const { todos, filter } = this.state;
    return (
      <section className="app">
        <header className="header">
          <h1>todos</h1>
          <NewTodo addNewTask={this.addNewTask} />
        </header>
        <section className="main">
          <TodoList
            todos={todos}
            completeTask={this.completeTask}
            deleteTask={this.deleteTask}
            filter = {filter}
          />
        </section>
        <Footer 
          filterTasks = {this.filterTasks}
          countActiveTasks = {this.countActiveTasks()}
          clearCompletedTasks = {this.clearCompletedTasks}
          />
      </section>
    );
  }
}
