import React, { Component } from 'react';
import axios from 'axios';

class NewAccountOperation extends Component {
    constructor() {
        super()
        this.state = {
            client_cuil: null,
            account_type: null,
            overdraft: null
        }
        this.handleChangeType = this.handleChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault()
        console.log(this.state.account_type);
        console.log(this.state.client_cuil);
        console.log(this.state.overdraft);
        axios.post("https://bank-api-integrations.herokuapp.com/api/v1/accounts", {
            account_type: this.state.account_type,
            client_cuil: this.state.client_cuil,
            overdraft: this.state.overdraft
        })
        alert(`Cuenta creada con éxito`)
    }

    handleChangeType(event) {
        this.setState({ account_type: event.target.value });
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Nueva cuenta</h1>
                <form onSubmit={this.onSubmit}>
                    {/* <h4>Seleccione cliente</h4> */}

                    <div className="form-group form-group-default">
                        <label>Tipo de cuenta a crear</label>
                        <select required onChange={(event) => this.setState({ account_type: event.target.value })} className='form-control' onChange={this.handleChangeType} >
                            <option value='' disabled selected>Seleccioná una opción</option>
                            <option value="CA">Caja de ahorro</option>
                            <option value="CC">Cuenta corriente</option>
                        </select>
                    </div>
                    <div className='row'>

                        <div className='col-md-6'>
                            <div className="form-group form-group-default">
                                <label>Número de CUIT/CUIL</label>
                                <input required pattern='\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]' onChange={(event) => this.setState({ client_cuil: event.target.value })} type="text" name="cuil" id="cuil" placeholder="..." className="form-control" />
                            </div>
                        </div>

                        {this.state.account_type == 'CC' &&

                            <div className='col-md-6'>
                                <div className="form-group form-group-default">
                                    <label>Acuerdo Giro (Descubierto)</label>
                                    <input required onChange={(event) => this.setState({ overdraft: event.target.value })} type="text" name="overdraft" id="overdraft" placeholder="$ Ingrese Monto" className="form-control" />
                                </div>
                            </div>
                        }
                    </div>


                    {/* 
                            <div className="form-group form-group-default">
                                <label>Tipo de cuenta a crear</label>
                                <select required onChange={(event)=> this.setState({account_type:event.target.value})} className='form-control'>
                                    <option value='' disabled selected>Seleccioná una opción</option>
                                    <option value="CA">Caja de ahorro</option>
                                    <option value="CC">Cuenta corriente</option>
                                </select>
                            </div> */}

                    <button type="submit" className="btn btn-primary">Confirmar operación</button>

                </form>

            </div>
        );
    }
}

export default NewAccountOperation;


