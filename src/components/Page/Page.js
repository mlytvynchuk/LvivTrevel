import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import posts from '../../api/events';

const dataArr = [...posts];
class Page extends React.Component {
  state = {
    events: [...posts],
    active: false,
    indexElem: undefined,
  };
   categoryClick = (category, index) => {
    this.setState( (prevState) => ({
      indexElem: prevState.indexElem === index ? undefined : index,
      active: !this.state.active,
      events: this.state.active ? [...dataArr] : [...dataArr].filter(event => event.category === category),
    }));
   };
  render() {
    return (
      <>
        <Header />
        <Main events={this.state.events} categoryClick={this.categoryClick} indexItem={this.state.indexElem}/>
        <Footer />
      </>
    );
  }
}

export default Page;
