import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import {
  FaHome,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaUser,
  FaAngleDown,
} from 'react-icons/fa';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { AppContext } from '../store/AppContext';
import { useAuth } from '../../store/AuthContext';

const Header = () => {
  const { currentUser, signIn, signUp, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  const [showDropdown, setShowDropdown] = useState(false);
  const [cart, setCart] = useState(location.state?.cart || []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const signoutHandler = () => {
    signOut();
  };

  const handleProductMouseEnter = () => {
    console.log('===== products mouse entered');
    setShowDropdown(true);
  };

  const handleProductMouseLeave = () => {
    console.log('===== products mouse left');
    setShowDropdown(false);
  };

  const handleAddProductClick = () => {
    console.log('===== add product clicked');
    navigate('/addProductForm');
  };

  const handleGetMyProductsClick = () => {
    console.log('===== get my products clicked');
    navigate('/Products');
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    console.log('===== sign up clicked');
    navigate('/select-user-roles');
  };

  const createCartClick = (e, cart) => {
    e.preventDefault();
    console.log("===== create cart clicked");
    navigate('/cartPage', { state: { cart } });
    // history.push({
    //   pathname: '/cartPage',
    //   state: { cart }
    // });
  };



  return (
    <div>
      <header className='p-1'>
        <nav>
          <h1 className='logo text-2xl font-bold'>
            <Link to='/home'>Online-Shopping-Cart</Link>
          </h1>
          <ul className='main-nav'>
            <li
              className='dropdown'
            >
              {currentUser && currentUser.role.toLowerCase() === 'seller' ? (
                <div onMouseEnter={handleProductMouseEnter}
                     onMouseLeave={handleProductMouseLeave}>
                  <a href='#products'>
                    Products <FaAngleDown />
                  </a>
                  {showDropdown && (
                    <ul className='dropdown-menu'>
                      <li>
                        <a href='#' onClick={handleAddProductClick}>
                          Add Product
                        </a>
                      </li>
                      <li>
                        <a href='#' onClick={handleGetMyProductsClick}>
                          My Products
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <li>
                  <Link to='/Products'>Products</Link>
                </li>
              )}
            </li>
            <li></li>
            <li>
              <input
                type='text'
                placeholder='&#128269; Search at Online Shopping Cart '
                className='search-input'
              />
            </li>
            {currentUser ? (
              <li>
                <a href='#MyItems' className='flex items-center'
                 onClick={(e)=> createCartClick(e,cart)}>
                  <FaShoppingCart className='text-xl' />
                </a>
              </li>
            ) : (
              <li>
                <a href='#MyItems'>My Items</a>
              </li>
            )}
            {currentUser ? (
              <li>
                <Link
                  to={`/dash/${currentUser.role.toLowerCase()}`}
                  className='flex items-center'
                >
                  <FaUser className='mr-2' />
                  <span className='capitalize text-sm'>
                    {currentUser.username}
                  </span>
                </Link>
              </li>
            ) : (
              <li>
                <Link to='/signin'>Sign in</Link>
              </li>
           

            )}
            {currentUser ? (
              <li>
                <button
                  onClick={signoutHandler}
                  className="inline-block px-6 py-2.5 bg-transparent text-white font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200"
                >
                  Signout
                </button>
              </li>
            ) : (
              <li>
                <a href="/signup" onClick={handleSignUpClick}>
                  Sign-Up
                </a>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <div className="location">
        <span className="flex">
          <FaHome />
          Fairfield WebShop | <FaMapMarkerAlt /> Fairfield 52557
        </span>
      </div>
    </div>
  );
};

export default Header;