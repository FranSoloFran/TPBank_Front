import React, { Component } from 'react';

class BalanceOperation extends Component {
    constructor() {
        super()
        this.state = {
            account: null,
            accounts: [],
            movements: []
        }
        this.onChangeAccount = this.onChangeAccount.bind(this)
    }

    onChangeAccount(event) {
        //Llamada a backend account seleccionada para obtener movimientos
        const movements = [
            { idOperation: '16716', detail: 'Compra en Fravega', amount: '1555' },
            { idOperation: '16717', detail: 'Compra en Garbarino', amount: '95000' },
            { idOperation: '16718', detail: 'MercadoPago', amount: '70' }
        ]

        this.setState({
            account: event.target.value,
            movements: movements
        })
    }

    componentDidMount() {
        //Llamada a backend para obtener las cuentas by userid
        const accounts = [
            { type: 'CA', number: '00000000015' },
            { type: 'CC', number: '00000000016' }
        ]
        this.setState({
            accounts: accounts
        })
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Consulta de saldos</h1>

                <div className="money-transfer-form">
                    <form>
                        <div className="form-group form-group-default">
                            <label>Cuenta</label>
                            <select onChange={this.onChangeAccount} required className='form-control'>
                                <option value='' disabled selected>Selecciona una opción</option>
                                {this.state.accounts.map((account) => (
                                    <option value={account.number} >{account.type} : {account.number}</option>
                                ))
                                }
                            </select>
                        </div>
                    </form>
                </div>

                {this.state.movements &&
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Número de operación</th>
                                <th scope="col">Detalle</th>
                                <th scope="col">Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movements.map((movement) => (
                                <tr>
                                    <td>{movement.idOperation}</td>
                                    <td>{movement.detail}</td>
                                    <td>{movement.amount}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export default BalanceOperation;


