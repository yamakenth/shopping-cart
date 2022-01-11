import React from 'react';

export default function Cart(props) {
  return (
    <div className='cart-popup'>
      <div className='cart-page'>
        <h3>Your Bag</h3>
        <button type='button' onClick={props.handleHideCart}>Back to Shopping</button>
      </div>
      <div className='overlay'></div>
    </div>  
  );
}