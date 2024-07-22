import './App.css';

//import Navbar from './components/Navbar'
import Home from './components/Home'
import Reg from './components/Reg'
import Login from './components/Login'
import Contactus from './components/Contactus'
import Adminlogin from './components/Adminlogin';
import Adminafterlogin from './components/Adminafterlogin'
import Adminlogout from './components/Adminlogout';
import Userafterlogin from './components/Userafterlogin';
import Logout from './components/Logout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div align="center">
      <h1> REVO CLINIC </h1>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/userreg' element={<Reg />} />
          <Route path='/userlogin' element={<Login />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/adminafterlogin' element={<Adminafterlogin />} />
          <Route path='/adminlogout' element={<Adminlogout />} />
          <Route path='/userafterlogin' element={<Userafterlogin />} />
          <Route path='/userlogout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
