import React, { Component } from 'react';

class TransferOperation extends Component {

    constructor() {
        super()
        this.state = {
            originAccount:null,
            accounts: [],
            accountNumber: null,
            amount: 0,
            clientName: null,
        }
        this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeOriginAccount = this.onChangeOriginAccount.bind(this) 
               
    }

    onChangeAccountNumber(event) {
        //Pegado a backend
        this.setState({
            accountNumber: event.target.value,
            clientName: 'Juan Carlos Pereyra'
        })
    }

    onChangeAmount(event) {
        this.setState({
            amount: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        //Llamada a backend
        alert('Pago realizado con éxito')
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

    onChangeOriginAccount(event){
        this.setState({
            originAccount:event.target.value
        })
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Transferencias</h1>

                <div className="money-transfer-form">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group form-group-default">
                            <label>Cuenta de origen</label>
                            <select  onChange={this.onChangeOriginAccount}  required className='form-control'>
                                <option value='' disabled selected>Seleccioná una opción</option>
                                {this.state.accounts.map((account) => (
                                    <option value={account.number} >{account.type} : {account.number}</option>
                                ))
                                }

                            </select>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Número de cuenta a transferir</label>
                            <input required value={this.state.accountNumber} onChange={this.onChangeAccountNumber} type="text" name="account-number" id="account-number" placeholder="000000000000000" className="form-control" />
                            <span className='form-extra-data'>{this.state.clientName}</span>
                        </div>

                        <div className="form-group">
                            <label>Monto a transferir </label>
                            <div className="money-transfer-field">
                            <input min={100} required value={this.state.amount} onChange={this.onChangeAmount} type="number" name="amount" id="amount" className="form-control" placeholder="1,000" />
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


