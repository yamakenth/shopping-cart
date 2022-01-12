import React from 'react';

export default function Cart(props) {
  return (
    <div className='cart-popup'>
      <div className='cart-page'>
        <h3>YOUR BAG</h3>


        <p>{JSON.stringify(props.cart)}</p>
        {
          Object.keys(props.cart).map((symbol) => {
            return(
              <div key={symbol}>
                <p>bought: {symbol}</p>
                <p>{JSON.stringify(props.data.filter((obj) => obj.symbol === symbol)[0])}</p>
              </div>
            );
          })
        }

        <button type='button' onClick={() => { props.handleHideCart(); props.clearCart(); }}>
          CHECKOUT
        </button>
        <button type='button' onClick={props.handleHideCart}>CONTINUE SHOPPING</button>
      </div>
      <div className='overlay' onClick={props.handleHideCart}></div>
    </div> 
  );
}