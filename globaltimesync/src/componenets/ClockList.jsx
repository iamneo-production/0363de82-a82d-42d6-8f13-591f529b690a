import React from 'react';
import ClockItem from './ClockItem';
import { useCityContext } from './contextapi/CityProvider';

function ClockList({ cities, removeCity }) {
  //const { cities, setCities } = useCityContext();
  console.log('ClockList rendering with cities:', cities);
  return (
    <div className="clock-list">
      {cities.map(city => (
        <ClockItem key={city.id} city={city} removeCity={removeCity} />
      ))}
    </div>
  );
}

export default ClockList;