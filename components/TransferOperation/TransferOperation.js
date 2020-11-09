import React, { Component } from 'react';

class TransferOperation extends Component {
    render() {
        return (

            <div className="container container-operation">
                <h1>Transferencias</h1>

                <div className="money-transfer-form">
                    <form>

                         <div className="form-group form-group-default">
                            <label>Cuenta de origen</label>
                            <select className='form-control'>
                                        <option>CA: 000000000015</option>
                                        <option>CC: 000000000016</option>
                            </select>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Número de cuenta a transferir</label>
                            <input type="text" name="account-number" id="account-number" placeholder="000000000000000" className="form-control" />
                            <span className='form-extra-data'>Juan Carlos Pereyra</span>
                        </div>

                        <div className="form-group">
                            <label>Monto a transferir </label>
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

export default TransferOperation;


