// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const CartPage = () => {
//   const location = useLocation();
//   const [cart, setCart] = useState(location.state.cart);
  
//   const incrementQuantity = (productId) => {
//     // find the product in the cart
//     const productIndex = cart.findIndex((product) => product.product_id === productId);

//     // create a copy of the cart array
//     const updatedCart = [...cart];

//     // increment the product quantity
//     updatedCart[productIndex].quantity++;

//     // set the updated cart in state
//     setCart(updatedCart);
//   };

//   const decrementQuantity = (productId) => {
//     // find the product in the cart
//     const productIndex = cart.findIndex((product) => product.product_id === productId);

//     // create a copy of the cart array
//     const updatedCart = [...cart];

//     // decrement the product quantity
//     updatedCart[productIndex].quantity--;

//     // remove the product from the cart if quantity is zero
//     if (updatedCart[productIndex].quantity === 0) {
//       updatedCart.splice(productIndex, 1);
//     }

//     // set the updated cart in state
//     setCart(updatedCart);
//   };

//   const getTotalPrice = () => {
//     let total = 0;

//     for (let i = 0; i < cart.length; i++) {
//       total += cart[i].product_price * cart[i].quantity;
//     }

//     return total.toFixed(2);
//   };

//   return (
//     <div className="container">
//       {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//           ) : (
//               <div>
//             <h1 className="text-center mb-5">My-Cart</h1>
        
//           {cart.map((product) => (
//             <div key={product.product_id} className="row mb-4 align-items-center" style={{paddingLeft:55}}>
//               <div className="col-md-4">
//                 <img src={product.imageUrl} alt={product.product_name} className="img-fluid" style={{ maxHeight: '150px' }} />
//               </div>
//               <div className="col-md-8">
//                 <h2>{product.product_name}</h2>
//                 <p>Price: ${product.product_price.toFixed(2)}</p>
//                 <div className="input-group mb-3">
//                   <div className="input-group-prepend">
//                     <button
//                       className="btn btn-outline-secondary"
//                       type="button"
//                       onClick={() => decrementQuantity(product.product_id)}
//                     >
//                       -
//                     </button>
//                   </div>
//                   <input
//                     type="text"
//                     className="form-control text-center"
//                     value={product.quantity}
//                     readOnly
//                   />
//                   <div className="input-group-append">
//                     <button
//                       className="btn btn-outline-secondary"
//                       type="button"
//                       onClick={() => incrementQuantity(product.product_id)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//                 <p>Total: ${(product.product_price * product.quantity).toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//           <hr />
//           <div className="row align-items-center">
//             <div className="col-md-8">
//               <p>Total Price: ${getTotalPrice()}</p>
//             </div>
//             <div className="col-md-4">
//               <Link to="/checkoutform" className="btn btn-primary btn-block">
//                 Checkout
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
//           }
// export default CartPage;


import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { useLocation ,useNavigate } from 'react-router-dom';
import './CartPage.css'; 
import shoppingCartservice from '../../services/shoppingCartService';
import { useAuth } from '../../store/AuthContext';

const CartPage = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // const cartItems = location.state.cart;
const [cartItems, setCartItems] = useState([]);
  console.log("inside cart page", cartItems);

useEffect(() => {
  shoppingCartservice.getShoppingCart(currentUser.accessToken)
  .then((res) => {
    console.log("shopping cartPage res: ", res.data);
    setCartItems(res.data.products);

  })
  .catch((err) => {
    console.log("shopping cartPage err: ", err);

  })
}, [])

  const handleCheckOut = (e) => {
    e.preventDefault();
    console.log("Checkout");
    navigate('/address', { state: { cart: cartItems } });



  };
  return (
    <>
      <h1 className="text-center mb-5">Cart Page</h1>
      <div className="cart-container"> 
        <h2>Your Cart</h2>
        <hr />
        <Cart cartItems={cartItems} />
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <hr />
          <p>Total Items: {cartItems.length}</p>
          <p>Total Price: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          <button className="checkout-btn" onClick={handleCheckOut}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
