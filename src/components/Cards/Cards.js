import React from 'react';
import './Cards.scss';

import Card from '../Card/Card';

class Cards extends React.Component {
  render() {
    const { events } = this.props;

    return (
      <div className="cards">
        {events.map((event, i) => (
          <Card event={event} index={i} />
        ))}
      </div>
    )
  }
}

export default Cards;


