import React from 'react';
import './Cards.scss';

import Card from '../Card/Card';

class Cards extends React.Component {

  getPaginationRange(){
    const { events } = this.props;
    var range = parseInt(events.length / 12)
    return range
  }
  render() {
    const { events } = this.props;

    return (
      <div>
      <div className="cards">
        {events.map(event => (
          <Card event={event} />
        ))}
      </div>
      
      <div aria-label="Pagination Navigation" role="navigation" class="ui pagination menu" style={{display:"flex", justifyContent:"center"}}>
  <a
    aria-current="false"
    aria-disabled="false"
    tabindex="0"
    value="1"
    aria-label="Previous item"
    type="prevItem"
    class="item"
  >
    ⟨
  </a>
  <a
    aria-current="true"
    aria-disabled="false"
    tabindex="0"
    value="1"
    type="pageItem"
    class="active item"
  >
    1
  </a>
  <a aria-current="false" aria-disabled="false" tabindex="0" value="2" type="pageItem" class="item">
    2
  </a>
  <a aria-current="false" aria-disabled="false" tabindex="0" value="3" type="pageItem" class="item">
    3
  </a>
  <a
    aria-current="false"
    aria-disabled="false"
    tabindex="0"
    value="2"
    aria-label="Next item"
    type="nextItem"
    class="item"
  >
    ⟩
  </a>
</div>
<br/>
      </div>
    )
  }
}

export default Cards;


