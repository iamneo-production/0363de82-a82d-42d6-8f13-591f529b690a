import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import CityList from './componenets/CityList';
import AddCityForm from './componenets/AddCityForm';
import Test from './componenets/Test'

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/1" element={<Test />} />
      
    <Route path="/" element={<CityList />} />
    <Route path="/add" element={<AddCityForm />} />
    </Routes>  
    </Router>
    
  );
};

export default App;

