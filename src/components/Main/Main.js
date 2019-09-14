import React from 'react';
import './Main.scss';

import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';

// add button all events;

const categoriesArray = [
  "Фестивалі",
  "Концерти",
  "Вистави",
  "Конференції",
  "Вистави",
  "Інше"
];

class Main extends React.Component {
  state = {
    categories: categoriesArray,
  };

  render() {
    const { events } = this.props;

    return (
      <>
        <Filters categories={this.state.categories} />
        <Cards events={events} />
      </>

    )
  }
}

export default Main;
