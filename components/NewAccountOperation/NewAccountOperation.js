import React, { Component } from 'react';
import axios from 'axios';

class NewAccountOperation extends Component {
    constructor() {
        super()
        this.state = {
            documentType:null,
            cuil:null,
            account_type:null,
            giro_cantidad:null,
            dni:null
        }
        this.handleChangeType = this.handleChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        axios.post("https://bank-api-integrations.herokuapp.com/api/v1/accounts", {
            account_type: this.state.account_type,
            documentType: this.state.documentType,
            cuil: this.state.cuil,
            dni: this.state.dni,
            giro_cantidad: this.state.giro_cantidad
            })
        event.preventDefault()
        //Llamada a backend
        alert(`Cuenta creada con éxito`)
    }

    handleChangeType(event) {
        this.setState({ type: event.target.value });
    }

    render() {
        return (


            





           

            <div className="container container-operation">
                <h1>Nueva cuenta</h1>
                <form onSubmit={this.onSubmit}>                
                            {/* <h4>Seleccione cliente</h4> */}

                            <div className="form-group form-group-default">
                                <label>Tipo de cuenta a crear</label>
                                <select required onChange={(event)=> this.setState({account_type:event.target.value})} className='form-control' onChange={this.handleChangeType} >
                                    <option value='' disabled selected>Seleccioná una opción</option>
                                    <option value="CA">Caja de ahorro</option>
                                    <option value="CC">Cuenta corriente</option>
                                </select>
                            </div>
                            {this.state.type == 'CA' && 
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Tipo de documento</label>
                                        <select required onChange={(event)=> this.setState({documentType:event.target.value})} className='form-control'>
                                            <option value='' disabled selected>Seleccioná una opción</option>
                                            <option>DNI</option>
                                            {/* <option>LE</option> */}
                                            <option>CUIT/CUIL</option>
                                            {/* <option>CUIL</option> */}
                                        </select>
                                    </div>
                                </div> 
                                {this.state.documentType == 'CUIT/CUIL' &&
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Número de documento</label>
                                        <input required onChange={(event)=> this.setState({cuil:event.target.value})} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                }
                                {this.state.documentType == 'DNI' &&
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Número de documento</label>
                                        <input required onChange={(event)=> this.setState({dni:event.target.value})} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                }
                            </div>
                            }

                            {this.state.type == 'CC' &&
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Tipo de documento</label>
                                        <select required onChange={(event)=> this.setState({documentType:event.target.value})} className='form-control'>
                                            <option value='' disabled selected>Seleccioná una opción</option>
                                            <option>DNI</option>
                                            {/* <option>LE</option> */}
                                            <option>CUIT/CUIL</option>
                                            {/* <option>CUIL</option> */}
                                        </select>
                                    </div>
                                </div> 
                                {this.state.documentType == 'CUIT/CUIL' &&
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Número de documento</label>
                                        <input required onChange={(event)=> this.setState({cuil:event.target.value})} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                }
                                {this.state.documentType == 'DNI' &&
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Número de documento</label>
                                        <input required onChange={(event)=> this.setState({dni:event.target.value})} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                }
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Acuerdo Giro</label>
                                        <input required onChange={(event)=> this.setState({giro_cantidad:event.target.value})} type="text" name="giro_cantidad" id="giro_cantidad" placeholder="$ Ingrese Monto" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            
                            }
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


