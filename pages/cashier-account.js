import React, { Component } from 'react';
import SideBarAccount from '../components/SideBarAccount/SideBarAccount';
import DepositOperation from '../components/DepositOperation/DepositOperation';
import ExtractOperation from '../components/ExtractOperation/ExtractOperation';
import PaymentsOperation from '../components/PaymentsOperation/PaymentsOperation';
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

    render() {
        return (
            <React.Fragment>
                <SideBarAccount operations={operations} onChange={this.onChangeOperation} />

                { !this.state.operation &&
                    <div className='container container-operation'>
                        <h1>Hola $Usuario</h1>
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
                    <PaymentsOperation />
                }
                

            </React.Fragment>
        );
    }
}

export default CashierAccount;
