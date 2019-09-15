import React from 'react';
import './SearchBar.scss';

var utc = new Date().toJSON().slice(0, 10);
class SearchBar extends React.Component {
  state = {
    opened: false,
    inputText: '',
    date: undefined,
  };

  toggleDropdown = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };



  render() {
    const { searchFunc } = this.props;
    
    return (
      <div className="search-bar">
        <i className="grey search icon"/>
        <input
          type="text"
          id="text"
          name="text-area"
          placeholder="Введіть подію, яку ви шукаєте  ❤"
          className="input-area-header"
          onChange={searchFunc}
        />
        <input
          type="date"
          min={utc}
          name="data-area"
          className="input-area-header data-area"
        />
      </div>
    );
  }
}

export default SearchBar;
