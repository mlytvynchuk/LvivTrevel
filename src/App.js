import React from 'react';
import './App.scss';
import Header from './components/Header/Header';

import posts from './api/events';

import Main from './components/Main/Main';

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
