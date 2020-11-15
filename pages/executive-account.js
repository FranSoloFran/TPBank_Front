import React, { Component } from 'react';
import SideBarAccount from '../components/SideBarAccount/SideBarAccount';
import NewClientOperation from '../components/NewClientOperation/NewClientOperation';
import NewAccountOperation from '../components/NewAccountOperation/NewAccountOperation';
import SearchClientOperation from '../components/SearchClientOperation/SearchClientOperation';
import sessionManager from '../services/sessionManager'

const operations=[
    {name:'Nuevo cliente', value:'new-client'},
    {name:'Nueva cuenta',value:'new-account'},
    {name:'Buscar cliente', value:'search-client'}
]

class ExecutiveAccount extends Component {
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
        if (!this.sessionManager.isLogged('Executive')){
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
                { this.state.operation == 'new-client' &&
                    <NewClientOperation />
                }
                { this.state.operation == 'new-account' &&
                    <NewAccountOperation />
                }
                { this.state.operation == 'search-client' &&
                    <SearchClientOperation />
                }
                

            </React.Fragment>
        );
    }
}

export default ExecutiveAccount;
