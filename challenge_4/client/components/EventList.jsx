import React from 'react';
import EventListItem from './EventListItem.jsx';

var EventList = (props) => (
  <div id="event-list">
    {props.events.map((oneEvent, index) => {
      return <EventListItem oneEvent={oneEvent} key={index} />;
    })}
  </div>
);

export default EventList;
