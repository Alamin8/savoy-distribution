import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Pages/About/About'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const App = () => {


  return (
    <div className='app-main'>
      <Navbar/>
      <div className="app__container">
        <Sidebar/>
        <div className="container">
          <Routes>
            <Route path='' element={<Home/>} />
            <Route path='savoy-distribution' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

          </Routes>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;