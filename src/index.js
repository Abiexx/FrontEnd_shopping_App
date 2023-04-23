import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignInForm';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import AdminDash from './pages/AdminDash';
import BuyerDash from './pages/BuyerDash';
import SellerDash from './pages/SellerDash';
//import RequireAuth from './components/RequireAuth/RequireAuth';
import Products from './components/Products/Products';
import SelectUserRoles from './pages/SelectedUserRoles';
import CheckoutForm from "./CheckoutForm/CheckoutForm";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Cart from './components/ShoppingCart/Cart';
import AddProductForm from './components/ProductForm/addProductForm';



const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path="/products" element={<Products/>} />
          <Route path='/addProductForm' element={<AddProductForm/>}/>
          <Route path='/cart' element={<Cart/>}/>
            <Route path="dash">
              <Route path="admin" element={<AdminDash />} />
              <Route path="buyer" element={<BuyerDash />} />
              <Route path="seller" element={<SellerDash />} />
            </Route>
            <Route path="/select-user-roles" element={<SelectUserRoles/>}/>
          <Route path='/checkoutform' element={   <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>} />
          <Route path="*" element={<main><p className='p-3'>That Page Does Not Exist!</p></main>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
