import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="container">
      <h1 className="text-center mb-5">{product.name}</h1>
      <div className="row">
        <div className="col-md-4">
          <img src={product.imageUrl} alt={product.name} className="img-fluid mb-4" />
        </div>
        <div className="col-md-8">
          <h2>Description:</h2>
          <p>{product.description}</p>
          <h2>Price:</h2>
          <p>{product.price}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
