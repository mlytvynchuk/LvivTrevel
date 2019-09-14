import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class Page extends React.Component {
  state = {
    events: [],
    active: false,
  };
  categoryClick = category => {
    this.setState({
      active: !this.state.active,
      events: [...this.state.events].filter(
        event => event.category === category
      ),
    });
  };

  componentDidMount() {
    fetch(`http://localhost:8000/api/events/`).then(response =>
      response.json().then(result => {
        this.setState({
          events: result,
        });
      })
    );
  }

  render() {
    return (
      <>
        <Header />
        <Main
          events={this.state.events}
          categoryClick={this.categoryClick}
          active={this.state.active}
        />
        <Footer />
      </>
    );
  }
}

export default Page;
