import React, {Component} from 'react';
import './footer.css';


import Filters from '../filters';
export default class Footer extends Component {
  render(){
    const {countActiveTasks, clearCompletedTasks} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{countActiveTasks} items left</span>
        <Filters filterTasks = {this.props.filterTasks}/>
        <button 
          className="clear-completed"
          onClick = {()=>{clearCompletedTasks()}}
          >Clear completed</button>
      </footer>
    )
  };
};