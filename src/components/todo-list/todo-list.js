import React, {Component} from "react";
import "./todo-list.css";

import Task from "../task";

export default class TodoList extends Component { 

    
  render(){

    const {todos, deleteTask, completeTask, filter} = this.props;

    const filteredTasks = todos.filter(todo => {
      if(filter === 'Completed'){
        return todo.completed === true;
      }else if(filter === 'Active'){
        return todo.completed !== true;
      }else{
        return true;
      }
    });

    const tasks = filteredTasks.map(task => {
      const { completed} = task;

        return (
          <li key = {task.id} className = {completed ? "completed" : null}>
            <Task 
              task = { task } 
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
