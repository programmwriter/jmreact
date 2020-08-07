import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './new-todo.css';

const NewTodo = (props) => {
  const [label, setLabel] = useState('');  

  const onchangeLabel = ({target:{value}}) => {
    setLabel(value);
  };

  const onSubmit = (event) => {

    event.preventDefault();
    const { addNewTask } = props;
    if (label.trim()) {
      addNewTask(label);
    }

    setLabel(label);
  };

  
  return (
    <form onSubmit={onSubmit}>
      <input className="new-todo" placeholder="What needs to be done?" onChange={onchangeLabel} value={label} />
    </form>
  );

}

export default NewTodo;

NewTodo.defaultProps = {
  addNewTask: () => {},
};

NewTodo.propTypes = {
  addNewTask: PropTypes.func,
};





