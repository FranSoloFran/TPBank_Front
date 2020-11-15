import React, { Component } from 'react';
import sessionManager from '../../services/sessionManager'
import axios from 'axios';

class DepositOperation extends Component {

    constructor() {
        super()
        this.state = {
            accountNumber: null,
            amount: 0,
            clientName: null,
            clientId: 0,
            accounts: [],
            documentType: null
        }
        this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSubmitSearch = this.onSubmitSearch.bind(this)
    }

    onChangeAccountNumber(event) {
        this.setState({
            accountNumber: event.target.value
        })
    }

    onChangeAmount(event) {
        this.setState({
            amount: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        axios.post('https://bank-api-integrations.herokuapp.com/api/v1/deposits',
            {
                detail: "Deposito de dinero",
                amount: this.state.amount,
                account_id: this.state.accountNumber
            })
            .then(res => {
                console.log(res);
            })
        alert('Deposito realizado con éxito')
    }

    onSubmitSearch(event) {
        event.preventDefault()

        if (this.state.documentType == 'dni') {
            axios.get('https://bank-api-integrations.herokuapp.com/api/v1/clients/search?dni=' + this.state.documentNumber)
                .then(res => {
                    this.state.clientName = res.data.name + ' ' + res.data.last_name
                    this.state.clientId = res.data.id;
                    console.log(res.data.id)
                })
        }
        else {
            axios.get('https://bank-api-integrations.herokuapp.com/api/v1/clients/search?cuil=' + this.state.documentNumber)
                .then(res => {
                    this.state.clientName = res.data.name + ' ' + res.data.last_name
                    this.state.clientId = res.data.id;
                    console.log(res.data.id)
                })
        }

        axios.get(`https://bank-api-integrations.herokuapp.com/api/v1/clients/${this.state.clientId}/accounts`)
            .then(res => {
                console.log(res);
                this.setState({ accounts: res.data })
                console.log(res.data)
            })
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Depósito</h1>

                <div className="money-transfer-form">

                    <form onSubmit={this.onSubmitSearch}>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group form-group-default">
                                    <label>Tipo de documento</label>
                                    <select required onChange={(event) => this.setState({ documentType: event.target.value })} className='form-control'>
                                        <option value='' disabled selected>Selecciona una opción</option>
                                        <option value="dni">DNI</option>
                                        <option value="cuil">CUIT/CUIL</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group form-group-default">
                                    <label>Número de documento</label>
                                    <input required onChange={(event) => this.setState({ documentNumber: event.target.value })} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" name="buscar" className="btn btn-primary">Buscar cliente</button>
                    </form>

                    <form onSubmit={this.onSubmit}>

                        <div className="form-group form-group-default">
                            <label>Cuenta</label>
                            <select onChange={this.onChangeAccountNumber} required className='form-control'>
                                <option value='' disabled selected>Seleccioná una opción</option>
                                {this.state.accounts.map((account) => (
                                    <option value={account.id} >{account.account_type} : {account.identification_number}</option>
                                ))
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Monto a depositar </label>
                            <div className="money-transfer-field">
                                <input min={0} required value={this.state.amount} onChange={this.onChangeAmount} type="number" name="amount" id="amount" className="form-control" placeholder="1,000" />
                                <div className="amount-currency-select">
                                    <i className="fas fa-chevron-down"></i>
                                    <select>
                                        <option>ARS</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="submit" name="procesar" className="btn btn-primary">Confirmar operación</button>

                    </form>
                </div>

            </div>
        );
    }
}

export default DepositOperation;


