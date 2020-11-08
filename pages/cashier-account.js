import React, { Component } from 'react';
import SideBarAccount from '../components/SideBarAccount/SideBarAccount';
import DepositOperation from '../components/DepositOperation/DepositOperation';

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
                <SideBarAccount onChange={this.onChangeOperation} />

                { !this.state.operation &&
                    <div className='container'>
                        <h2>Hola $Usuario</h2>
                        <p>En el menú selecciona la operación que deseas realizar</p>
                    </div>
                }
                { this.state.operation == 'deposit' &&
                    <DepositOperation />
                }

                

            </React.Fragment>
        );
    }
}

export default CashierAccount;
