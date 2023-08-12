import React, { createContext, useContext } from 'react';

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const cities = // Fetch cities from the API

  return (
    <CityContext.Provider value={cities}>
      {children}
    </CityContext.Provider>
  );
};
