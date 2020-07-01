import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

export default class Task extends Component {
  static defaultProps = {
    task: {},
    deleteTask: () => {},
    completeTask: () => {},
  };

  static propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      created: PropTypes.instanceOf(Date),
      completed: PropTypes.bool,
    }),
    deleteTask: PropTypes.func,
    completeTask: PropTypes.func,
  };

  state = {
    date: '',
  };

  componentDidMount() {
    const {
      task: { created, completed },
    } = this.props;

    this.setState({
      checked: completed || false,
      CreatedDate: created,
    });

    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

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

    const {
      completeTask,
      task: { id },
    } = this.props;

    completeTask(id);

    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };

  tick() {
    this.setState((prevState) => ({
      date: formatDistanceToNow(prevState.CreatedDate, { includeSeconds: true }),
    }));
  }

  render() {
    const { task } = this.props;
    const { checked, date } = this.state;
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={this.onClickComplete} checked={checked} />
        <label>
          <span
            role="button"
            className="description"
            onClick={this.onClickComplete}
            onKeyPress={this.onClickComplete}
            tabIndex="0"
          >
            {task.description}
          </span>
          <span className="created">{`created ${date} ago`}</span>
        </label>
        <button aria-label="edit" type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={this.onClickDelete} aria-label="delete" />
      </div>
    );
  }
}
