import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/Signup';

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
          <Route path="*" element={<main><p className='p-3'>That Page Does Not Exist!</p></main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
