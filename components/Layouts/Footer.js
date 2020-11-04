import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a><img src={require("../../images/logo.png")} alt="logo" /></a>
                                    </Link>
                                    <p>Quis ipsum suspendisse ultrices gravida commodo. Risus commodo veliliee vel viverra maecenas accumsan lacus vel facilisis</p>
                                </div>
                                
                                <ul className="social-links">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Latest News</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Condition</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Community</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li>
                                        <span className="mr-1">Location:</span> 
                                        27 Division St, New York, NY 10002, USA
                                    </li>
                                    <li>
                                        <span className="mr-1">Email:</span> 
                                        infohaiper@haiper.com
                                    </li>
                                    <li>
                                        <span className="mr-1">Phone:</span> 
                                        + (321) 984 754
                                    </li>
                                    <li>
                                        <span className="mr-1">Fax:</span> 
                                        +1-212-9876543
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>© {currentYear} Haiper - All rights Reserved</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;