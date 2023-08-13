import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './homestyles.css';
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
    <div className="clock-item">
      <Card sx={{ maxWidth: 350 , height: 180}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{city.name}
          </Typography>
          <Typography variant="h4" color="text.secondary">  {currentTime}
          </Typography>
          </CardContent>
          <CardActions className='remove'>
            <Button onClick={() => removeCity(city.id)} size="small">Remove</Button>
          </CardActions>
        </Card>
      </div>
  );
}

export default ClockItem;