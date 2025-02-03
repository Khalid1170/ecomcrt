import React, { useState, useEffect } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import Total from './components/Total';
import './App.css';

const App = () => {
  // Initial list of products
  const [products] = useState([
    { id: 1, name: "T-Shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
    { id: 3, name: "Sneakers", price: 60 },
    { id: 4, name: "Hat", price: 15 },
    { id: 5, name: "Socks", price: 5 }
  ]);

  // State for the cart, search query, and search/filter input
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Effect to load the cart from local storage if it exists
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart); // Set the cart state from local storage
    }
  }, []);

  // Effect to save the cart to local storage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart to local storage
    }
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // If product exists, add to its quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If product doesn't exist in the cart,+1 to quantity
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove a product from the cart by ID
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id)); // Remove product with matching ID
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCart([]); // Clears the entire cart leaving no products setting to default state
  };

  // Function to update the search query state based on user input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Updates the search query
  };

  // Filter products based on search query (case-insensitive)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Total cartItems={cart} />

      <Product
        products={filteredProducts} // Pass filtered products to the Product component
        onAddToCart={addToCart} // Pass addToCart function as prop
        searchQuery={searchQuery} // Pass current search query to the Product component
        handleSearch={handleSearch} // Pass handleSearch function to handle search input changes
      />

      <Cart cartItems={cart} onRemoveItem={removeItem} onClearCart={clearCart} />
    </div>
  );
};

export default App;
