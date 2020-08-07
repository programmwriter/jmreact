import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './filters.css';

const Filters = (props) => {
  
  const [currentFilter, setCurrentFilter] = useState('All');

  const changeFilterState = (event) => {
    const selectedBtn = event.target;

    const { filterTasks } = props;
    filterTasks(selectedBtn.innerText);

    setCurrentFilter(selectedBtn.dataset.filter)    
  };


  const namesOfButtons = ['All', 'Active', 'Completed'];

  const filterButtons = namesOfButtons.map((el) => {
    const chahgeClassNameOfButton = () => {
      if (el === currentFilter) {
        return 'selected';
      }
      return '';
    };
    return (
      <li key={uuidv4()}>
        <button type="button" data-filter={el} className={chahgeClassNameOfButton()} onClick={changeFilterState}>
          {el}
        </button>
      </li>
    );
  });

  return <ul className="filters">{filterButtons}</ul>;

}
export default Filters;

Filters.propTypes = {
  filterTasks: PropTypes.func.isRequired
};
// export default class Filters extends Component {
//   static defaultProps = {
//     filterTasks: () => {},
//   };

//   static propTypes = {
//     filterTasks: PropTypes.func,
//   };

//   state = {
//     currentFilter: 'All',
//   };

//   changeFilterState = (event) => {
//     const selectedBtn = event.target;

//     const { filterTasks } = this.props;
//     filterTasks(selectedBtn.innerText);

//     this.setState({ currentFilter: selectedBtn.dataset.filter });
//   };

//   render() {
//     const namesOfButtons = ['All', 'Active', 'Completed'];
//     const { currentFilter } = this.state;

//     const filterButtons = namesOfButtons.map((el) => {
//       const chahgeClassNameOfButton = () => {
//         if (el === currentFilter) {
//           return 'selected';
//         }
//         return '';
//       };
//       return (
//         <li key={uuidv4()}>
//           <button type="button" data-filter={el} className={chahgeClassNameOfButton()} onClick={this.changeFilterState}>
//             {el}
//           </button>
//         </li>
//       );
//     });

//     return <ul className="filters">{filterButtons}</ul>;
//   }
// }
