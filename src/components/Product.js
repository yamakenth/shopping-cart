import React from 'react';
import { Link } from 'react-router-dom';

// currency formatter 
const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export default function Product(props) {
  const coins = props.data;

  return (
    <div className='product'>
      {coins.map((coin) => {
        return (
          <div key={coin.symbol} className='coin-container'>
            <h3>{coin.name}</h3>
            <img src={coin.logo} alt='' className='coin-logo'/>
            <div className='price-row'>
              <h4>{coin.symbol.toUpperCase()}</h4>
              <h4>{formatter.format(coin.price)}</h4>
            </div>
            <Link to='/product' className='buy-now'>SHOP NOW</Link>
          </div>
        );
      })}
    </div>
  );
}
