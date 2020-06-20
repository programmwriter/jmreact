import React from "react";
import "./todo-list.css";

import Task from "../task";

const TodoList = ({todos}) => {
  
  const tasks = todos.map(task => {
    const {id, className, ...taskData} = task;
    return (
      <li className = {className}>
        <Task key = {id} task = { taskData }/>
      </li>
    );
  });
  return (
    <ul className="todo-list">
      {tasks}
    </ul>
  );
};

export default TodoList;
