import React from 'react';
import '../App.css';

const Product = ({ products, onAddToCart, searchQuery, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul className="products">
        {products.map(product => (
          <li key={product.id} className="li">
            <h3>{product.name}</h3>
            <p>Price: £{product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
