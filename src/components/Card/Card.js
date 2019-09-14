import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <Link to="/event">
        <div className="ui card">
          <div className="image">
            <img src={event.image} />
          </div>
          <div className="content">
            <div className="header">{event.name}</div>
            <div className="meta">{event.date}</div>
            <div className="description">{event.description}</div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
