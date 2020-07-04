import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './edit-todo.css';

export default class EditTodo extends Component {
  static propTypes = {
    editTask: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  state = {
    label: '',
  };

  onchangeLabel = (event) => {
    event.stopPropagation();
    const { value } = event.target;
    this.setState({
      label: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { id, editTask } = this.props;
    const { label } = this.state;
    if (label.trim()) {
      editTask(id, label);
    }
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="edit"
          placeholder="Editing task"
          onChange={this.onchangeLabel}
          onClick={(event) => event.stopPropagation()}
          value={label}
        />
      </form>
    );
  }
}