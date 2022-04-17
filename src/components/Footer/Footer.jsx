import React from 'react'
import {FaFacebook, FaTwitter, FaGooglePlusG, FaInstagram} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="row">
            <div className="clearfix">
                <div className="footer-nav">
                    <ul className="footer-nav-links">
                        <li><a href="#About">About</a></li>
                        <li><a href="#Blog">Blog</a></li>
                        <li><a href="#Press">Press</a></li>
                    </ul>
                </div>

                <div className="social-link">
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/" className='hover:text-[#3b5998]'><FaFacebook/></a></li>
                        <li><a href="https://twitter.com/" className='hover:text-[#55acee]'><FaTwitter/></a></li>
                        <li><a href="https://plus.google.com/discover" className='hover:text-[#dc4e41]'><FaGooglePlusG/></a></li>
                        <li><a href="https://www.instagram.com/" className='hover:text-[#517fa4]'><FaInstagram/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <p> 
                &copy; Copyright 2022 Shopmart<br/>
                All rights reserved. &nbsp; <a href="#Privacy">Privacy Policy</a> • <a href="#Terms">Terms of Use</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer