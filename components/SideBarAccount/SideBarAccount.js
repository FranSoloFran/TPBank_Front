import React, { Component } from 'react';
import 'bootstrap-navbar-sidebar/dist/navbar-fixed-left.min.css'

class SideBarAccount extends Component {
    constructor(props){
        super(props)
        this.state={
            operation:null
        }
        this.onClickOperation = this.onClickOperation.bind(this)
    }

    onClickOperation(selectedOperation){
        this.props.onChange(selectedOperation)
        this.setState({
            operation:selectedOperation
        })
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark fixed-left navbar-admin">
                    <a className="navbar-brand" href>Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav">
                            {this.props.operations.map((operation) => (
                                <li className="nav-item">
                                <a className={`nav-link ${this.state.operation == operation.value ? 'nav-link-selected' : ''}`} onClick={() => this.onClickOperation(operation.value)}>{operation.name}</a>
                            </li>
                            ))    
                        }
                           
                            <li className="nav-item">
                                <a className="nav-link">Cerrar sesión</a>
                            </li>
                        </ul>
                    </div>
                </nav>

              
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

            </React.Fragment>
        );
    }
}

export default SideBarAccount;
