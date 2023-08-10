import './App.css';
import React, { useState } from 'react';
import ClockList from './componenets/ClockList';
import AddCityForm from './componenets/AddCityForm';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: 'New York', timezone: 'America/New_York' },
    { id: 2, name: 'London', timezone: 'Europe/London' },
    // We can add more initial cities here
  ]);

  //Adding City By updating state.
  const addCity = (city) => {
    setCities([...cities, city]);
  };

  //removing the city based on cityId param which filters out the city with the specified cityId
  const removeCity = (cityId) => {
    setCities(cities.filter(city => city.id !== cityId));
  };

  return (
    <div className="App">
      <h1>World Clock</h1>
      <ClockList cities={cities} removeCity={removeCity} />
      <AddCityForm addCity={addCity} />
    </div>
  );
}

export default App;

