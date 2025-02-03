import React from 'react';
import '../App.css'

const Top = ({ cartItems }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <header className="Top">
      <p>Items in Cart: {totalItems}</p>
      <p>Total Price: £{totalPrice.toFixed(2)}</p>
    </header>
  );
};

export default Top;