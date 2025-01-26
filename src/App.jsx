import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Pages/About/About'
import Cart from './Pages/Cart/Cart'
import Footer from './Components/Footer/Footer';

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

          </Routes>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;