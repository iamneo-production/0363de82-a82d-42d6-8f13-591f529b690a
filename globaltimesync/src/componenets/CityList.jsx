import React, { useEffect, useState } from 'react';
import CityCard from './CityCard'
import cityService from '../services/API';

const CityList = () => {
  const [cities, setCities] = useState([
    { "id": 1, "name": "New York", "timezone": "America/New_York" },
    { "id": 2, "name": "London", "timezone": "Europe/London" }
  ]);

  useEffect(() => {
    // Fetch the list of cities from the API
    cityService.getCities()
      .then((cities) => {
        console.log(cities);
        setCities(cities);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default CityList;















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CityCard from './CityCard'
// import cityService from '../services/API';

// const CityList = () => {
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     // Fetch the list of cities from the API
//     axios.get('/api/cities')
//       .then((response) => {
//         setCities(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       {cities.map((city) => (
//         <CityCard key={city.id} city={city} />
//       ))}
//     </div>
//   );
// };

// export default CityList;