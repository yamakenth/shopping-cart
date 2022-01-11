import React from 'react';

export default function Product(props) {
  const coins = props.data;
  console.log(coins);

  return (
    <div className='product'>
      {coins.map((coin) => {
        return (
          <div key={coin.symbol} className='coin-container'>
            
            <h3>{coin.name}</h3>

          </div>
        );
      })}
    </div>
  );
}