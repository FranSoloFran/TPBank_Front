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
                                    <img src={require("../../images/mobile-app1.png")} className="wow fadeInLeft" data-wow-delay="0.6s" alt="image" />
                                    <img src={require("../../images/mobile-app2.png")} className="wow fadeInUp" data-wow-delay="0.9s" alt="image" />
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
                                <h2>Ahora podes manejar tus pagos desde nuestra aplicación Mobile</h2>
                                <div className="bar"></div>
                                <p>Haiper Wallet es la nueva aplicación mobile del banco Haiper que te permite acceder a todas las opciones necesarias para operar con tus cuentas</p>

                                <p>Encontrala en todos los Stores y te adelantamos, pagando con QR en tu primer uso tenes un 50% de reintegro de compra</p>

                                <div className="btn-box">
                                    <Link href="#">
                                        <a className="app-store-btn">
                                            <i className="flaticon-apple"></i>
                                            Bajala en
                                            <span>App Store</span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a className="play-store-btn">
                                            <i className="flaticon-play-store"></i>
                                            Bajala en
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