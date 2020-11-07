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

                                    <h3>Transacciones Transparentes</h3>
                                    <p>Podes operar, revisar tus consumos, tus transacciones en un mismo lugar y de manera transparente y sin comisiones.</p>

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

                                    <h3>Totalmente Encriptado</h3>
                                    <p>Nos preocupa cuidar tus ahorros e información tanto como a vos, por ello tenemos nuestro sitio totalmente encriptado.</p>

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

                                    <h3>Opera de manera instantanea</h3>
                                    <p>Retira tu dinero desde nuestras sucursales o ATMs habilitados. Transferi en el acto, paga en el momento.</p>

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

                                    <h3>Seguridad y tranquilidad</h3>
                                    <p>Nuestro lema es opera tranquilo que nosotros nos ocupamos de que sea seguro. Tene en cuenta que nunca te pediremos tus datos de acceso.</p>

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