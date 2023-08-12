import React, { useState } from 'react';
import axios from 'axios';

const AddCityForm = () => {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to add the city
    axios.post('/api/cities', { name: cityName })
      .then((response) => {
        console.log('City added successfully');
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form
    setCityName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Add City</button>
    </form>
  );
};

export default AddCityForm;