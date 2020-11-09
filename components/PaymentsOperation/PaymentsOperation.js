import React, { Component } from 'react';

class PaymentsOperation extends Component {
    render() {
        return (

            <div className="container container-operation">
                <h1>Pago de servicios</h1>

                <div className="money-transfer-form">
                    <form>
                        <div className="form-group form-group-default">
                            <label>Número de cuenta</label>
                            <input type="text" name="name" id="name" placeholder="000000000000000" className="form-control" />
                            <span className='form-extra-data'>Juan Carlos Pereyra</span>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Servicio</label>
                            <select className='form-control'>
                                        <option>AYSA</option>
                                        <option>EDESUR</option>
                                        <option>Fibertel</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Monto a pagar</label>
                            <div className="money-transfer-field">
                                <input type="text" className="form-control" placeholder="1,000" />
                                <div className="amount-currency-select">
                                    <i className="fas fa-chevron-down"></i>
                                    <select>
                                        <option>ARS</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Confirmar operación</button>


                    </form>
                </div>

            </div>
        );
    }
}

export default PaymentsOperation;


