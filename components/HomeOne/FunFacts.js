import React, { Component } from 'react';
import Link from 'next/link';

class FunFacts extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-70 pt-0">
                <div className="container" >
                    <div className="section-title">
                        <h2>Trabajamos en cumplir las expectativas de nuestros clientes</h2>
                        <div className="bar"></div>
                        <p>Algunos datos que acompañan nuestra trayectoria.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>180</span>K</h3>
                                <p>Descargas</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>20</span>K</h3>
                                <p>Feedback</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>500</span>+</h3>
                                <p>Empleados</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>70</span>+</h3>
                                <p>Años de experiencia</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>¿Dudas?</h3>
                        <p>Ponte en contacto</p>

                        <Link href="/contact">
                            <a className="btn btn-primary">Contacto</a>
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src={require("../../images/map.png")} alt="map" />
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;