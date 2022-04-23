import React from 'react'
import './Header.css'
import {FaHome, FaMapMarkerAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='p-1'>
            <nav>
                <h1 className="logo text-2xl font-bold"> <Link to="/home">ShopMart.</Link></h1>
                <ul className="main-nav">
                    <li><a href="#Departments">Departments</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><input type="text" placeholder="&#128269; Search everything at Shopmart online and in store" className="search-input"/></li>
                    <li><a href="#MyItems">My Items</a></li>
                    <li><Link to="/signin">Sign in</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
        <div className="location">
            <span className='flex'><FaHome />Fairfield Supercenter | <FaMapMarkerAlt /> Fairfield 52557</span>
        </div>
    </div>
  )
}

export default Header