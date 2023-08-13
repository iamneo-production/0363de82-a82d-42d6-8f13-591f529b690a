import React, { useState, useEffect } from 'react';
import cityService from '../services/API';
import cityservice from '../services/API'; // import the cityservice module
import Header from './Headercomp';

function CitySearch({ addCity }) {
  const [searchText, setSearchText] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [newCities, setNewCities] = useState([]);

  useEffect(() => {
    // fetch cities from the API service
    cityservice.getCities().then((data) => {
      setCities(data);
      console.log(data,"city search");
    });
  }, []);

  // filter cities based on the entered search text
  const filteredCities = cities.filter((city) =>
    city.timezone.toLowerCase().includes(searchText.toLowerCase())
  );

  // handle city selection
  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setSearchText(city.name); // update search text with selected city name
  };

  // handle button click
  const handleButtonClick = () => {
    if (selectedCity) {
      // create city object
      const cityObject = {
        id: selectedCity.id,
        name: selectedCity.name,
        timezone: selectedCity.timezone,
      };
      setNewCities((prevCities) => [cityObject, ...prevCities]);
      addCity(cityObject);
    }
  };

  return (
    <>
      {/* <Header /> */}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a city"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <ul className="list-group">
              {filteredCities.slice(0,5).map((city) => (
                <li
                  key={city.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  onClick={() => handleCitySelection(city)}
                >
                  {city.name} ---
                  {city.timezone}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleButtonClick}
            >
              Add
            </button>
          </div>
        </div>
        <h2>Added Cities</h2>
        <ul className="list-group">
          {newCities.map((city) => (
            <li key={city.id} className="list-group-item">
              {city.name} ---
              {city.timezone}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default CitySearch;
