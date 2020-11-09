import React, { Component } from 'react';

class NewAccountOperation extends Component {
    render() {
        return (

            <div className="container container-operation">
                <h1>Nueva cuenta</h1>
                <form>                
                            <h4>Seleccione cliente</h4>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Tipo de documento</label>
                                        <select className='form-control'>
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
                                        <input type="text" name="firstname" id="firstname" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group form-group-default">
                                <label>Tipo de cuenta a crear</label>
                                <select className='form-control'>
                                    <option>Caja de ahorro</option>
                                    <option>Cuenta corriente</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Confirmar operación</button>               

                </form>

            </div>
        );
    }
}

export default NewAccountOperation;


