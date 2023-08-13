import '../App.css';
import React, { useState } from 'react';
import ClockList from './ClockList';
import AddCityForm from './AddCityForm';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useCityContext } from './contextapi/CityProvider';
import cityService from '../../src/services/API';
import SelectInput from './SelectInput';

function Home() {
  //const { cities, setCities } = useCityContext();
  const [cities, setCities] = useState([
    { id: 1, name: 'New York', timezone: 'America/New_York' },
    { id: 2, name: 'London', timezone: 'Europe/London' },
    { id: 3, name: 'Budapest', timezone: 'Europe/Budapest' },
    { id: 4, name: 'Calcutta', timezone: 'Asia/Calcutta' },
    { id: 5, name: 'Seoul', timezone: 'Asia/Seoul' },
    { id: 6, name: 'Dublin', timezone: 'Europe/Dublin' },
    { id: 7, name: 'Costa_Rica', timezone: 'America/Costa_Rica' },
    { id: 8, name: 'Istanbul', timezone: 'Asia/Istanbul' }
    // We can add more initial cities here
  ]);
  console.log('Home COM is rendering with cities:', cities);

  //Adding City By updating state.
  const addCity = (city) => {
    setCities([...cities, city]);
    console.log(cityService.addCity(city));
  };

  //removing the city based on cityId param which filters out the city with the specified cityId
  const removeCity = (cityId) => {
    setCities(cities.filter(city => city.id !== cityId));
    console.log(cityService.deleteCity(cityId));
    console.log(cityId);
  };

  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("admin-login");
  }

  

  return (
    <div className="App">
      <h1 style={{color:"white"}}>World Clock</h1>
      <br></br>
      <Button variant="contained" onClick={handleAdminLogin}>Admin Login</Button>
      <AddCityForm addCity={addCity} />
      <br></br>
      <ClockList cities={cities} removeCity={removeCity} />
      {/* <SelectInput/> */}
    </div>
  );
}

export default Home;