import React, { Component } from 'react';
import sessionManager from '../../services/sessionManager'
import axios from 'axios';


class TransferOperation extends Component {

    constructor() {
        super()
        this.state = {
            originAccount: null,
            destinationAccount: null,
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
        this.sendTransfer = this.sendTransfer.bind(this)
        this.onSubmitSearchClient = this.onSubmitSearchClient.bind(this)

    }

    onChangeAccountNumber(event) {
        this.setState({
            accountNumber: event.target.value,
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
                this.setState({ destinationAccount: res.data.id }, this.sendTransfer(res.data.id))
            }).catch((error) => {
                console.log(error)
                alert("Error en la busqueda de cuenta de destino")
            })
    }

    onSubmitSearchClient(event) {
        event.preventDefault()
        console.log(this.state.accountNumber)

        axios.get('https://bank-api-integrations.herokuapp.com/api/v1/clients/search/cbu/' + this.state.accountNumber)
            .then(res => {
                this.setState({
                    clientName: res.data.name + ' ' + res.data.last_name,
                    clientId: res.data.id
                })
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
                alert("Error en la busqueda de usuario")
            })
    }


    sendTransfer(destinationAccount) {

        axios.post('https://bank-api-integrations.herokuapp.com/api/v1/transfers',
            {              
                amount: this.state.amount,
                destination_account: this.state.accountNumber,
                source_account: this.state.originAccount
            })
            .then(res => {
                alert('Transferencia realizada con éxito')
            }).catch((error) => {
                console.log(error)
                alert("Error al efectuar la transferencia")
            })

    }

    componentDidMount() {
        this.sessionManager = new sessionManager()
        const userId = this.sessionManager.getUserId()

        axios.get(`https://bank-api-integrations.herokuapp.com/api/v1/clients/${userId}/accounts`)
            .then(res => {
                this.setState({ accounts: res.data, userId: userId })
            }).catch((error) => {
                console.log(error)
                alert("Error en la busqueda de cuentas")
            })
    }

    onChangeOriginAccount(event) {
        this.setState({
            originAccount: event.target.value
        })
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Transferencias</h1>

                <div className="money-transfer-form">
                    <form onSubmit={this.onSubmitSearchClient}>

                        <div className="form-group form-group-default">
                            <label>Cuenta de origen</label>
                            <select onChange={this.onChangeOriginAccount} required className='form-control'>
                                <option value='' disabled selected>Seleccioná una opción</option>
                                {this.state.accounts.map((account) => (
                                    <option value={account.identification_number} >{account.account_type} : {account.identification_number}</option>
                                ))
                                }

                            </select>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Número de cuenta a transferir</label>
                            <input required value={this.state.accountNumber} on onChange={this.onChangeAccountNumber} type="text" name="account-number" id="account-number" placeholder="0000000000000000000000" className="form-control" />
                            <span className='form-extra-data'>{this.state.clientName}</span>
                        </div>

                        <button type="submit" name="buscar" className="btn btn-primary">Buscar Cliente</button>
                    </form>

                    {this.state.clientName &&

                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label>Monto a transferir </label>
                            <div className="money-transfer-field">
                                <input min={0} required value={this.state.amount} onChange={this.onChangeAmount} type="number" name="amount" id="amount" className="form-control" placeholder="1,000" />
                                <div className="amount-currency-select">
                                    <select disabled>
                                        <option>ARS</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Confirmar operación</button>
                    </form>
                    }
                </div>
                

            </div>
        );
    }
}

export default TransferOperation;


