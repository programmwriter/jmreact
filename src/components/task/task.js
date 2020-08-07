import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../timer';

import './task.css';

const Task = (props) => {
  const [date, setDate] = useState('');
  const [checked, setCheckedTask] = useState(false);  

  const { task } = props;
  const { created, completed } = task;

  useEffect(() => {
    const tick = () => {
      setDate(formatDistanceToNow(created, { includeSeconds: true }));
    };
    setCheckedTask(completed);
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [created, completed]);

  const onClickDelete = (event) => {
    event.stopPropagation();

    const {
      deleteTask,
      task: { id },
    } = props;

    if (event.target.classList.contains('icon-destroy')) {
      deleteTask(id);
    }
  };

  const onClickEdit = (event) => {
    event.stopPropagation();
    const {
      changeTaskToInput,
      task: { id },
    } = props;

    changeTaskToInput(id);
  };

  const onClickComplete = (event) => {
    event.stopPropagation();

    const {
      completeTask,
      task: { id },
    } = props;

    completeTask(id);

    setCheckedTask((prevChecked) => ({
      checked: !prevChecked,
    }));
  };
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={onClickComplete} checked={checked} />
      <label>
        <span role="button" className="description" onClick={onClickComplete} onKeyPress={onClickComplete} tabIndex="0">
          {task.description}
        </span>
        <Timer />
        <span className="created">{date ? `created ${date} ago` : 'just created'}</span>
      </label>
      <button aria-label="edit" type="button" className="icon icon-edit" onClick={onClickEdit} />
      <button aria-label="delete" type="button" className="icon icon-destroy" onClick={onClickDelete} />
    </div>
  );
};

Task.defaultProps = {
  task: {},
  deleteTask: () => {},
  completeTask: () => {},
  changeTaskToInput: () => {},
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    created: PropTypes.instanceOf(Date),
    completed: PropTypes.bool,
  }),
  deleteTask: PropTypes.func,
  changeTaskToInput: PropTypes.func,
  completeTask: PropTypes.func,
};

export default Task;
