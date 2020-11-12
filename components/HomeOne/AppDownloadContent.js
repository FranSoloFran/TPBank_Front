import React, { Component } from 'react';
import Link from 'next/link';

class AppDownloadContent extends Component {
    render() {
        return (
            <div className="app-download-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-image">
                                <div className="main-image">
                                    <img src={require("../../images/app-mobile-photo.png")} className="wow fadeInLeft" data-wow-delay="0.6s" alt="image" />
                                    {/* <img src={require("../../images/mobile-app2.png")} className="wow fadeInUp" data-wow-delay="0.9s" alt="image" /> */}
                                </div>

                                <div className="main-mobile-image">
                                    <img src={require("../../images/main-mobile.png")} className="wow fadeInUp" data-wow-delay="0.6s" alt="image" />
                                </div>

                                <div className="circle-img">
                                    <img src={require("../../images/circle.png")} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-download-content">
                                <h2>Paga y opera desde nuestra nueva aplicación</h2>
                                <div className="bar"></div>
                                <p>Lanzamos a través de TPBank nuestra nueva aplicación Mobile Southern para que puedas pagar con QR, operar, comprar moneda extranjera y más.</p>

                                <p>¿Te preguntas cómo obtenerla? Es muy fácil, descargala de manera gratuita desde tu teléfono en las stores o a través de nuestro acceso que encontrarás abajo.</p>

                                <div className="btn-box">
                                    <Link href="#">
                                        <a className="app-store-btn">
                                            <i className="flaticon-apple"></i>
                                            Descarga en
                                            <span>App Store</span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a className="play-store-btn">
                                            <i className="flaticon-play-store"></i>
                                            Descarga en
                                            <span>Google play</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppDownloadContent;