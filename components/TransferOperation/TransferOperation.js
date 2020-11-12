import React, { Component } from 'react';
import sessionManager from '../../services/sessionManager'
import axios from 'axios';


class TransferOperation extends Component {

    constructor() {
        super()
        this.state = {
            originAccount:null,
            destinationAccount:null,
            accounts: [],
            accountNumber: null,
            amount: 0,
            clientName: null,
            userId: null
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

        const number = this.state.accountNumber

        axios.get(`https://bank-api-integrations.herokuapp.com/api/v1/accounts/search/cbu/${number}`)
            .then(res => {
                console.log(res);
                this.setState({ destinationAccount: res.data.id})                
                // verificar catcheo de error
            })

            //post a transacción, no funciona
        
        axios.post('https://bank-api-integrations.herokuapp.com/api/v1/transactions',
                {detail:"Deposito",
                amount:200.30,
                transaction_type:"DEP",
                cash:false,
                type_operation:"I",
                account_id:this.state.destinationAccount,
                account_origin_id:this.state.originAccount
            })
        .then(res => {
            console.log(res);
        })

        alert('Transferencia realizada con éxito')
    }

    componentDidMount() {
        this.sessionManager = new sessionManager()
        const userId = this.sessionManager.getUserId()
           
        axios.get(`https://bank-api-integrations.herokuapp.com/api/v1/clients/${userId}/accounts`)
            .then(res => {
                console.log(res);
                this.setState({ accounts: res.data, userId: userId })
                console.log(res.data)
                // verificar catcheo de error
                //console.log(accounts)
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
                                <option value='' disabled selected>Selecciona una opción</option>
                                {this.state.accounts.map((account) => (
                                    <option value={account.id} >{account.account_type} : {account.identification_number}</option>
                                ))
                                }

                            </select>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Número de cuenta a transferir</label>
                            <input required value={this.state.accountNumber} on onChange={this.onChangeAccountNumber} type="text" name="account-number" id="account-number" placeholder="000000000000000" className="form-control" />
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


