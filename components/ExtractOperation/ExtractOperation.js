import React, { Component } from 'react';
import sessionManager from '../../services/sessionManager'
import axios from 'axios';

class ExtractOperation extends Component {
    constructor() {
        super()
        this.state = {
            accountNumber: null,
            amount: 0,
            clientName: null,
            clientId: 0,
            accounts: []
        }
        this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSubmitSearch = this.onSubmitSearch.bind(this)
        this.findAccount = this.findAccount.bind(this)
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
        axios.post('https://bank-api-integrations.herokuapp.com/api/v1/withdraws',
            {
                detail: "Extracción de dinero",
                amount: this.state.amount,
                account_id: this.state.accountNumber
            })
            .then(res => {
                console.log(res);
                alert('Extracción realizado con éxito')
            }).catch((error) => {
                console.log(error)
                alert("Error al realizar la extracción")
            })
    }


    onSubmitSearch(event) {
        event.preventDefault()

        this.setState({
            accounts: []
        })
        if (this.state.documentType == 'dni') {
            axios.get('https://bank-api-integrations.herokuapp.com/api/v1/clients/search?dni=' + this.state.documentNumber)
                .then(res => {
                    this.setState({
                        clientName: res.data.name + ' ' + res.data.last_name,
                        clientId: res.data.id
                    }, this.findAccount(res.data.id))
                }).catch((error) => {
                    console.log(error)
                    alert("Error en la busqueda de usuario")
                })
        }
        else {
            axios.get('https://bank-api-integrations.herokuapp.com/api/v1/clients/search?cuil=' + this.state.documentNumber)
                .then(res => {
                    this.setState({
                        clientName: res.data.name + ' ' + res.data.last_name,
                        clientId: res.data.id
                    }, this.findAccount(res.data.id))
                }).catch((error) => {
                    console.log(error)
                    alert("Error en la busqueda de usuario")
                })
        }
    }

    findAccount(clientId) {
        axios.get(`https://bank-api-integrations.herokuapp.com/api/v1/clients/${clientId}/accounts`)
            .then(res => {
                if(res.data.length == 0) {
                    alert("No se encontraron cuentas para el usuario")
                }
                this.setState({ accounts: res.data })
            }).catch((error) => {
                console.log(error)
                alert("Error en la busqueda de cuenta")
            })
    }


    render() {
        const docNumberPattern = this.state.documentType == 'cuil' ? "(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]" : null
        return (

            <div className="container container-operation">
                <h1>Extracción</h1>

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
                                    <input required pattern={docNumberPattern} onChange={(event) => this.setState({ documentNumber: event.target.value })} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" name="buscar" className="btn btn-primary">Buscar cliente</button>
                    </form>

                    {this.state.accounts.length > 0 &&

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
                                <label>Monto a extraer </label>
                                <div className="money-transfer-field">
                                    <input min={0} required value={this.state.amount} step="0.01" onChange={this.onChangeAmount} type="number" name="amount" id="amount" className="form-control" placeholder="1,000" />
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

export default ExtractOperation;


