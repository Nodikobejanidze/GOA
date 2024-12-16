import React from "react";

const ProductCard = ({ name, description, price, likes }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>❤️ {likes} likes</p>
    </div>
  );
};

export default ProductCard;
