import React, { Component } from 'react';
import SideBarAccount from '../components/SideBarAccount/SideBarAccount';
import PaymentsOperation from '../components/PaymentsOperation/PaymentsOperation';
import TransferOperation from '../components/TransferOperation/TransferOperation';
import BalanceOperation from '../components/BalanceOperation/BalanceOperation';

const operations=[
    {name:'Consulta de saldos', value:'balance'},
    {name:'Transferencias',value:'transfer'},
    {name:'Pago de servicios', value:'payments'}
]

class UserAccount extends Component {
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
                { this.state.operation == 'balance' &&
                    <BalanceOperation />
                }
                { this.state.operation == 'transfer' &&
                    <TransferOperation />
                }
                { this.state.operation == 'payments' &&
                    <PaymentsOperation />
                }
                

            </React.Fragment>
        );
    }
}

export default UserAccount;
