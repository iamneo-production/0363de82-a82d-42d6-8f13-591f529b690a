import React from 'react';
import ClockItem from './ClockItem';
import { useCityContext } from './contextapi/CityProvider';

function ClockList({ cities, removeCity }) {
  //const { cities, setCities } = useCityContext();
  console.log('ClockList rendering with cities:', cities);
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">World Clock</h1>
      <div className="row">
        {cities.map(city => (
          <div className="col-sm-6 col-md-4 col-lg-3">
            <ClockItem key={city.id} city={city} removeCity={removeCity} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClockList;