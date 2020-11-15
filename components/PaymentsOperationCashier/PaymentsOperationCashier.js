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
            provider_name:null
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

    onSubmitSearchPayment(event) {
        event.preventDefault()
        console.log(this.state.electronicCode)

        axios.get('https://bank-api-integrations.herokuapp.com/api/v1/payments/search/electronicCode/' + this.state.electronicCode)
            .then(res => {
                this.setState({
                    serviceId : res.data.id,
                    amount : res.data.amount,
                    provider_name : res.data.provider_name,
                    date : res.data.date,
                })
                    console.log(res.data.provider_name)
            }).catch((error)=>{
                console.log(error)
                alert("Error buscar el pago")
            })       

    }

    onSubmit(event) {
        event.preventDefault()

        axios.post('https://bank-api-integrations.herokuapp.com/api/v1/payments',
            {
                id:this.state.serviceId, 
                cash:true
            })
            .then(res => {
                console.log(res);
                alert("Pago realizado con éxito")
            }).catch((error)=>{
                console.log(error)
                alert("Error al insertar el pago")
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

                        <button type="submit" name="buscar" className="btn btn-primary">Buscar factura</button>
                    </form>

                    {this.state.provider_name &&
                        <form onSubmit={this.onSubmit}>

                            <div className="form-group form-group-default">
                                <label>Comprobante </label>
                                <span className='form-extra-data'>Servicio: {this.state.provider_name} - Fecha: {this.state.date} </span>
                            </div>

                            <div className="form-group">
                                <label>Monto a pagar</label>
                                <div className="money-transfer-field">
                                    <span className='form-extra-data'>{this.state.amount} </span>
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

                    }


                </div>

            </div>
        );
    }
}

export default PaymentsOperation;


