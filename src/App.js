import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import Cart from './components/Cart';

export default function App() {
  const [showCart, setShowCart] = useState(false);
  function handleShowCart() {
    setShowCart(true);
  }
  function handleHideCart() {
    setShowCart(false);
  }
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Header handleShowCart={handleShowCart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {showCart && <Cart handleHideCart={handleHideCart} />}
      </div>
    </BrowserRouter>
  );
}