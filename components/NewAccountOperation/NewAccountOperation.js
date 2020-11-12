import React, { Component } from 'react';

class NewAccountOperation extends Component {
    constructor() {
        super()
        this.state = {
            documentType:null,
            documentNumber:null,
            accountType:null
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        axios.post("https://bank-api-integrations.herokuapp.com/api/v1/accounts", {
            documentType: this.state.documentType,
            documentNumber: this.state.documentNumber,
            accountType: this.state.accountType,
            })
        event.preventDefault()
        //Llamada a backend
        alert(`Cuenta creada con éxito`)
    }


    render() {
        return (

            <div className="container container-operation">
                <h1>Nueva cuenta</h1>
                <form onSubmit={this.onSubmit}>                
                            <h4>Seleccione cliente</h4>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Tipo de documento</label>
                                        <select required onChange={(event)=> this.setState({documentType:event.target.value})} className='form-control'>
                                            <option value='' disabled selected>Seleccioná una opción</option>
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

                            <div className="form-group form-group-default">
                                <label>Tipo de cuenta a crear</label>
                                <select required onChange={(event)=> this.setState({accountType:event.target.value})} className='form-control'>
                                    <option value='' disabled selected>Seleccioná una opción</option>
                                    <option value="CA">Caja de ahorro</option>
                                    <option value="CC">Cuenta corriente</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Confirmar operación</button>               

                </form>

            </div>
        );
    }
}

export default NewAccountOperation;


