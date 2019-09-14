import React from 'react';
import './SearchBar.scss';

function TodayDate() {
  let todayDate = '';
  let currentTime = new Date();
  let month = currentTime.getMonth() + 1;
  let day = currentTime.getDate();
  let year = currentTime.getFullYear();
  todayDate = month + '/' + day + '/' + year;
  return todayDate;
}

class SearchBar extends React.Component {
  state = {
    opened: false,
    inputText: '',
    date: TodayDate(),
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
          placeholder="Введіть подію, яку ви шукаєте  ❤"
          className="input-area-header"
        />
        <input
          type="date"
          min={this.state.date}
          name="data-area"
          className="input-area-header data-area"
        />
        <input
          type="submit"
          value="ПОШУК"
          className="btn-submit-search-header"
          onClick={this.clickSubmit}
        />
      </div>
    );
  }
}

export default SearchBar;
