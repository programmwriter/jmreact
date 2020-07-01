import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-todo.css';

export default class NewTodo extends Component {
  static defaultProps = {
    addNewTask: () => {},
  };

  static propTypes = {
    addNewTask: PropTypes.func,
  };

  state = {
    label: '',
  };

  onchangeLabel = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { addNewTask } = this.props;
    const { label } = this.state;
    addNewTask(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onchangeLabel} value={label} />
      </form>
    );
  }
}
