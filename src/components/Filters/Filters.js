import React from 'react';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map(elem => (
          <li>{elem}</li>
        ))}
      </ul>
    );
  }
}

export default Filters;
