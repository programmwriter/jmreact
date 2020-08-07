/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './app.css';

import NewTodo from '../new-todo';
import TodoList from '../todo-list';
import Footer from '../footer';

const App = () => {
  const [filter, setFilter] = useState('all');
  const createNewTask = (text) => {
    return {
      description: text,
      created: new Date(),
      editing: false,
      completed: false,
      id: Math.floor(Math.random() * 10000000000),
    };
  };
  const [todos, setTodos] = useState(() => {
    return [createNewTask('One'), createNewTask('Two'), createNewTask('Three')];
  });

  const addNewTask = (text) => {
    setTodos((prevTodos) => {
      const newArr = [...prevTodos, createNewTask(text)];
      return newArr;
    });
  };

  const completeTask = (id) => {
    setTodos((prevTodos) => {
      const idx = prevTodos.findIndex((el) => el.id === id);
      const { completed } = prevTodos[idx];
      const newTodos = [
        ...prevTodos.slice(0, idx),
        { ...todos[idx], completed: !completed },
        ...prevTodos.slice(idx + 1),
      ];

      return newTodos;
    });
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => {
      const idx = prevTodos.findIndex((el) => el.id === id);
      const newTodos = [...prevTodos.slice(0, idx), ...prevTodos.slice(idx + 1)];

      return newTodos;
    });
  };

  const editTask = (id, text = '') => {
    setTodos((prevTodos) => {
      const idx = prevTodos.findIndex((el) => el.id === id);
      const newTodos = [
        ...prevTodos.slice(0, idx),
        { ...prevTodos[idx], description: text, editing: false },
        ...prevTodos.slice(idx + 1),
      ];

      return newTodos;
    });
  };

  const changeEditingToFalse = () => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((el) => ({ ...el, editing: false }));
      return [...newTodos];
    });
  };

  const changeTaskToInput = (id) => {
    setTodos((prevTodos) => {
      const idx = prevTodos.findIndex((el) => el.id === id);
      const { editing } = prevTodos[idx];
      const newTodos = [...prevTodos.slice(0, idx), { ...todos[idx], editing: !editing }, ...prevTodos.slice(idx + 1)];

      return newTodos;
    });
  };

  const filterTasks = (state) => {
    setFilter(state);
  };

  const countActiveTasks = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const clearCompletedTasks = () => {
    const activeTasks = todos.filter((todo) => !todo.completed);
    setTodos(activeTasks);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <section className="app" onClick={changeEditingToFalse}>
      <header className="header">
        <h1>todos</h1>
        <NewTodo addNewTask={addNewTask} />
      </header>
      <section className="main">
        <TodoList
          todos={todos}
          completeTask={completeTask}
          deleteTask={deleteTask}
          filter={filter}
          changeTaskToInput={changeTaskToInput}
          editTask={editTask}
        />
      </section>
      <Footer
        filterTasks={filterTasks}
        countActiveTasks={countActiveTasks()}
        clearCompletedTasks={clearCompletedTasks}
      />
    </section>
  );
};

export default App;
