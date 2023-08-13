import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cityService from '../services/API';

const SelectInput = ({ apiUrl }) => {
  const [options, setOptions] = useState([
    {
      "id": 561,
      "name": "Ponape",
      "timezone": "Pacific/Ponape"
    },
    {
      "id": 562,
      "name": "Port_Moresby",
      "timezone": "Pacific/Port_Moresby"
    },
    {
      "id": 563,
      "name": "Rarotonga",
      "timezone": "Pacific/Rarotonga"
    },
    {
      "id": 564,
      "name": "Saipan",
      "timezone": "Pacific/Saipan"
    },
    {
      "id": 565,
      "name": "Samoa",
      "timezone": "Pacific/Samoa"
    },
    {
      "id": 566,
      "name": "Tahiti",
      "timezone": "Pacific/Tahiti"
    },
    {
      "id": 567,
      "name": "Tarawa",
      "timezone": "Pacific/Tarawa"
    },
    {
      "id": 568,
      "name": "Tongatapu",
      "timezone": "Pacific/Tongatapu"
    }// We can add more initial cities here
  ]);
  const [selectedValue, setSelectedValue] = useState('');
  const [error, setError] = useState(null);

  // Fetch options from API on component mount
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await cityService.getCities();
        if (Array.isArray(response)) {
          setOptions(...options,response[40]);
        } else {
          setError('Invalid response from API');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchOptions();
  }, [apiUrl]);

  // Handle option selection
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <input type="text" value={selectedValue} readOnly />
      <select onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
