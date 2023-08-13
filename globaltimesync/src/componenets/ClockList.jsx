import React from 'react';
import ClockItem from './ClockItem';
import Grid from '@mui/material/Grid';
import { useCityContext } from './contextapi/CityProvider';

function ClockList({ cities, removeCity }) {
  //const { cities, setCities } = useCityContext();
  console.log('ClockList rendering with cities:', cities);
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  return (
    <div className="clock-list">
     <Grid sx={{ flexGrow: 1 }} container spacing={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}> 
      {cities.map(city => (
        <ClockItem key={city.id} city={city} removeCity={removeCity} />
      ))}
    </Grid>
  </Grid>
  </Grid>
    </div>
  );
}

export default ClockList;