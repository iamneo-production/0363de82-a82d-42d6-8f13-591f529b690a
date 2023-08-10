import React from 'react';
import ClockItem from './ClockItem';

function ClockList({ cities, removeCity }) {
  return (
    <div className="clock-list">
      {cities.map(city => (
        <ClockItem key={city.id} city={city} removeCity={removeCity} />
      ))}
    </div>
  );
}

export default ClockList;