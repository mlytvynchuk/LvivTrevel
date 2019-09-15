import React from 'react';
import './InfoEvent.scss';

class InfoEvent extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <div className="infoEvent">
        <div className="infoEvent-header">
          <div className="eventImage">
            <img src={event.image} alt="" />
          </div>
          <div className="eventMainDescr">
            <h1>{event.name}</h1>
            <h3>{event.category}</h3>
            <div className="address-date">
              <div className="event-date">
                <i className="calendar alternate outline icon" />{event.date}
              </div>
              <div className="event-address">
                <i className="map outline icon" />{event.address}
              </div>
            </div>
          </div>
        </div>
        <div className="event-description">
          <p>{event.description}</p>
        </div>
      </div>
    );
  }
}

export default InfoEvent;
