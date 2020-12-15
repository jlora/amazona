import React from 'react';
import Rating from './Rating';

const Product = ({product}) => {
  return <div key={product._id} className="card">
    <a href={`/product/${product._id}`}>
      <img className="medium" src={product.image} alt={product.name} />
    </a>
    <div className="card-body">
      <a href={`/product/${product._id}`}>
        <h1>{product.name}</h1>
      </a>
      <Rating rating={product.rating} numReviews={product.numReviews} />
      <div className="price">${product.price}</div>
    </div>
  </div>
};

export default Product;
