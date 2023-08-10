import React, { useState } from 'react';

function AddCityForm({ addCity }) {
  const [cityName, setCityName] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName && timezone) {
      const newCity = {
        id: Date.now(),
        name: cityName,
        timezone: timezone,
      };
      addCity(newCity);
      setCityName('');
      setTimezone('');
    }
  };

  return (
    <form className="add-city-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter timezone (e.g. America/New_York)"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      />
      <button type="submit">Add City</button>
    </form>
  );
}

export default AddCityForm;