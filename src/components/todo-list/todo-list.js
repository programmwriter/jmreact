import React, {Component} from "react";
import "./todo-list.css";

import Task from "../task";

export default class TodoList extends Component { 

  
  render(){
    const {todos, deleteTask, completeTask} = this.props;
    const tasks = todos.map(task => {
      const { completed, ...taskData} = task;
        return (
          <li key = {taskData.id} className = {completed ? "completed" : null}>
            <Task 
              task = { taskData } 
              deleteTask = {deleteTask}
              completeTask = {completeTask}
            />
          </li>
        );
    });

    return (
      <ul className="todo-list">
        {tasks}
      </ul>
    );  
  }
  
};
