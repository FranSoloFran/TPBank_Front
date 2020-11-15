import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

const clientes = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/clients/'
})

const cuentas = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/clients/'
})

class SearchClientOperation extends Component {
    constructor() {
        super()
        this.state = {
            client: null,
            id:null,
            lastname:null,
            firstname:null,
            documentType:null,
            documentNumber:null,
            cuil:null,
            email:null,
            status:null,
            startActivityDate:null,
            accounts:[],
            business_name:null
        }
        this.onSubmit = this.onSubmit.bind(this)

    }

    onSubmit(event) {
        event.preventDefault()
    if(this.state.documentType === 'DNI'){
        clientes.get('search?dni=' + this.state.documentNumber).then(res => {
            console.log(res.data);
            this.state.lastname = res.data.last_name;
            this.state.email = res.data.email;
            this.state.status = res.data.status;
            this.state.firstname = res.data.name;
            this.state.id = res.data.id;
          
            cuentas.get(this.state.id + '/accounts').then(resp => {
                console.log(resp.data);
                this.state.accounts = resp.data;
                
                this.setState({
                    client: true
                })

            }
            )
            .catch(function (error)
            {console.log(error)})

        }
        )
        .catch(function (error)
        {console.log(error)})
    }else{
        clientes.get('search?cuil=' + this.state.documentNumber).then(res => {
            console.log(res.data);
            this.state.lastname = res.data.last_name;
            this.state.email = res.data.email;
            this.state.status = res.data.status;
            this.state.firstname = res.data.name;
            this.state.id = res.data.id;
            this.state.business_name = res.data.business_name;
          
            cuentas.get(this.state.id + '/accounts').then(resp => {
                console.log(resp.data);
                this.state.accounts = resp.data;
                
                this.setState({
                    client: true
                })

            }
            )
            .catch(function (error)
            {console.log(error)})

        }
        )
        .catch(function (error)
        {console.log(error)})        
    }
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Buscar cliente</h1>
                <form onSubmit={this.onSubmit}>
                    <h4>Seleccione cliente</h4>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="form-group form-group-default">
                                <label>Tipo de documento</label>
                                <select required onChange={(event)=> this.setState({documentType:event.target.value})} className='form-control'>
                                    <option value='' disabled selected>Selecciona una opción</option>
                                    <option>DNI</option>
                                    <option>CUIT</option>
                                    <option>CUIL</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="form-group form-group-default">
                                <label>Número de documento</label>
                                <input required onChange={(event)=> this.setState({documentNumber:event.target.value})} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Buscar</button>

                </form>
                {this.state.client &&
                    <div className='client-info'>
                        <div className='row'>
                            <div className='col-md-6'> 
                            <h4>{this.state.business_name}{this.state.firstname} {this.state.lastname}</h4>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <p><b>Email:</b> {this.state.email}</p>
                            </div>
                            {/* <div className='col-md-6'>
                            <p><b>Estado:</b>Activo</p>
                            </div> */}
                        </div>
                        <div className="pricing-area pt-70 pb-50">
                        <div className="container">
                        <div className="row">
                        {this.state.accounts.map(account => (
                        <div className="col-lg-4 col-md-6" key={account.id}>
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>Cuenta n° {account.id}</h3>
                                    <p>{this.state.firstname} {this.state.lastname}</p>
                                </div>

                                <div className="price">
                                    <span className="symbol">$</span> {account.balance} <span>balance</span>
                                </div>
 
                                <ul className="pricing-features">
                                    <li>
                                        <b>Tipo de cuenta:</b> {account.account_type_description} 
                                        {/* <i className="fas fa-check"></i>  */}
                                    </li>
                                    <li>
                                        <b>Número de cuenta:</b> {account.identification_number} 
                                        {/* <i className="fas fa-check"></i>  */}
                                    </li>
                                    <li>
                                        <b>Balance:</b> {account.balance} 
                                        {/* <i className="fas fa-check"></i>  */}
                                    </li>
                                    <li>
                                        <b>Alias:</b> {account.name} 
                                        {/* <i className="fas fa-ban"></i>  */}
                                    </li>
                                    <li>
                                        <b>Descubierto: $</b> {account.overdraft} 
                                        {/* <i className="fas fa-ban"></i>  */}
                                    </li>
                                </ul>

                                <div className="buy-btn">
                                    <Link href="/">
                                        <a className="btn btn-primary">Editar</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        ))}
                        </div>
                        </div>
                        </div>

                    </div>

                }

            </div>
        );
    }
}

export default SearchClientOperation;


