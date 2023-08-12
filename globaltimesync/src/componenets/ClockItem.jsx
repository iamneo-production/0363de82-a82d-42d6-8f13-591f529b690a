import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { useCityContext } from './contextapi/CityProvider';

function ClockItem({ city, removeCity }) {
  const [currentTime, setCurrentTime] = useState('');
  //const { cities, setCities } = useCityContext();
  console.log('ClockItem rendering with cities:', city);

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
    <div className="clock-item">
      <h2>{city.name}</h2>
      <p>{currentTime}</p>
      <button onClick={() => removeCity(city.id)}>Remove</button>
    </div>
  );
}

export default ClockItem;