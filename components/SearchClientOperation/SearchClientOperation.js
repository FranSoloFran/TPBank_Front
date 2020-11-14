import React, { Component } from 'react';
import axios from 'axios';

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
            accounts:[]
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
                            <p><b>Nombre:</b> {this.state.firstname}</p>
                            </div>
                            <div className='col-md-6'>
                                <p><b>Apellido:</b> {this.state.lastname}</p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <p><b>Email:</b> {this.state.email}</p>
                            </div>
                            <div className='col-md-6'>
                            <p><b>Estado:</b>Activo</p>
                            </div>
                        </div>
                        {this.state.accounts.map(account => (
                            <div className='row' key={account.id}>
                                <div className='col-md-12'>
                                    <br></br>
                                    <p><b>Cuenta número :</b> {account.id}</p>
                                </div>
                                <div className='col-md-6'>
                                    <p><b>Tipo de cuenta:</b> {account.account_type}</p>
                                </div>
                                <div className='col-md-6'>
                                    <p><b>Número de cuenta:</b> {account.identification_number}</p>
                                </div>
                                <div className='col-md-6'>
                                    <p><b>Balance:</b> {account.balance}</p>
                                </div>
                                <div className='col-md-6'>
                                    <p><b>Nombre:</b> {account.name}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                }

            </div>
        );
    }
}

export default SearchClientOperation;


