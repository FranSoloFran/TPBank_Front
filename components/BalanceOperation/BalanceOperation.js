import React, { Component } from 'react';
import axios from 'axios';
import sessionManager from '../../services/sessionManager'

class BalanceOperation extends Component {
    constructor() {
        super()
        this.state = {
            account: null,
            accounts: [],
            movements: [],
            userId: null,
            balance: null
        }
        this.onChangeAccount = this.onChangeAccount.bind(this)
    }

    onChangeAccount(event) {

        const selectedAccount = event.target.value;

        axios.get(`https://bank-api-integrations.herokuapp.com/api/v1/accounts/${selectedAccount}/transactions`)
            .then(res => {
                console.log(res.data);
                this.setState({ movements: res.data.transactions, account: selectedAccount, balance: res.data.account_detail.balance })
            }).catch((error)=>{
                console.log(error)
                alert("Error al buscar transacciones")
            });
    }

    componentDidMount() {
        this.sessionManager = new sessionManager()
        const userId = this.sessionManager.getUserId()

        axios.get(`https://bank-api-integrations.herokuapp.com/api/v1/clients/${userId}/accounts`)
            .then(res => {
                this.setState({ accounts: res.data, userId: userId })
            }).catch((error)=>{
                console.log(error)
                alert("Error al buscar cuentas")
            });
    }

    render() {
        const symbol = {
            "WITHDRAW": '-',
            "DEPOSIT":'',
            "COB":'-'
        }
        return (

            <div className="container container-operation">
                <h1>Consulta de saldos</h1>

                <div className="money-transfer-form">
                    <form>
                        <div className="form-group form-group-default">
                            <label>Cuenta</label>
                            <select onChange={this.onChangeAccount} required className='form-control'>
                                <option value='' disabled selected>Seleccioná una opción</option>
                                {this.state.accounts.map((account) => (
                                    <option value={account.id} >{account.account_type} : {account.identification_number}</option>
                                ))
                                }
                            </select>
                        </div>
                    </form>
                </div>


                {this.state.movements.length>0 &&
                    <React.Fragment>
                        <div className='balance-box'>
                            <p><strong> Balance: ${this.state.balance} </strong> </p>
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
                                {this.state.movements.map((movement) => (
                                    <tr>
                                        <td>{movement.id}</td>                                        
                                        <td>{movement.detail}</td>
                                        <td>{symbol[movement.transaction_type]}${movement.amount}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default BalanceOperation;


