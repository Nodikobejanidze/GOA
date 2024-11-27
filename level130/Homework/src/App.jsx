import React from 'react';
import ProductList from './components/ProductList';
import './index.css';

const App = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$999', description: 'High-performance laptop for professionals.' },
    { id: 2, name: 'Smartphone', price: '$699', description: 'A sleek smartphone with the latest features.' },
    { id: 3, name: 'Headphones', price: '$199', description: 'Noise-cancelling headphones for music lovers.' },
    { id: 4, name: 'Smartwatch', price: '$249', description: 'A smartwatch to keep you connected on the go.' },
  ];

  return (
    <div>
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
