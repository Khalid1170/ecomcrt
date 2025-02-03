import React from 'react';
import '../App.css'

const Cart = ({ cartItems, onRemoveItem, onClearCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <p>{item.name} - £{item.price} x {item.quantity}</p>
            <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button onClick={onClearCart}>Empty Cart</button>
    </div>
  );
};

export default Cart;