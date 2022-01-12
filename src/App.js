import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Data from './data/data.json';
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

  const [cart, setCart] = useState({});
  function addToCart(symbol) {
    setCart(generateNewCart(symbol));
  }
  function clearCart() {
    setCart({});
  }

  function generateNewCart(symbol) {
    const newCart = cart;
    if (!(symbol in newCart)) {
      newCart[symbol] = 0;
    }
    newCart[symbol]++;

    return newCart;
  }

  const numItem = Object.values(cart).reduce((a, b) => a + b, 0);
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Header handleShowCart={handleShowCart} numItem={numItem} />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route 
              path='/product' 
              element={
                <Product 
                  data={Data} 
                  handleShowCart={handleShowCart} 
                  addToCart={addToCart}
                />
              } 
            />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        {showCart && 
          <Cart 
            handleHideCart={handleHideCart} 
            clearCart={clearCart}
            cart={cart} 
            data={Data} 
          />
        }
      </div>
    </BrowserRouter>
  );
}