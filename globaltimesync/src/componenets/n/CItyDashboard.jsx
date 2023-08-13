import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import cityService from '../../services/API';
import './city.css';
const CityDashboard = ({ apiUrl }) => {
  const [cities, setCities] = useState([]);
  const [newCityName, setNewCityName] = useState('');
  const [newCityTimezone, setNewCityTimezone] = useState('');
  // Fetch cities from API on component mount
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await cityService.getCities();
        setCities(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCities();
  }, [apiUrl]);

  // Handle new city name change
  const handleNewCityNameChange = (event) => {
    setNewCityName(event.target.value);
  };

  // Handle new city timezone change
  const handleNewCityTimezoneChange = (event) => {
    setNewCityTimezone(event.target.value);
  };

  // Handle add city
  const handleAddCity = () => {
    if (newCityName && newCityTimezone) {
      setCities((prevCities) => [
        ...prevCities,
        {
          id: prevCities.length + 1,
          name: newCityName,
          timezone: newCityTimezone,
        },
      ]);
      setNewCityName('');
      setNewCityTimezone('');
    }
  };

  // Handle delete city
  const handleDeleteCity = (cityId) => {
    setCities((prevCities) => prevCities.filter((city) => city.id !== cityId));
    console.log(cityService.deleteCity(cityId));
  };

  return (
    <div className="container">
      <h1 style={{color:"white",paddingTop:"100px"}}>CITY DASHBOARD</h1>
      <div className="mb-3">
        <form>
        <label htmlFor="newCityName" className="form-label">
          City Name
        </label>
        <input
          type="text"
          className="form-control"
          id="newCityName"
          value={newCityName}
          onChange={handleNewCityNameChange}
        />
        <label htmlFor="newCityTimezone" className="form-label">
          City Timezone
        </label>
        <input
          type="text"
          className="form-control"
          id="newCityTimezone"
          value={newCityTimezone}
          onChange={handleNewCityTimezoneChange}
        />
     <button className="btn btn-primary" onClick={handleAddCity}>
        ADD CITY
      </button>
      </form>
      </div>
      <table className="table table-hover table-light">
        <thead>
        <tr class="table-active">
            <th>ID</th>
            <th>Name</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.name}</td>
              <td>{moment().tz(city.timezone).format('hh:mm:ss A')}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteCity(city.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default CityDashboard;