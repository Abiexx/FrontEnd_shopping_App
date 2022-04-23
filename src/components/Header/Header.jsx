import React, { useContext, useEffect } from 'react'
import './Header.css'
import {FaHome, FaMapMarkerAlt, FaShoppingCart, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../store/AppContext'

const Header = () => {

    const {user, setUser, role, setRole} = useContext(AppContext);
    
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = localStorage.getItem('username');
        if (getUser) {
         setUser(getUser);
        }
      }, [user]);

    const signoutHandler = () => {
        localStorage.clear()
        navigate("/home")
    }

  return (
    <div>
        <header className='p-1'>
            <nav>
                <h1 className="logo text-2xl font-bold"> <Link to="/home">ShopMart.</Link></h1>
                <ul className="main-nav">
                    <li><a href="#Departments">Departments</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><input type="text" placeholder="&#128269; Search everything at Shopmart online and in store" className="search-input"/></li>
                    {user ? (<li><a href="#MyItems" className='flex items-center'><FaShoppingCart className='text-xl'/></a></li>) : (<li><a href="#MyItems">My Items</a></li>)}
                    {user ? (<li><Link to="/signin" className='flex items-center'><FaUser className='mr-2'/><span className='capitalize text-sm'>{user}</span></Link></li>) : (<li><Link to="/signin">Sign in</Link></li>)}
                    {user ? (<li onClick={signoutHandler}><Link to="/home">Signout</Link></li>) : (<li><Link to="/signup">Sign Up</Link></li>)}
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