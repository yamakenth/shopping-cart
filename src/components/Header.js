import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/decentralize.png';
import ShoppingCart from '../img/shopping-bag.png';

export default function Header(props) {
  return (
    <div className='header'>
      <div className='container left'>
        <img src= {Logo} alt='' id='shop-logo' />
        <h1 className='shop-name'><span>Crypto</span>Store</h1>
      </div>
      <div className='container right'>
        <ul className='nav'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/product'>Product</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <div className='cart' onClick={props.handleShowCart}>
          <img src={ShoppingCart} alt='' id='shopping-cart' />
          <p className='item-cnt'>0</p>
        </div>
      </div>
    </div>
  );
}