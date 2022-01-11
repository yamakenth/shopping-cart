import React from 'react';
import Logo from '../img/decentralize.png';
import ShoppingCart from '../img/shopping-bag.png';

export default function Header() {
  return (
    <div className='header'>
      <div className='container left'>
        <img src= {Logo} alt='' id='shop-logo' />
        <h1 className='shop-name'><span>Crypto</span>Store</h1>
      </div>
      <div className='container right'>
        <ul className='nav'>
          <li>Home</li>
          <li>Product</li>
          <li>Contact</li>
        </ul>
        <div className='cart'>
          <img src={ShoppingCart} alt='' id='shopping-cart' />
          <p className='item-cnt'>0</p>
        </div>
      </div>
    </div>
  );
}