import '../App.css';
import React, { useState } from 'react';
import ClockList from './ClockList';
import AddCityForm from './AddCityForm';
import { useNavigate } from 'react-router-dom';
import { useCityContext } from './contextapi/CityProvider';
import cityService from '../../src/services/API';
import SelectInput from './SelectInput';

function Home() {
  //const { cities, setCities } = useCityContext();
  const [cities, setCities] = useState([
    { id: 1, name: 'New York', timezone: 'America/New_York' },
    { id: 2, name: 'London', timezone: 'Europe/London' },
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
      <h1>World Clock</h1>
      <ClockList cities={cities} removeCity={removeCity} />
      <AddCityForm addCity={addCity} />
      <button onClick={handleAdminLogin}>Login to Admin</button>
      {/* <SelectInput/> */}
    </div>
  );
}

export default Home;