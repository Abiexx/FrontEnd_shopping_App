import React, { useState } from 'react';
import { FaCloudMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState([]);
console.log("inside cart out map------------------", cartItems[0]);
cartItems.map((item) => {
  console.log("inside cart isnide map ------------------", item.productName);
})
  const handleQuantityChange = (item, change) => {
    const newItems = cartItems.map((cartItem) => {
      if (cartItem.productName === item.productName) {
        return { ...cartItem, quantity: cartItem.quantity + change };
      }
      return cartItem;
    });

    setItems(newItems);
  };

  const handleRemoveClick = (item) => {
    const newItems = cartItems.filter((cartItem) => cartItem.productName !== item.productName);

    setItems(newItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">My Cart</h1>
      <div className="row">
        <div className="col-md-9">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={item.imageUrl} alt={item.productName} className="img-fluid me-2" style={{ maxWidth: '150px' }} />
                        <div>
                          <h5>{item.productName}</h5>
                          <button className="btn btn-link" onClick={(e) => handleRemoveClick(item)} >
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    
                   <td>
                      <div className="input-group">
                        
                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(item, -1)}>
                          -
                        </button>
                        <input type="number" className="form-control text-center" value={item.quantity=1} readOnly/>
                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(item, 1)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Cart Total  </h5>
              <p className="card-text">${calculateTotalPrice().toFixed(2)}</p>
              <Link to="/checkoutform" className="btn btn-primary btn-block">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
