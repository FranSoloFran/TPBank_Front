import React, { Component } from 'react';

import axios from 'axios';

class SearchClientOperation extends Component {
    constructor() {
        super()
        this.state = {
            client: null,
            clientType:null,
            lastname:null,
            firstname:null,
            documentType:null,
            documentNumber:null,
            birthdate:null,
            nationality:null,
            accountType:null,
            startActivityDate:null
        }
        this.onSubmit = this.onSubmit.bind(this)

    }



    onSubmit(event) {
        axios.get(`https://bank-api-integrations.herokuapp.com//api/v1/clients/search/dni/{dni}`).then( res => {
            console.log(res);
            setTimeout(() =>{
            this.setState({accounts: res.data})
            }, 2000, console.log(res.data)
            )
        });
        event.preventDefault()
        this.setState({
            client: true
        })
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
                                    <option>LE</option>
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
                                <p><b>Nombre:</b> $Juan</p>
                            </div>
                            <div className='col-md-6'>
                                <p><b>Apellido:</b> $Ramires</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p><b>Tipo de cuenta:</b> $Cuenta corriente</p>
                            </div>
                            <div className='col-md-6'>
                                <p><b>Número de cuenta:</b> $00000000000015</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p><b>Fecha de nacimiento</b> $24/12/78</p>
                            </div>
                            <div className='col-md-6'>
                                <p><b>Nacionalidad</b> $Polaco</p>
                            </div>
                        </div>

                    </div>

                }

            </div>
        );
    }
}

export default SearchClientOperation;


