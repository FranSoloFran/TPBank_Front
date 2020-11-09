import React, { Component } from 'react';

class BalanceOperation extends Component {
    render() {
        return (

            <div className="container container-operation">
                <h1>Consulta de saldos</h1>

                <div className="money-transfer-form">
                    <form>
                        <div className="form-group form-group-default">
                            <label>Cuenta</label>
                            <select className='form-control'>
                                <option>CA: 000000000015</option>
                                <option>CC: 000000000016</option>
                            </select>
                        </div>

                    </form>
                </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Número de operación</th>
                            <th scope="col">Detalle</th>
                            <th scope="col">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>157845</td>
                            <td>Compra Musimundo</td>
                            <td>$15000</td>
                        </tr>
                        <tr>
                            <td>157845</td>
                            <td>Compra Musimundo</td>
                            <td>$15000</td>
                        </tr>
                        <tr>
                            <td>157845</td>
                            <td>Compra Musimundo</td>
                            <td>$15000</td>
                        </tr>
                    </tbody>
                </table>



            </div>
        );
    }
}

export default BalanceOperation;


