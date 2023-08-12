import './App.css';
import Home from './componenets/Home';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './componenets/AdminLogin';
import SystemAdminPage from './componenets/SystemAdminPage';
import { CityProvider } from './componenets/contextapi/CityProvider';

function App() {
  
  return (
    
    <div className="App">
      <CityProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="admin-login" element={<AdminLogin/>}/>
        <Route path="system-admin" element={<SystemAdminPage/>}/>
      </Routes>
      </CityProvider>
    </div>
  );
}

export default App;