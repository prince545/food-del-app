import React from 'react'
import './Footer.css'
import AnimatedQuotes from '../AnimatedQuotes/AnimatedQuotes'
import logo from '../../assets/frontend_assets/logo.png'
import facebook_icon from '../../assets/frontend_assets/facebook_icon.png'
import twitter_icon from '../../assets/frontend_assets/twitter_icon.png'
import linkedin_icon from '../../assets/frontend_assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt="Logo" />
                <p>Indulge in culinary excellence with our carefully curated menu featuring the finest ingredients and authentic flavors. From traditional favorites to innovative creations, every dish tells a story of passion and dedication to the art of cooking.</p>
                <div className="footer-social-icons">
                    <img src={facebook_icon} alt="Facebook" />
                    <img src={twitter_icon} alt="Twitter" />
                    <img src={linkedin_icon} alt="LinkedIn" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 212-456-7890</li>
                    <li>contact@fooddelivery.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Food Delivery - All right reserved.</p>
        
        <AnimatedQuotes variant="floating" />
    </div>
  )
}

export default Footer
