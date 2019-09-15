import React from 'react';
import './Event.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import InfoEvent from '../InfoEvent/InfoEvent';
import Card from "../Card/Card";

let index = 0;
class Event extends React.Component {
  state = {
    events: [],
  };

  componentDidMount () {
    index = this.props.match.params.index;
    console.log(index);

    fetch(`http://localhost:8000/api/events/`).then(response =>
      response.json().then(result => {
        this.setState({
          events: result,
        });
      })
    );
  };

  render() {
    const events  = this.state.events;
    console.log(events);

    return (
      <div className="event">
        <Header />
          {events.map(elem =>
           events[index] === elem ? <InfoEvent event={elem} /> : undefined
          )}
        <Footer />
      </div>
    );
  }
}

export default Event;
