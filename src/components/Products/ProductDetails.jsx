import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    setCart((prevCart) => [...prevCart, product]);
    navigate('/cart', { state: { cart: [...cart, product] } });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={product.imageUrl}
            alt={product.product_name}
            className="img-fluid mb-4"
            style={{ maxHeight: '400px', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-8">
          <h1 className=" text-center mb-5">{product.product_name}</h1>
          <h3>Description : </h3>
          <p>{product.product_description}</p>
          <h3>Price : </h3>
          <p> $ {product.product_price}</p>
          <FaShoppingCart className="text-xl" />
          <button className="btn btn-primary btn-amazon" onClick={handleAddToCartClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
