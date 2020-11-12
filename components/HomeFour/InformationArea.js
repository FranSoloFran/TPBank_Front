import React, { Component } from 'react';
import Link from 'next/link';

class InformationArea extends Component {
    render() {
        return (
            <div className="information-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-piggy-bank"></i>
                                </div>
                                <h3>$0.00 / mo</h3>
                                <p>Cuenta gratis disponible</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-user"></i>
                                </div>
                                <h3>10 minutes</h3>
                                <p>Abrir una cuenta</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-shield"></i>
                                </div>
                                <h3>$100,000</h3>
                                <p>Garantía en depósitos</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="btn-box">
                                    <Link href="#">
                                        <a className="app-store-btn">
                                            <i className="flaticon-apple"></i>
                                            Descargar en
                                            <span>App Store</span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a className="play-store-btn">
                                            <i className="flaticon-play-store"></i>
                                            Descargar en
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

export default InformationArea;