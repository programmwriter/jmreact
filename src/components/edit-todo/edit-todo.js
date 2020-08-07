import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './edit-todo.css';

const EditTodo = (props) => {
  const [label, setLabel] = useState('');

  const onchangeLabel = (event) => {
    event.stopPropagation();
    const { value } = event.target;
    setLabel(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { id, editTask } = props;
    if (label.trim()) {
      editTask(id, label);
    }
    setLabel('');
  };

  const { placeholder } = props;
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="edit"
        placeholder={placeholder}
        onChange={onchangeLabel}
        onClick={(event) => event.stopPropagation()}
        value={label}
      />
    </form>
  );
};

export default EditTodo;

EditTodo.propTypes = {
  editTask: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};
