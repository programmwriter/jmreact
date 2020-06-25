import React, { Component } from "react";
import "./filters.css";

export default class Filters extends Component {

  changeFilterState = (e) => {
    const { filterTasks } = this.props;
    filterTasks(e.target.innerText);
  };

  render() {
    return (
      <ul className="filters">
        <li>
          <button className="selected" onClick={this.changeFilterState}>
            All
          </button>
        </li>
        <li>
          <button onClick={this.changeFilterState}>Active</button>
        </li>
        <li>
          <button onClick={this.changeFilterState}>Completed</button>
        </li>
      </ul>
    );
  }
}
