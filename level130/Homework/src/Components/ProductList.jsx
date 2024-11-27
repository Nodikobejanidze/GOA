import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
          description={product.description} 
        />
      ))}
    </div>
  );
};

export default ProductList;
