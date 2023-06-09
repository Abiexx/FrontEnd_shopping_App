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
import Products from './components/Products/Products';
import SelectUserRoles from './pages/SelectedUserRoles';


import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Cart from './components/ShoppingCart/Cart';
import AddProductForm from './components/ProductForm/addProductForm';
import CartPage from './components/ShoppingCart/CartPage';
import PaymentForm from './components/PaymentForm/PaymentForm';
import AddressForm from './components/AddressForm/AddressForm';
import SuccessPage from './components/Orders/SuccessPage';
// import PaymentForm from './components/PaymentForm/PaymentForm';



const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/products" element={<Products/>} />
          <Route path='/addProductForm' element={<AddProductForm/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/paymentForm' element={<PaymentForm/>} />
          <Route path='/address' element= {<AddressForm/>}/>
          <Route path="/success" element={<SuccessPage/>} />
          <Route path='/cartPage' element={<CartPage/>}/>

            <Route path="dash">
              <Route path="admin" element={<AdminDash />} />
              <Route path="buyer" element={<BuyerDash />} />
              <Route path="seller" element={<SellerDash />} />
            </Route>            
            <Route path="/select-user-roles" element={<SelectUserRoles/>}/>
          <Route path="*" element={<main><p className='p-3'>That Page Does Not Exist!</p></main>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
