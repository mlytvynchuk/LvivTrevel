import React from 'react';
import './Main.scss';

import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';

// add button all events;

const categoriesArray = [
  "Фестивалі",
  "Концерти",
  "Виставки",
  "Конференції",
  "Вистави",
  "Інше"
];

class Main extends React.Component {
  state = {
    categories: categoriesArray,
  };

  render() {
    const {
      events,
      categoryClick,
      active,
    } = this.props;
    console.log(events);
    return (
      <>
        <Filters categories={this.state.categories} events={events} categoryClick={categoryClick} active={active}/>
        <Cards events={events} />
      </>

    )
  }
}

export default Main;
