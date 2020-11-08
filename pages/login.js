import React, { Component } from 'react';
import Link from 'next/link';

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="login-area">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="login-image">
                                <img src={require("../images/login-1.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="login-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="login-form">
                                            <div className="logo">
                                                <Link href="/">
                                                    <a>
                                                        <img src={require("../images/black-logo.png")} alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <h3>¡Bienvenidos!</h3>
                                            {/* <p>Nuevo en Haiper? <Link href="/sign-up"><a>Accede</a></Link></p> */}

                                            <form>
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" placeholder="Tu dirección de Email" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" name="password" id="password" placeholder="Contraseña" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Accede</button>
                                                
                                                <div className="forgot-password">
                                                    <Link href="/forgot-password"><a>¿Olvidaste tu contraseña?</a></Link>
                                                </div>

                                                {/* <div className="connect-with-social">
                                                    <button type="submit" className="facebook">
                                                        <i className="fab fa-facebook-square"></i> Connect with Facebook
                                                    </button>
                                                    <button type="submit" className="google">
                                                        <i className="fab fa-google"></i> Connect with Google
                                                    </button>
                                                </div> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Login;