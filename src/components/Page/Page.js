import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import posts from '../../api/events';

class Page extends React.Component {
  state = {
    events: posts,
  };

  render() {
    return (
      <>
        <Header />
        <Main events={this.state.events} />
        <Footer />
      </>
    );
  }
}

export default Page;
