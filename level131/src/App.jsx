import React from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const products = [
    { id: 1, name: "Laptop", description: "Powerful laptop", price: 1500, likes: 120 },
    { id: 2, name: "Phone", description: "Smartphone with great camera", price: 800, likes: 95 },
    { id: 3, name: "Headphones", description: "Noise-cancelling headphones", price: 200, likes: 45 },
  ];

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
