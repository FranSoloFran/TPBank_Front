import React, { Component } from 'react';
import SideBarAccount from '../components/SideBarAccount/SideBarAccount';
import DepositOperation from '../components/DepositOperation/DepositOperation';
import ExtractOperation from '../components/ExtractOperation/ExtractOperation';
import PaymentsOperationCashier from '../components/PaymentsOperationCashier/PaymentsOperationCashier';
import sessionManager from '../services/sessionManager'

const operations=[
    {name:'Depósito', value:'deposit'},
    {name:'Extracción',value:'extract'},
    {name:'Pago de servicios', value:'payments'}
]

class CashierAccount extends Component {
    constructor() {
        super()
        this.state = {
            operation: null
        }
        this.onChangeOperation = this.onChangeOperation.bind(this)
    }

    onChangeOperation(newOperation) {
        this.setState({
            operation: newOperation
        })
    }
    
    componentDidMount(){
        this.sessionManager = new sessionManager()
        if (!this.sessionManager.isLogged('CASHIER')){
            this.sessionManager.logout()
            window.location.href='/login'
        }
        this.setState({
            userName:this.sessionManager.getUserName()
        })
    }

    render() {
        return (
            <React.Fragment>
                <SideBarAccount operations={operations} onChange={this.onChangeOperation} />

                { !this.state.operation &&
                    <div className='container container-operation'>
                        <h1>Hola {this.state.userName}</h1>
                        <p>En el menú selecciona la operación que deseas realizar</p>
                    </div>
                }
                { this.state.operation == 'deposit' &&
                    <DepositOperation />
                }
                { this.state.operation == 'extract' &&
                    <ExtractOperation />
                }
                { this.state.operation == 'payments' &&
                    <PaymentsOperationCashier />
                }
                

            </React.Fragment>
        );
    }
}

export default CashierAccount;
