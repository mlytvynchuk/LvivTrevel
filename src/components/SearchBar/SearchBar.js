import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  state = {
    opened: false,
  };

  toggleDropdown = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          name="text-area"
          placeholder="Write event you find ❤"
          className="input-area-header"
        />
        <input
          type="date"
          name="data-area"
          className="input-area-header data-area"
        />
        <input
          type="submit"
          value="START SEARCHING"
          className="btn-submit-search-header"
        />
      </div>
    );
  }
}

export default SearchBar;
