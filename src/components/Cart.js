import React from 'react';

export default function Cart(props) {
  if (props.showCart) {
    return (
      <div>
        <div className='cart-page'>Cart Popup</div>
        <div className='overlay'></div>
      </div>
    );
  } else {
    return <div></div>;
  }
}