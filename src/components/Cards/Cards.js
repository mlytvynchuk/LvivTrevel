import React from 'react';
import './Cards.scss';

import Card from '../Card/Card';

class Cards extends React.Component {
  render() {
    const { events } = this.props;

    return (
      <div className="cards">
        {events.map(event => (
          <Card event={event} />
        ))}
      </div>
    )
  }
}

export default Cards;


