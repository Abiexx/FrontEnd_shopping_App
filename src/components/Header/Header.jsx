import React from 'react'
import './Header.css'
import {FaHome, FaMapMarkerAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <header className='p-1'>
            <nav>
                <h1 className="logo text-2xl font-bold">ShopMart.</h1>
                <ul className="main-nav">
                    <li><a href="#Departments">Departments</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><input type="text" placeholder="&#128269; Search everything at Shopmart online and in store" class="search-input"/></li>
                    <li><a href="#MyItems">My Items</a></li>
                    <li><a href="#SignIn">Sign in</a></li>
                    <li><a href="#SignUp">Sign Up</a></li>
                </ul>
            </nav>
        </header>
        <div class="location">
            <span className='flex'><FaHome />Fairfield Supercenter | <FaMapMarkerAlt /> Fairfield 52557</span>
        </div>
    </div>
  )
}

export default Header