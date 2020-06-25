import React, { Component } from "react";
import "./new-todo.css";

export default class NewTodo extends Component {
  state = {
    label: "",
  };

  onchangeLabel = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addNewTask } = this.props;
    addNewTask(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onchangeLabel}
          value={this.state.label}
        />
      </form>
    );
  }
}
