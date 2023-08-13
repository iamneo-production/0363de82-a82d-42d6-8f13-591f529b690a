import '../App.css';
import React, { useEffect, useState } from 'react';
import ClockList from './ClockList';
import AddCityForm from './AddCityForm';
import { useNavigate } from 'react-router-dom';
import { useCityContext } from './contextapi/CityProvider';
import cityService from '../../src/services/API';
import SelectInput from './SelectInput';
import CitySearch from './CitySearch';

function Home() {
  //const { cities, setCities } = useCityContext();
  const [cities, setCities] = useState([]);
  console.log('Home COM is rendering with cities:', cities);
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await cityService.getUserData();
        setCities(response);
        console.log(response,"response from ");
      } catch (error) {
        console.error(error);
      }
    };
    fetchCities();
  },[]);


  //Adding City By updating state.
  const addCity = (city) => {
    setCities([...cities, city]);
    // console.log(cityService.addCity(city));
  };

  //removing the city based on cityId param which filters out the city with the specified cityId
  const removeCity = (cityId) => {
    setCities(cities.filter(city => city.id !== cityId));
    // console.log(cityService.deleteCity(cityId));
    console.log(cityId);
  };

  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("admin");
  }

  

  return (
    <div className="App">
      {/* <h1>World Clock</h1> */}
      <ClockList cities={cities} removeCity={removeCity} />
      {/* <AddCityForm addCity={addCity} /> */}
      {/* <button onClick={handleAdminLogin}>Login to Admin</button> */}
      {/* <SelectInput/> */}
      <CitySearch addCity={addCity} />
    </div>
  );
}

export default Home;