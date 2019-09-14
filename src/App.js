import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';


import posts from './api/events';

import Main from './components/Main/Main';

class App extends React.Component {
  state = {
    events: posts,
  };

  render() {
    return (
      <div className="main">
        <Main events={this.state.events} />
      </div>
    );
  }
}

export default App;
