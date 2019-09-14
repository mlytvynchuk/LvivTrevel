import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import posts from '../../api/events';


class Page extends React.Component {
  state = {
    events: posts,
    active: false,
  };
   categoryClick = (category) => {
    this.setState({
      active: !this.state.active,
      events: [...this.state.events].filter(event => event.category === category),
    })
  };

  render() {
    return (
      <>
        <Header />
        <Main events={this.state.events} categoryClick={this.categoryClick} active={this.state.active} />
        <Footer />
      </>
    );
  }
}

export default Page;
