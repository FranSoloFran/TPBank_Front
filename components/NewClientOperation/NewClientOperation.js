import React, { Component } from 'react';

class NewClientOperation extends Component {
    constructor() {
        super()
        this.state = {
            type: null
        }
        this.handleChangeType = this.handleChangeType.bind(this);
    }
    handleChangeType(event) {
        this.setState({ type: event.target.value });
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Nuevo cliente</h1>
                <form>

                    <div className="form-group form-group-default">
                        <label>Tipo de cliente</label>
                        <select className='form-control' value={this.state.type} onChange={this.handleChangeType}>
                            <option disabled selected>Selecciona una opción</option>

                            <option value='pj'>Persona juridica</option>
                            <option value='pf'>Persona física</option>
                        </select>
                    </div>
                    {this.state.type == 'pf' &&
                        <div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Apellido</label>
                                        <input type="text" name="lastname" id="lastname" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Nombre</label>
                                        <input type="text" name="firstname" id="firstname" placeholder="..." className="form-control" />
                                    </div>
                                </div>

                            </div>
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

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Fecha de nacimiento</label>
                                        <input type="date" name="firstname" id="firstname" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Nacionalidad</label>
                                        <input type="text" name="firstname" id="firstname" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    }

                    {this.state.type == 'pj' &&
                        <div>
                            <div className="form-group form-group-default">
                                <label>Razón social</label>
                                <input type="text" name="lastname" id="lastname" placeholder="..." className="form-control" />
                            </div>


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

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Fecha de comienzo de actividades</label>
                                        <input type="date" name="firstname" id="firstname" placeholder="..." className="form-control" />
                                    </div>
                                </div>

                            </div>


                        </div>
                    }
                    {this.state.type &&
                        <React.Fragment>
                            <div className="form-group form-group-default">
                                <label>Tipo de cuenta</label>
                                <select className='form-control'>
                                    <option>Caja de ahorro</option>
                                    <option>Cuenta corriente</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Confirmar operación</button>
                        </React.Fragment>

                    }



                </form>

            </div>
        );
    }
}

export default NewClientOperation;


