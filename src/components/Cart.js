import React from 'react';

// currency formatter 
const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export default function Cart(props) {
  return (
    <div className='cart-popup'>
      <div className='cart-page'>
        <h3>YOUR BAG</h3>
        <div className='cart-item-display'>
          { 
            (Object.keys(props.cart).length > 0) ?
            Object.keys(props.cart).map((symbol) => {
              const coin = props.data.filter((obj) => obj.symbol === symbol)[0];
              return(
                <div key={symbol} className='cart-item'>
                  <div className='left'>
                    <img src={coin.logo} alt='' />
                  </div>
                  <div className='right'>
                    <p>{coin.name} ({coin.symbol.toUpperCase()})</p>
                    <p>{formatter.format(coin.price)}</p>
                    
                    <label>
                      Qty: 
                      <input type='number' value={props.cart[symbol]} />
                    </label>

                    <p className='remove-from-cart' onClick={() => props.removeFromCart(symbol)}>
                      Remove
                    </p>
                  </div>
                </div>
              );
            })
            :
            <p>Your cart is empty</p>
          }
        </div>
        <button 
          type='button' 
          className='checkout' 
          onClick={() => { props.handleHideCart(); props.clearCart(); }}
        >
          CHECKOUT
        </button>
        <button 
          type='button' 
          className='continue-shopping'  
          onClick={props.handleHideCart}
        >
          CONTINUE SHOPPING
        </button>
      </div>
      <div className='overlay' onClick={props.handleHideCart}></div>
    </div> 
  );
}