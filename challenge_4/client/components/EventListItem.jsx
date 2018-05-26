import React from 'react';

var EventListItem = (props) => {

  return(
    <div className="event-list-item">
      <div>Place: {props.oneEvent.category2}</div>
      <div>Date: {props.oneEvent.date}</div>
      <div>Description: {props.oneEvent.description}</div>
    </div>)
};

export default EventListItem;
