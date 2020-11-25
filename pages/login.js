import React, { Component } from 'react';
import Link from 'next/link';
import sessionManager from '../services/sessionManager'
import axios from 'axios';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username:null,
            password:null,
            type:null,
            cuil:null,
            clientId:null,
            name:''
        }
        this.handleChangeType = this.handleChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    handleChangeType(event) {
        this.setState({ type: event.target.value });
    }

    componentDidMount(){
        this.sessionManager = new sessionManager()

        if (this.sessionManager.isLogged('CLIENT')){
            window.location.href='/user-account'
        }
        if (this.sessionManager.isLogged('CASHIER')){
            window.location.href='/cashier-account'
        }
        if  (this.sessionManager.isLogged('EXECUTIVE')){
            window.location.href='/executive-account'
        }    

    }


    onSubmit(event) {
        event.preventDefault()

        axios.post('https://bank-api-integrations.herokuapp.com/api/v1/auth',
            {              
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log(res.data)

                this.sessionManager.login( res.data.username,res.data.name,res.data.cuil,res.data.type,res.data.client_id)

                if (res.data.type === "CLIENT"){
                    window.location.href='/user-account'
                }
                if (res.data.type === "CASHIER"){
                    window.location.href='/cashier-account'
                }
                if (res.data.type === "EXECUTIVE"){
                    window.location.href='/executive-account'
                }
         
            }).catch((error) => {
                console.log(error)
                alert("Error al buscar la cuenta")
            })


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

                                            <form onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <input required onChange={(event)=> this.setState({username:event.target.value})}  type="email" name="email" id="email" placeholder="Tu dirección de Email" className="form-control" />
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