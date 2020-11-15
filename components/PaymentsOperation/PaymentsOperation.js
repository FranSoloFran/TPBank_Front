import React, { Component } from 'react';
import sessionManager from '../../services/sessionManager'
import axios from 'axios';


class PaymentsOperation extends Component {

    constructor() {
        super()
        this.state = {
            accountNumber: null,
            amount: 0,
            account: null,
            accounts: [],
            clientName: null,
            serviceId: null,
            electronicCode: null,
            debtAmount: null,
            serviceName: '',
            expirationDate: null
        }
        this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeService = this.onChangeService.bind(this)
        this.onChangeElectronicCode = this.onChangeElectronicCode.bind(this)
    }

    onChangeAccountNumber(event) {
        //Pegado a backend
        const selectedAccount = event.target.value;

        this.setState({
            accountNumber: selectedAccount,
            clientName: 'Juan Carlos Pereyra',
            electronicCode: null
        })
    }

    onChangeElectronicCode() {
        /*         axios.get('https://bank-api-integrations.herokuapp.com/api/v1/payments/search/electronicCode/' + this.state.electronicCode)
                .then(res => {
                    this.state.serviceId= res.data.serviceId,
                    this.state.debtAmount=res.data.amount,
                    this.state.serviceName=res.data.serviceName,
                    this.state.expirationDate=res.data.date
                }) */

        this.setState({
            debtAmount: 100,
            serviceName: 'Cablevision',
            expirationDate: '2014-01-01'
        })

    }

    onChangeAmount(event) {
        this.setState({
            amount: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        console.log(this.state.accountNumber)
        console.log(this.state.serviceId)

        axios.post('https://bank-api-integrations.herokuapp.com/api/v1/payments',
            {
                "cash": true,
                "date": getDate(),
                "amount": debtAmount,
                "account_id": this.state.accountNumber
            })
            .then(res => {
                console.log(res);
            })
    }

    onChangeService(event) {
        this.setState({
            //serviceName:event.target.value
            serviceId: event.target.value
        })
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
            });
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Pago de servicios</h1>

                <div className="money-transfer-form">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group form-group-default">
                            <label>Número de cuenta</label>
                            <select onChange={this.onChangeAccountNumber} required className='form-control'>
                                <option value='' disabled selected>Selecciona una opción</option>
                                {this.state.accounts.map((account) => (
                                    <option value={account.id} >{account.account_type} : {account.identification_number}</option>
                                ))
                                }
                            </select>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Número de pago electronico</label>
                            <input required value={this.state.electronicCode} required onChange={this.onChangeElectronicCode} type="text" name="electronicCode" id="electronicCode" placeholder="000000" className="form-control" />
                            <span className='form-extra-data'></span>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Comprobante </label>
                            <span className='form-extra-data'>Servicio: {this.state.serviceName} - Monto: {this.state.debtAmount} - Fecha: {this.state.expirationDate} </span>
                        </div>

                        <div className="form-group">
                            <label>Monto a pagar</label>
                            <div className="money-transfer-field">
                                <input min={100} required value={this.state.amount} onChange={this.onChangeAmount} type="number" name="amount" id="amount" className="form-control" placeholder="5" />
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


