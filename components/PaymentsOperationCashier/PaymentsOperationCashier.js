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
            electronicCode: null
        }
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        //this.onChangeElectronicCode = this.onChangeElectronicCode.bind(this)
        this.onSubmitSearchPayment = this.onSubmitSearchPayment.bind(this)

    }


    onChangeAmount(event) {
        this.setState({
            amount: event.target.value
        })
    }

    onSubmitSearchPayment() {
        event.preventDefault()
        console.log(this.state.electronicCode)

        axios.get('https://bank-api-integrations.herokuapp.com/api/v1/payments/search/electronicCode/' + this.state.electronicCode)
            .then(res => {
                    this.state.serviceId = res.data.id,
                    this.state.amount = res.data.amount,
                    this.state.provider_name = res.data.provider_name,
                    this.state.date = res.data.date,
                    console.log(res.data.provider_name)
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
                "amount": debtAmount
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

                    <form onSubmit={this.onSubmitSearchPayment}>

                        <div className="form-group form-group-default">
                            <label>Número de pago electronico</label>
                            <input required onChange={(event) => this.setState({ electronicCode: event.target.value })} type="number" name="electronicCode" id="electronicCode" placeholder="000000" className="form-control" />
                            <span className='form-extra-data'></span>
                        </div>

                        <div className="form-group form-group-default">
                            <label>Comprobante </label>
                            <span className='form-extra-data'>Servicio: {this.state.priveder_name} - Monto: {this.state.amount} - Fecha: {this.state.date} </span>
                        </div>

                        <button type="submit" name="buscar" className="btn btn-primary">Buscar factura</button>
                    </form>

                    <form onSubmit={this.onSubmit}>

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


