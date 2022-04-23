import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import AdminDash from './pages/AdminDash';
import BuyerDash from './pages/BuyerDash';
import SellerDash from './pages/SellerDash';
//import RequireAuth from './components/RequireAuth/RequireAuth';

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
          
            <Route path="dash">
              <Route path="admin" element={<AdminDash />} />
              <Route path="buyer" element={<BuyerDash />} />
              <Route path="seller" element={<SellerDash />} />
            </Route>
          
          <Route path="*" element={<main><p className='p-3'>That Page Does Not Exist!</p></main>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
