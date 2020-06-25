import React, { Component } from "react";
import "./filters.css";

export default class Filters extends Component {

  changeFilterState = (event) => {
    const selectedBtn = event.target;
    
    const { filterTasks } = this.props;
    filterTasks(selectedBtn.innerText);

    const buttons = document.querySelectorAll(".filters  button");
    buttons.forEach(btn => {
      btn.classList.remove('selected')
    })
    selectedBtn.classList.add('selected');
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
