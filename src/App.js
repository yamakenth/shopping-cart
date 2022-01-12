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
    const newCart = cart;
    if (!(symbol in newCart)) {
      newCart[symbol] = 0;
    }
    newCart[symbol]++;
    setCart(newCart);
  }
  function clearCart() {
    setCart({});
  }
  function removeFromCart(symbol) {
    const newCart = {};
    for (const key in cart) {
      if (key !== symbol) {
        newCart[key] = cart[key];
      }
    }
    setCart(newCart);
  }
  function changeQty(symbol, newAmount) {
    const newCart = cart;
    for (const key in newCart) {
      if (key !== symbol) {
        newCart[key] = newAmount;
      }
    }
    setCart(newCart);
  }

  const numItem = Object.values(cart).reduce((a, b) => a + b, 0);
  
  // handle input on edit form
  function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
      setValue(e.target.value);
    }

    return {
      value,
      onChange: handleChange
    }
  }

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
            removeFromCart={removeFromCart}
            useInput={useInput}
            cart={cart} 
            data={Data} 
          />
        }
      </div>
    </BrowserRouter>
  );
}