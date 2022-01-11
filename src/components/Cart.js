import React from 'react';

export default function Cart(props) {
  return(
    <div className='cart-popup'>
      {
        props.showCart? 
        <div>
          <div className='cart-page'>Cart Popup</div>
          <div className='overlay'></div>
        </div>
        :
        <div></div>
      }
    </div>
  );
}