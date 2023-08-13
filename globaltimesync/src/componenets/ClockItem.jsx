
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { useCityContext } from './contextapi/CityProvider';

function ClockItem({ city, removeCity }) {
  const [currentTime, setCurrentTime] = useState('');
  //const { cities, setCities } = useCityContext();
  //console.log('ClockItem rendering with cities:', city);

  // UseEffect hook sets up recurring interval to update current time every second.
  // Library used: moment-timezone
  // It uses the tz method to convert the current time to the time zone of the displayed city and then formats it using format('hh:mm:ss A').
  useEffect(() => {
    const interval = setInterval(() => {
      const time = moment().tz(city.timezone).format('hh:mm:ss A');
      setCurrentTime(time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [city.timezone]);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{currentTime}</h6>
        <button className="btn btn-danger" onClick={() => removeCity(city.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ClockItem;