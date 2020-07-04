import React, {Component}  from 'react';
// import PropTypes from 'prop-types';

import './edit-todo.css';

export default class EditTodo extends Component {
  state = {
    label:''
  }

  onchangeLabel = (event) => {
    const {value} = event.target;
    this.setState({
      label : value
    })
  }

  onSubmit = () => {

  }

  render(){
    const { label } = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" className="edit" placeholder="Editing task" onChange={this.onchangeLabel} value={label} />
      </form>
    )
  }
}