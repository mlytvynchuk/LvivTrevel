import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import posts from './api/events';


class App extends React.Component {
  state = {
    events: posts,
  };

  render() {
    return (
      <div className="main">
        <Header />
        <Main events={this.state.events} />
      </div>
    );
  }
}

export default App;
