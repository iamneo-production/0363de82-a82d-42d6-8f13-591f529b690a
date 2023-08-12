
import { Card, CardContent, Typography } from '@material-ui/core';
import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';

const CityCard = ({ city }) => {
  const [currentTime, setCurrentTime] = useState('');

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
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {city.name}
        </Typography>
        <Typography color="textSecondary">
          Current Time: {currentTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CityCard;