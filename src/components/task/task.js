import React, { Component } from "react";
import "./task.css";

export default class Task extends Component {

  state = {
    checked: this.props.task.completed? this.props.task.completed : false
  };

  onClickDelete = (event) => {
    event.stopPropagation();
    const {
      deleteTask,
      task: { id },
    } = this.props;

    if (event.target.classList.contains("icon-destroy")) {
      deleteTask(id);
    }
  };

  onClickComplete = (event) => {
    event.stopPropagation();

    const { completeTask, task: { id }} = this.props;
    
    completeTask(id);
    
    this.setState({
      checked: !this.state.checked
    })
    
  };

  

  render() {
    const { task } = this.props;
    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={this.onClickComplete}
          checked={this.state.checked}
        />
        <label>
          <span className="description" onClick={this.onClickComplete}>
            {task.description}
          </span>
          <span className="created">{task.created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={this.onClickDelete}
        ></button>
      </div>
    );
  }
}
