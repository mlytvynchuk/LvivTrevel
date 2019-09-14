import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <div className="ui card">
        <div className="image">
          <img src={event.image} />
        </div>
        <div className="content">
          <div className="header">{event.name}</div>
          <div className="meta">{event.date}</div>
          <div className="description">
            {event.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
