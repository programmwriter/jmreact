import React from 'react';
import './task.css';

const Task = ({task})=> {
  return (    
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">{task.description}</span>
        <span className="created">{ task.created }</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};

export default Task;