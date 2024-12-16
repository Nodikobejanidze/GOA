import React from 'react';

const ProductCard = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p><strong>Price:</strong> {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
