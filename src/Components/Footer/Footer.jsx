import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import AppleApp from '../../assets/icon/app_store.png'
import Playstore from '../../assets/icon/play_store.png'

const Footer = () => {
    return (
        <>
        {/* <hr /> */}
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-top">
                    <div className="footer-content-one">
                            <ul>
                                <li>Company</li>
                                <Link to='' className='footer-link'>About</Link>
                                <Link to='' className='footer-link'>Careers</Link>
                                <Link to='' className='footer-link'>Contact</Link>
                                <Link to='' className='footer-link'>Locations</Link>
                                <Link to='' className='footer-link'>Newsletter</Link>
                                <Link to='' className='footer-link'>Privacy</Link>
                                <Link to='' className='footer-link'>Accessibility</Link>
                            </ul>
                        </div>
                        <div className="footer-content-two">
                            <ul>
                                    <li>Product</li>
                                    <Link to='' className='footer-link'>Product Catalog</Link>
                                    <Link to='' className='footer-link'>To-go</Link>
                                    <span className="footer-small-divider"></span>
                                    <Link to='' className='footer-link'>Recipes</Link>
                                    <Link to='' className='footer-link'>Rice Expert</Link>
                                    <Link to='' className='footer-link'>Sake Expert</Link>
                                    <Link to='' className='footer-link'>FAQ</Link>
                                </ul>
                        </div>
                        <div className="footer-content-three">
                            <ul>
                                    <li>Savoy Worldwide</li>
                                    <Link to='' className='footer-link'>USA</Link>
                                    <Link to='' className='footer-link'>Japan</Link>
                                    <Link to='' className='footer-link'>Europe</Link>
                                    <Link to='' className='footer-link'>Australia</Link>
                                    <Link to='' className='footer-link'>Singapore</Link>
                                    <Link to='' className='footer-link'>Savoy Special</Link>
                            </ul>
                        </div>
                        <div className="footer-content-four">
                            <ul>
                                    <p>Social</p>
                                    <span>Savoy Distribution</span>
                                        <li>
                                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                                        </li>
                                    <span>Savoy Community</span>
                                        <li>
                                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                                        </li>

                                    <span>Savoy Activities</span>
                                            <li>
                                                <a href=""><i className="fa-brands fa-instagram"></i></a>
                                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                                <a href=""><i className="fa-brands fa-youtube"></i></a>
                                        </li>
                            </ul>
                        </div>
                        <div className="footer-content-five">
                            <p>Savoy APP</p>
                            <img src={AppleApp} alt="" />
                            <img src={Playstore} alt="" />
                        </div>
                </div>
                <div className="footer-content-bottom">
                    <span>Copyright © 2025 - Savoy Distribution</span>
                </div>
                
            </div>
        </div>
    </>
    );
};

export default Footer;