import React, { Component } from 'react';

class OurFeaturesContent extends Component {
    render() {
        return (
            <section className="features-area ptb-70 bg-f6f4f8">
                <div className="container">
                    <div className="section-title">
                        <h2>Nuestras funcionalidades</h2>
                        <div className="bar"></div>
                        <p>Operá con la tranquilidad que te da ser cliente de TPBank, te notificaremos ante cualquier cambio en tus cuentas o si debés realizar un pago.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-settings"></i>
                                </div>

                                <h3>Web y Mobile</h3>
                                <p>Te permitimos realizar las mismas operaciones desde nuestra web y desde nuestra app. Usá nuestro Token virtual para cualquier movimiento.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-f78acb">
                                    <i className="flaticon-envelope-of-white-paper"></i>
                                </div>

                                <h3>Notificaciones vía mail</h3>
                                <p>Ante cualquier movimiento de tus cuentas, te notificaremos vía mail para que estes informado.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-cdf1d8">
                                    <i className="flaticon-menu"></i>
                                </div>

                                <h3>Dashboard Intuitivo</h3>
                                <p>Si la tecnología no es lo tuyo, no te preocupes, nuestro Home Banking es muy intuitivo.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-c679e3">
                                    <i className="flaticon-info"></i>
                                </div>

                                <h3>Promociones</h3>
                                <p>Contamos con una plataforma de beneficios para vos. Estate atento a las notificaciones push.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-eb6b3d">
                                    <i className="flaticon-cursor"></i>
                                </div>

                                <h3>Drag and Drop</h3>
                                <p>Podés cargar documentos de manera sencilla, simplemente arrastrá el archivo y arrojalo en la pantalla.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-alarm"></i>
                                </div>

                                <h3>Alarma de vencimiento</h3>
                                <p>Configurá tu cuenta para que nunca te olvides de pagar un servicio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeaturesContent;