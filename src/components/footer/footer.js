import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css';

import Filters from '../filters';

export default class Footer extends Component {
  static defaultProps = {
    countActiveTasks: 0,
    clearCompletedTasks: () => {},
    filterTasks: () => {},
  }

  static propTypes = {
    countActiveTasks: PropTypes.number,
    clearCompletedTasks: PropTypes.func,
    filterTasks: PropTypes.func,
  }

  render() {
    const { countActiveTasks, clearCompletedTasks, filterTasks } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{countActiveTasks} items left</span>
        <Filters filterTasks = {filterTasks}/>
        <button
          className="clear-completed"
          onClick = {() => { clearCompletedTasks() }}
          >Clear completed</button>
      </footer>
    )
  }
}