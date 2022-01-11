import React from 'react';

export default function Cart(props) {
  return (
    <div className='cart-popup'>
      <div className='cart-page'>
        <h3>YOUR BAG</h3>
        <button type='button' onClick={props.handleHideCart}>CONTINUE SHOPPING</button>
      </div>
      <div className='overlay'></div>
    </div>  
  );
}