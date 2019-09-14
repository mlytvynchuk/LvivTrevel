import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  state = {
    opened: false,
    inputText: '',
    date: '',
  };

  toggleDropdown = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  clickSubmit = () => {
    const text = document.getElementById('text').value;
    this.setState({
      inputText: text,
    });
  };

  render() {
    console.log(this.state.inputText);
    return (
      <div className="search-bar">
        <input
          type="text"
          id="text"
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
          onClick={this.clickSubmit}
        />
      </div>
    );
  }
}

export default SearchBar;
