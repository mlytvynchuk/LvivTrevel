import React from 'react';
import './Filters.scss';
import FilterElem from '../FilterElem/FilterElem';

class Filters extends React.Component {

  render() {
    const {
      categories,
      events,
      categoryClick,
      active,
    } = this.props;
    return (
      <div className="filtersBlock">
        {categories.map(elem => (
          <FilterElem category={elem} events={events} categoryClick={categoryClick} active={active} />
        ))}
      </div>
    );
  }
}

export default Filters;
