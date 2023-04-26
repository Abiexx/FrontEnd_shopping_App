import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import shoppingCartservice from '../../services/shoppingCartService';
import { useAuth } from '../../store/AuthContext';

const ProductDetails = ({ product }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleAddToCartClick = async (e) => {
    e.preventDefault();

    try {
      // Create the shopping cart
      const cart = await shoppingCartservice.postCreateShoppingCart(currentUser.accessToken);
      console.log("shopping cart created res: ", cart);

      // Wait for 1 second before adding the product to the cart
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Add the product to the cart
      const productAdded = await shoppingCartservice.addProductToShoppingCart(currentUser.accessToken, product.product_id);
      console.log("product added to shopping cart res: ", productAdded);

      // Navigate to the cart page with the updated cart and product details
      navigate('/cartPage');
    } catch (err) {
      console.log("Error adding product to cart: ", err);
    }
  }

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
         
          {currentUser.role.toLowerCase() === 'seller' ? null : (
            <button className="btn btn-primary btn-amazon" onClick={handleAddToCartClick}>
              <FaShoppingCart className="text-xl" />
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
