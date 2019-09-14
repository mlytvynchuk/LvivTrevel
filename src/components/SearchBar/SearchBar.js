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
        <div className="select-style" ref={ref => (this.button = ref)}>
          <button
            onClick={this.toggleDropdown}
            name="select-bar"
            id="button"
            className="category-input-header"
          >
            Category
          </button>
          <div
            className={`dropdown${this.state.opened === true ? ' open' : ''}`}
          >
            <div className="drop-links">Festivals</div>
            <div className="drop-links">Conferences</div>
            <div className="drop-links">Exhibition</div>
            <div className="drop-links">Concerts</div>
            <div className="drop-links">Other</div>
          </div>
        </div>
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
