import React, { Component } from "react";
import PropTypes from "prop-types";
import "./new-todo.css";

export default class NewTodo extends Component {

  static defaultProps = {
    addNewTask: () => {}
  }

  static propTypes = {
    addNewTask: PropTypes.func
  }


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
