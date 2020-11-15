import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import sessionManager from '../services/sessionManager'

const clientes = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/clients/'
})

const cuentas = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/clients/'
})

const cuenta = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/accounts/'
})

const transacciones = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/accounts/6/transactions'
})

class Account extends Component {
    constructor() {
        super()
        this.state = {
            client:null,
            client_id:null,
            account_id:null,
            lastname:null,
            firstname:null,
            documentType:null,
            documentNumber:null,
            cuil:null,
            email:null,
            status:null,
            startActivityDate:null,
            accounts:[],
            business_name:null,
            overdraft:null,
            transactions:[]
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        // this.onChangeOverdraft = this.onChangeOverdraft.bind(this)
        // this.onSubmitOverdraft = this.onSubmitOverdraft.bind(this)

    }

    componentDidMount(){
        this.sessionManager = new sessionManager()
        this.state.account_id  = this.sessionManager.getAccount();
        this.state.client_id = this.sessionManager.getClientId();
        console.log(this.state.account_id);
        console.log(this.state.client_id);

        clientes.get(this.state.client_id).then(res => {
            console.log(res.data);
            this.state.lastname = res.data.last_name;
            this.state.email = res.data.email;
            this.state.status = res.data.status;
            this.state.firstname = res.data.name;
            this.state.id = res.data.id;
      
            cuentas.get(this.state.id + '/accounts').then(resp => {
                console.log(resp.data);
                this.state.accounts = resp.data;
            
                cuenta.get(this.state.account_id + '/transactions').then(respu => {
                    console.log(respu.data);
                    this.state.transactions = respu.data;
                   
                    this.setState({
                        client: true
                })

                
                })

            }
            )
        .catch(function (error)
        {console.log(error)})
        
        })
  
    }

    render() {
        return (
            <div className="container container-operation">
                <a className="btn btn-primary" href="javascript:history.back();">Volver</a>
                <h1>Cuenta número {this.state.account_id}</h1>
                <div className="money-transfer-form">
                <div className='row'>
                {/* {this.state.transactions.map(transaction => (
                        <div className='col-md-6'>
                            <div className="form-group form-group-default">
                                <label>{transaction.type} - {transaction.detail}</label>
                                <p><b>Cantidad:</b> {transaction.amount}</p>
                            </div>
                        </div>     
  
            )   
        )
        } */}
        </div> 
        </div>  
        </div>
        )}

}
export default Account;

