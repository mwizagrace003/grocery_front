import React from 'react';
import axios from "axios";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
