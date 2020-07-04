import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './todo-list.css';

import Task from '../task';
import EditTodo from '../edit-todo';

export default class TodoList extends Component {
  static defaultProps = {
    todos: [],
    deleteTask: () => {},
    completeTask: () => {},
    editTask: () => {},
    changeTaskToInput: () => {},
    filter: 'all',
  };

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
    editTask: PropTypes.func,
    changeTaskToInput: PropTypes.func,
    filter: PropTypes.string,
  };

  render() {
    const { todos, deleteTask, completeTask, editTask, filter, changeTaskToInput } = this.props;

    const filteredTasks = todos.filter((todo) => {
      if (filter === 'Completed') {
        return todo.completed === true;
      }
      if (filter === 'Active') {
        return todo.completed !== true;
      }
      return true;
    });

    const tasks = filteredTasks.map((task) => {
      const { completed, editing } = task;

      const changeClassNameOfListItem = () => {
        if (editing) {
          return 'editing';
        }
        if (completed) {
          return 'completed';
        }
        return null;
      };

      return (
        <li key={task.id} className={changeClassNameOfListItem()}>
          <Task task={task} deleteTask={deleteTask} completeTask={completeTask} changeTaskToInput={changeTaskToInput} />
          <EditTodo id={task.id} editTask={editTask} />
        </li>
      );
    });

    return <ul className="todo-list">{tasks}</ul>;
  }
}
