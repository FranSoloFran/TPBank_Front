import React, { Component } from 'react';

class SearchClientOperation extends Component {
    constructor() {
        super()
        this.state = {
            client: null
        }
        this.onSubmit = this.onSubmit.bind(this)

    }

    onSubmit(event) {
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


