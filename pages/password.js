import React, { Component } from 'react';
import Link from 'next/link';
import sessionManager from '../services/sessionManager'
import axios from 'axios';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            password:null,
            confirmPassword:null
        }
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    componentDidMount(){
        this.sessionManager = new sessionManager()                 
        if(this.sessionManager.getUserName()){
            window.location.href='/login'
        }
    }


    onSubmit(event) {
        event.preventDefault()

        if(this.state.password === this.state.confirmPassword){
            
        const clientId = this.sessionManager.getClientId()

        axios.patch(`https://bank-api-integrations.herokuapp.com/api/v1/clients/${clientId}`,
            {              
                password: this.state.password
            })
            .then(res => {
                this.sessionManager.logout()
                alert("Contraseña cambiada con exito")
                window.location.href='/login'
         
            }).catch((error) => {
                console.log(error)
                alert("Error al cambiar la contraseña")
            })

        }
        else{
            alert("Las contraseñas ingresadas no coinciden")
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

                                            <h3>Ingresa tu nueva contraseña</h3>

                                            <form onSubmit={this.onSubmit}>
                             
                                                <div className="form-group">
                                                    <input required onChange={(event)=> this.setState({password:event.target.value})}  type="password" name="password" id="password" placeholder="Contraseña" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <input required onChange={(event)=> this.setState({confirmPassword:event.target.value})}  type="password" name="confirmPassword" id="confirmPassword" placeholder="Repite la contraseña" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Confirmar</button>
                                                                                 
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