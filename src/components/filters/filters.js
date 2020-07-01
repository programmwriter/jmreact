import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './filters.css';

export default class Filters extends Component {
  static defaultProps = {
    filterTasks: () => {},
  };

  static propTypes = {
    filterTasks: PropTypes.func,
  };

  changeFilterState = (event) => {
    const selectedBtn = event.target;

    const { filterTasks } = this.props;
    filterTasks(selectedBtn.innerText);

    const buttons = document.querySelectorAll('.filters  button');
    buttons.forEach((btn) => {
      btn.classList.remove('selected');
    });
    selectedBtn.classList.add('selected');
  };

  render() {
    return (
      <ul className="filters">
        <li>
          <button type="button" className="selected" onClick={this.changeFilterState}>
            All
          </button>
        </li>
        <li>
          <button type="button" onClick={this.changeFilterState}>
            Active
          </button>
        </li>
        <li>
          <button type="button" onClick={this.changeFilterState}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
