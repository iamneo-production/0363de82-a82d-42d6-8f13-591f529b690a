import React, { createContext, useContext, useState } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  console.log('City Provider is rendering with cities:', cities);

  return (
    <CityContext.Provider value={{ cities, setCities }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityContext = () => useContext(CityContext);
