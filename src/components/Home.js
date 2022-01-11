import React from 'react';
import { Link } from 'react-router-dom';
import Crypto from '../img/cryptos.jpeg';

export default function Home() {
  return (
    <div className='home'>
      <div className='intro-text'>
        <h1><span>INTUITIVE</span> WAY TO INVEST IN CRYPTOCURRENCY</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut. 
        </p>
        <Link to='/product' className='shop-now'>SHOP NOW</Link>
      </div>
      <img src={Crypto} alt='' id='crypto' />
    </div>
  );
}