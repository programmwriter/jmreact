import React, {Component} from 'react';
import './task.css';

export default class Task extends Component {

  onClickDelete = (event) => {
    event.stopPropagation();    
    const {deleteTask, task:{id}} = this.props;

    if(event.target.classList.contains("icon-destroy")){
      deleteTask(id);  
    }    
  }
  onClickComplete = (event) => {
    event.stopPropagation();    
    const {completeTask, task:{id}} = this.props;

    if(event.target.classList.contains("toggle")){
      completeTask(id);  
    }    
  }

  render(){
    const { task} = this.props;
    return (    
      <div className="view">
        <input className="toggle" type="checkbox" onClick = { this.onClickComplete}/>
        <label>
          <span className="description">{task.description}</span>
          <span className="created">{ task.created }</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick = { this.onClickDelete}></button>
      </div>
    );
  }
};
