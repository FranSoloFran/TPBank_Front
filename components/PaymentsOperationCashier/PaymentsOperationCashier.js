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
            serviceId:null
        }
        this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeElectronicCode = this.onChangeElectronicCode.bind(this)
    }

    onChangeAccountNumber(event) {
        //Pegado a backend
        const selectedAccount = event.target.value;

        this.setState({
            accountNumber: selectedAccount,
            clientName: 'Juan Carlos Pere',
            electronicCode: null,
            documentNumber:null,
            debtAmount:null,
            serviceName:'',
            expirationDate:null
        })
    }

    onChangeAmount(event) {
        this.setState({
            amount: event.target.value
        })
    }

    onChangeElectronicCode(){
/*         axios.get('https://bank-api-integrations.herokuapp.com/api/v1/payments/search/electronicCode/' + this.state.electronicCode)
        .then(res => {
            this.state.serviceId= res.data.serviceId,
            this.state.debtAmount=res.data.amount,
            this.state.serviceName=res.data.serviceName,
            this.state.expirationDate=res.data.date
        }) */

        this.setState({
            debtAmount:100,
            serviceName:'Cablevision',
            expirationDate:'2014-01-01'
        })

    }

    onSubmit(event) {
        event.preventDefault()
        console.log(this.state.accountNumber)
        console.log(this.state.serviceId)

        axios.post('https://bank-api-integrations.herokuapp.com/api/v1/payments',
                {   "id":1, 
                    "cash":true
            })
        .then(res => {
            console.log(res);
        })
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Pago de servicios</h1>

                <div className="money-transfer-form">
                    
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group form-group-default">
                            <label>Número de pago electronico</label>
                            <input required value={this.state.electronicCode} required onChange={this.onChangeElectronicCode} type="text" name="electronicCode" id="electronicCode" placeholder="000000" className="form-control" />
                            <span className='form-extra-data'></span>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Servicio: {this.state.serviceName} - Monto: {this.state.debtAmount} - Fecha: {this.state.expirationDate} </label>                       
                        </div>

                        <div className="form-group">
                            <label>Monto a pagar</label>
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

                        <button type="submit" className="btn btn-primary">Confirmar operación</button>


                    </form>
                </div>

            </div>
        );
    }
}

export default PaymentsOperation;


