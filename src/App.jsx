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
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import OrderVerify from './Pages/Orders/OrderVerify';
import MyOrders from './Pages/Orders/MyOrders';
import Product from './Pages/Product/Product';
import SingleProductView from './Pages/Product/SingleProductView';

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
            <Route path='/place-order' element={<PlaceOrder/>} />
            <Route path='/verify' element={<OrderVerify/>} /> 
            <Route path='/myorders' element={<MyOrders/>} />
            <Route path='/products' element={<Product/>} />
            <Route path='/products/:id' element={<SingleProductView/>} />


          </Routes>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;