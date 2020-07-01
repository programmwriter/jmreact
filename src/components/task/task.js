import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

export default class Task extends Component {
  static defaultProps = {
    task: {},
    deleteTask: () => {},
    completeTask: () => {},
  }

  static propTypes = {
    task: PropTypes.object,
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
  }

  state = {
    checked: this.props.task.completed ? this.props.task.completed : false,
    CreatedDate: this.props.task.created,
    date: '',
  };

  onClickDelete = (event) => {
    event.stopPropagation();
    const {
      deleteTask,
      task: { id },
    } = this.props;

    if (event.target.classList.contains('icon-destroy')) {
      deleteTask(id);
    }
  };

  onClickComplete = (event) => {
    event.stopPropagation();

    const { completeTask, task: { id } } = this.props;

    completeTask(id);

    this.setState({
      checked: !this.state.checked,
    })
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: formatDistanceToNow(this.state.CreatedDate, { includeSeconds: true }) });
  }

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
          <span className="created">{`created ${this.state.date} ago`}</span>
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
