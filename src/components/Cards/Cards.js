import React from 'react';
import './Cards.scss';

import Card from '../Card/Card';

class Cards extends React.Component {

  getPaginationRange(){
    const { events } = this.props;
    var range = parseInt(events.length / 12)
    return range
  }
  render() {
    const { events } = this.props;

    return (
      <div>
      <div className="cards">
        {events.map((event, i) => (
          <Card event={event} index={i} />
        ))}
      </div>
      </div>
    )
  }
}

export default Cards;


