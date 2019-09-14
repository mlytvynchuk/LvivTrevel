import React from "react";
import './FilterElem.scss';
// import posts from '../../api/events;

class FilterElem extends React.Component {
  categoryClass = () => (
    this.props.active
      ? 'activeCategory category'
      : 'nonActiveCategory category'
  );

  iconClass = () => (
    this.props.active
      ? 'green times icon'
      : 'times icon'
  );
  render() {
    const {
      category,
      categoryClick,
    } = this.props;
    return (
      <div className={this.categoryClass()} onClick={() =>categoryClick(category)}>
        <i className={this.iconClass()}/>
        <span>{ category }</span>
      </div>
    );
  }
}

export default FilterElem;
