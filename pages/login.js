import React, { Component } from 'react';
import Link from 'next/link';
import sessionManager from '../services/sessionManager'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email:null,
            password:null
        }
        this.handleChangeType = this.handleChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    handleChangeType(event) {
        this.setState({ type: event.target.value });
    }

    componentDidMount(){
        this.sessionManager = new sessionManager()
    }


    onSubmit(event) {
        event.preventDefault()
        //Llamada a backend

        if (this.state.email === "usuario1@gmail.com"){
            this.sessionManager.login('usuario1@gmail.com','Juan','DNI','6398425','User','10')
            window.location.href='/user-account'
        }
        if (this.state.email === "cajero@gmail.com"){
            this.sessionManager.login('cajero@gmail.com','Ramon','DNI','12511525','Cashier','9')
            window.location.href='/cashier-account'
        }
        if (this.state.email === "ejecutivo@gmail.com"){
            this.sessionManager.login('ejecutivo@gmail.com','Sebastian','DNI','33565656','Executive','11')
            window.location.href='/executive-account'
        }
    }

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

                                            <form onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <input required onChange={(event)=> this.setState({email:event.target.value})}  type="email" name="email" id="email" placeholder="Tu dirección de Email" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <input required onChange={(event)=> this.setState({password:event.target.value})}  type="password" name="password" id="password" placeholder="Contraseña" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Accede</button>
                                                
                                                <div className="forgot-password">
                                                    <Link href="/forgot-password"><a>¿Olvidaste tu contraseña?</a></Link>
                                                </div>                                    
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