import React, { useState } from 'react';
import { useCityContext } from './contextapi/CityProvider';

function SystemAdminPage() {
  const { cities, setCities } = useCityContext();
  //const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState('');
  const [newTimeZone, setNewTimeZone] = useState('');

  const handleAddCity = () => {
    if (newCity && newTimeZone) {
      const newCityInfo = { id: Math.floor(Math.random() * 100000), name: newCity, timezone: newTimeZone };
      setCities([...cities, newCityInfo]);
      setNewCity('');
      setNewTimeZone('');
      console.log(cities);
    }
  };

  const handleDeleteCity = (cityToDelete) => {
    const updatedCities = cities.filter(cityInfo => cityInfo.id !== cityToDelete);
    setCities(updatedCities);
  };

  return (
    <div className="system-admin-page">
      <h2>System Administrator Page</h2>
      <div className="city-list">
        <h3>City List</h3>
        <ul>
          {cities.map(cityInfo => (
            <li key={cityInfo.id}>
              <span>{cityInfo.name} - {cityInfo.timezone}</span>
              <button onClick={() => handleDeleteCity(cityInfo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-city-form">
        <h3>Add New City</h3>
        <input
          type="text"
          placeholder="City Name"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Time Zone"
          value={newTimeZone}
          onChange={(e) => setNewTimeZone(e.target.value)}
        />
        <button onClick={handleAddCity}>Add City</button>
      </div>
    </div>
  );
}

export default SystemAdminPage;