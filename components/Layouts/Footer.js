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
                                    <p>Somos un banco virtual con sucursales en todo el país. Llegamos para acompañarte y hacerte las cosas más fáciles.</p>
                                    <p>#ElFuturoEstaAca</p>
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
                                <h3>Nosotros</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>Quiénes Somos</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#">
                                            <a>Servicios</a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="#">
                                            <a>Funcionalidades</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#">
                                            <a>Pricing</a>
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <Link href="#">
                                            <a>Latest News</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Soporte</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#">
                                            <a>Politicas de privacidad</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Terminos y Condiciones</a>
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <Link href="#">
                                            <a>Community</a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/contact">
                                            <a>Contactanos</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Dirección</h3>
                                
                                <ul className="footer-contact-info">
                                    <li>
                                        <span className="mr-1">Ubicación::</span> 
                                        Juan Domingo Perón 430
                                    </li>
                                    <li>
                                        <span className="mr-1">Email:</span> 
                                        infotpbank@tpbank.com
                                    </li>
                                    <li>
                                        <span className="mr-1">Telefono:</span> 
                                        + 011 6329-0000
                                    </li>
                                    {/* <li>
                                        <span className="mr-1">Fax:</span> 
                                        +1-212-9876543
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>© {currentYear} TPBank - Todos los derehcos reservados 2020</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;