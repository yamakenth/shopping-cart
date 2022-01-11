import React from 'react';

export default function Cart(props) {
  if (props.showCart) {
    return (
      <div>
        <div className='cart-page'>
          <h3>Your Bag</h3>
          <button type='button' onClick={props.handleShowCart}>Back to Shopping</button>
        </div>
        <div className='overlay'></div>
      </div>
    );
  } else {
    return <div></div>;
  }
}