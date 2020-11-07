import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedCard extends Component {
    render() {
        return (
            <div className="featured-boxes-area">
                <div className="container">
                    <div className="featured-boxes-inner">
                        <div className="row m-0">
                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-fb7756">
                                        <i className="flaticon-piggy-bank"></i>
                                    </div>

                                    <h3>Cuenta</h3>
                                    <p>Obtene tu cuenta en distintas monedas, cobra tu sueldo, opera todo desde nuestro homebanking</p>

                                    <Link href="#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-facd60">
                                        <i className="flaticon-data-encryption"></i>
                                    </div>

                                    <h3>Seguridad</h3>
                                    <p>Nuestro sitio cumple con todos los requisitos de seguridad establecidos por el BCRA</p>

                                    <Link href="#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-1ac0c6">
                                        <i className="flaticon-wallet"></i>
                                    </div>

                                    <h3>Retira dinero</h3>
                                    <p>Retira dinero en cualquiera de los cajeros habilitados en el país sin pagar nada</p>

                                    <Link href="#">
                                        <a className="read-more-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon">
                                        <i className="flaticon-shield"></i>
                                    </div>

                                    <h3>Seguros</h3>
                                    <p>Encontra en nuestro sitio de seguros diversidad de planes para proteger tus cosas</p>

                                    <Link href="#">
                                        <a className="read-more-btn">Read More</a>
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

export default FeaturedCard;