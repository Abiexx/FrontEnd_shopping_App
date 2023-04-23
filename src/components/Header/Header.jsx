import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import {
  FaHome,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaUser,
  FaAngleDown,
} from "react-icons/fa";

import { Link, useNavigate,useLocation } from "react-router-dom";
import { AppContext } from "../store/AppContext";
import { useAuth } from "../../store/AuthContext";



const Header = () => {
  const { currentUser, signIn, signUp, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // const history = useHistory();

  const [cart, setCart] = useState(location.state?.cart || []);

  const [showSellerDropdown, setShowSellerDropdown] = useState(false);
  const [showBuyerDropdown, setShowBuyerDropdown] = useState(false);

  const toggleDropdown = () => {
    currentUser.role.toLowerCase() === "seller"? setShowSellerDropdown((prev) => !prev): setShowBuyerDropdown((prev) => !prev);
    // setShowSellerDropdown((prev) => !prev);
  };

  const signoutHandler = () => {
    signOut();
  };

  const handleProductMouseEnter = () => {
    console.log("===== products mouse entered", currentUser.role.toLowerCase());
    currentUser.role.toLowerCase() === "seller"? setShowSellerDropdown(true): setShowBuyerDropdown(true);
    // setShowSellerDropdown(true);
  };

  const handleProductMouseLeave = () => {
    console.log("===== products mouse left");
    currentUser.role.toLowerCase() === "seller"? setShowSellerDropdown(false): setShowBuyerDropdown(false);
    // setShowSellerDropdown(false);
  };

  const handleAddProductClick = () => {
    console.log("===== add product clicked");
    navigate("/addProductForm");
  };

  const handleGetMyProductsClick = () => {
    console.log("===== get my products clicked");
    navigate("/Products");
  };

  const getProductsClick = () => {
    console.log("===== get products clicked");
    currentUser.role.toLowerCase() === "buyer"? navigate("/Products"):
    navigate("/Products");
  };
  const handleSignUpClick = (e) => {
    e.preventDefault();
    console.log("===== sign up clicked");
    navigate("/select-user-roles");
  };

  const createCartClick = (e, cart) => {
    e.preventDefault();
    console.log("===== create cart clicked");
    // history.push({
    //   pathname: '/cartPage',
    //   state: { cart }
    // });
  };
  
  return (
    <div>
      <header className="p-1">
        <nav>
          <h1 className="logo text-2xl font-bold">
            <Link to="/home">Online-Shopping-Cart</Link>
          </h1>
          <ul className="main-nav">
            <li
            // className='dropdown'
            >
              <a href="#" onClick={getProductsClick}>Products</a>
            </li>
            <li></li>
            <li>
              <input
                type="text"
                placeholder="&#128269; Search at Online Shopping Cart "
                className="search-input"
              />
            </li>
            {currentUser ? (
              <li>
                <a href="#" className="flex items-center" 
                onClick={(e)=> createCartClick(e,cart)} >
                  <FaShoppingCart className="text-xl" />
                </a>
              </li>
            ) : (
              <li>
                <a href="#MyItems">My Items</a>
              </li>
            )}
            {/* if logged in as seller show this with drop down */}
           {currentUser && currentUser.role.toLowerCase() === 'seller' &&
              <li>
                <Link
                  to={`/dash/${currentUser.role.toLowerCase()}`}
                  className="flex items-center"
                  // className='dropdown'

                  onMouseEnter={handleProductMouseEnter}
                  onMouseLeave={handleProductMouseLeave}
                >
                  <FaUser className="mr-2" />
                  <span className="capitalize text-sm">
                    {currentUser.username}
                  </span>
                </Link>
                <li
                  className="dropdown"
                  onMouseEnter={handleProductMouseEnter}
                  onMouseLeave={handleProductMouseLeave}
                >
                  {showSellerDropdown && (
                    <ul className="dropdown-menu">
                      <li>
                        <a href="" onClick={handleAddProductClick}>
                          Add-Product
                        </a>
                      </li>
                      <li>
                        <a href="" onClick={handleGetMyProductsClick}>
                          My-Products
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </li>
          }

            {/* if logged in as buyer show this */}
 {currentUser && currentUser.role.toLowerCase() === 'buyer' && 
              <li>
                <Link
                  to={`/dash/${currentUser.role.toLowerCase()}`}
                  className="flex items-center"
                  // className='dropdown'

                  onMouseEnter={handleProductMouseEnter}
                  onMouseLeave={handleProductMouseLeave}
                >
                  <FaUser className="mr-2" />
                  <span className="capitalize text-sm">
                    {currentUser.username}
                  </span>
                </Link>
                <li
                  className="dropdown"
                  onMouseEnter={handleProductMouseEnter}
                  onMouseLeave={handleProductMouseLeave}
                >
                  {showBuyerDropdown && (
                    <ul >
                      <li>
                        <a href="" onClick={handleGetMyProductsClick}>
                          My-Orders
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </li>
            
             
            }

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
              <> <li>
              <Link to="/signin"> Sign in </Link>
            </li> <li>
                <a href="/signup" onClick={handleSignUpClick}>
                  Sign-Up
                </a>
              </li></>
             
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
