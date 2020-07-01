import React from 'react';
import './footer.css';
import PropTypes from "prop-types";
import Filters from '../filters';

const  Footer = (props) =>  {
   
  const { countActiveTasks, clearCompletedTasks, filterTasks } = props;
  return (
    <footer className="footer">
      <span className="todo-count">{countActiveTasks} items left</span>
      <Filters filterTasks = {filterTasks}/>
      <button
      type = "button"
        className="clear-completed"
        onClick = {() => { clearCompletedTasks() }}
        >Clear completed</button>
    </footer>
  )
  
}
Footer.defaultProps = {
  countActiveTasks: 0,
  clearCompletedTasks: () => {},
  filterTasks: () => {},
}

Footer.propTypes = {
  countActiveTasks: PropTypes.number,
  clearCompletedTasks: PropTypes.func,
  filterTasks: PropTypes.func,
}
export default Footer;