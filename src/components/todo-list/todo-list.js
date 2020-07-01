import React, {Component} from "react";
import PropTypes from "prop-types";

import "./todo-list.css";

import Task from "../task";

export default class TodoList extends Component { 

  static defaultProps = {
    todos:[],
    deleteTask: () => {},
    completeTask: () => {},
    filter: 'all'
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object) ,
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
    filter: PropTypes.string
  }
    
  render(){

    const {todos, deleteTask, completeTask, filter} = this.props;

    const filteredTasks = todos.filter(todo => {
      if(filter === 'Completed'){
        return todo.completed === true;
      }if(filter === 'Active'){
        return todo.completed !== true;
      }
        return true;
      
    });

    const tasks = filteredTasks.map(task => {
      const { completed} = task;

        return (
          <li key = {task.id} className = { completed ? "completed" : null}>
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
