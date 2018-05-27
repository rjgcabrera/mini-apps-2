import React from 'react';

var EventListItem = (props) => {
  var date = props.oneEvent.date;
  // if (date.includes('-')) {
  //   date = date.slice(1) + ' B.C.';
  // }
  if (date.includes('/')) {
    var dateArr = date.split('/');
    var tmp = dateArr.shift();
    dateArr.push(tmp);
    date = dateArr.join('/');
  }
  if (date.includes('-')) {
    var idx = date.indexOf('-');
    date = date.slice(0, idx) + date.slice(idx + 1) + ' B.C.';
  }

  return(
    <div className="event-list-item">
      <div className="place">{props.oneEvent.category2}</div>
      <div className="date">ca. {date}</div>
      <div>{props.oneEvent.description}</div>
    </div>)
};

export default EventListItem;
