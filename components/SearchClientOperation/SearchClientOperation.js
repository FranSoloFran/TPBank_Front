import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import sessionManager from '../../services/sessionManager'

const clientes = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/clients/'
})

const cuentas = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/clients/'
})

const cuenta = axios.create({
    baseURL: 'https://bank-api-integrations.herokuapp.com/api/v1/accounts/'
})

class SearchClientOperation extends Component {
    constructor() {
        super()
        this.state = {
            client: null,
            id:null,
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
            account_id:null,
            transactions:[],
            balance:null,
            account:null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeOverdraft = this.onChangeOverdraft.bind(this)
        this.onSubmitOverdraft = this.onSubmitOverdraft.bind(this)
        this.searchButton = React.createRef();

    }

    componentDidMount() {
        this.sessionManager = new sessionManager()
    }

    onSubmit(event) {
        event.preventDefault()

        this.setState({
            client:null,
            transactions:[]
        })

        const this_ = this
        if (this.state.documentType === 'dni') {
            clientes.get('search?dni=' + this.state.documentNumber)
                .then(res => {
                    this.setState({
                        lastname: res.data.last_name,
                        email: res.data.email,
                        status: res.data.status,
                        firstname: res.data.name,
                        id: res.data.id,
                        business_name:''
                    })
                    cuentas.get(this.state.id + '/accounts')
                    .then(resp => {
                        this.setState({
                            client: true,
                            accounts:resp.data
                        })
                    }).catch(function (error) { 
                        console.log(error) 
                        alert("Error al buscar cuentas")
                    })
                }).catch(function (error) { 
                    console.log(error) 
                    this_.setState({
                        lastname: '',
                        email: '',
                        status: '',
                        firstname: '',
                        id: '',
                        business_name:'',
                        client:false,
                        accounts:[]
                    })
                    alert("Error al buscar cliente")                    
                })
        } else if (this.state.documentType === 'cuil') {
            clientes.get('search?cuil=' + this.state.documentNumber).then(res => {
                this.setState({
                    lastname: res.data.last_name,
                    email: res.data.email,
                    status: res.data.status,
                    firstname: res.data.name,
                    id: res.data.id,
                    business_name: res.data.business_name
                });

                cuentas.get(this.state.id + '/accounts')
                    .then(resp => {
                        this.setState({
                            client: true,
                            accounts: resp.data
                        })
                    }).catch(function (error) {
                        console.log(error) 
                        alert("Error al buscar cuenta")
                        })

            }).catch(function (error) {
                console.log(error) 
                this_.setState({
                    lastname:'',
                    email:'',
                    status: '',
                    firstname: '',
                    id: '',
                    business_name: '',
                    client:false,
                    accounts:[]
                });
                alert("Error al buscar cliente")
            })
        }
        else if (this.state.documentType === 'cbu') {
            clientes.get('search/cbu/' + this.state.documentNumber).then(res => {
                this.setState({
                    lastname: res.data.last_name,
                    email: res.data.email,
                    status: res.data.status,
                    firstname: res.data.name,
                    id: res.data.id,
                    business_name: res.data.business_name
                });

                cuentas.get(this.state.id + '/accounts')
                    .then(resp => {
                        this.setState({
                            client: true,
                            accounts: resp.data
                        })
                    }).catch(function (error) {
                        console.log(error) 
                        alert("Error al buscar cuenta")
                        })

            }).catch(function (error) {
                console.log(error) 
                this_.setState({
                    lastname:'',
                    email:'',
                    status: '',
                    firstname: '',
                    id: '',
                    business_name: '',
                    client:false,
                    accounts:[]
                });
                alert("Error al buscar cliente")
            })
        }

    }

    onChangeOverdraft(event, data) {
        this.setState({
            overdraft: event.target.value,
            account_id: data.id
        })
    }

    onSubmitOverdraft(event) {
        event.preventDefault()
        
        if (this.state.overdraft != null) {
        const this_ = this

            axios({
                method: 'patch',
                url: 'https://bank-api-integrations.herokuapp.com/api/v1/accounts/' + this.state.account_id,
                data: {
                    overdraft: this.state.overdraft
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(function (response) {
                console.log(response);
                alert('Descubierto actualizado con éxito!')
                this_.searchButton.current.click();
                
            }).catch(function (error) {
                console.log(error);
                alert('Error en la modificación del descubierto')
            })
        }
    }

    onClickTransaction(event, data) {
        axios.get(`https://bank-api-integrations.herokuapp.com/api/v1/accounts/${data.id}/transactions`)
            .then(res => {
                console.log(res.data);
                this.setState({ transactions: res.data.transactions, account: data.id, balance: res.data.account_detail.balance })
            }).catch((error)=>{
                console.log(error)
                alert('Error en la busqueda de transacciones')
            });
    }

    render() {
        const docNumberPattern = this.state.documentType == 'cuil' ? "(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]" : null
        const symbol = {
            "EXPENDITURE": '-',
            "INCOME":'',
        }

        return (

            <div className="container container-operation">
                <h1>Buscar cliente</h1>
                <form onSubmit={this.onSubmit}>
                    <h4>Seleccione cliente</h4>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="form-group form-group-default">
                                <label>Tipo de documento</label>
                                <select required onChange={(event) => this.setState({ documentType: event.target.value })} className='form-control'>
                                    <option value='' disabled selected>Selecciona una opción</option>
                                    <option value='dni'>DNI</option>
                                    <option value='cuil'>CUIT/CUIL</option>
                                    <option value='cbu'>CBU</option>
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

                    <button type="submit" ref={this.searchButton} className="btn btn-primary">Buscar</button>

                </form>
                {this.state.client &&
                    <div className='client-info'>
                        <div className="contact-info-2">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <span>Cliente</span>
                                    {this.state.business_name}{this.state.firstname} {this.state.lastname}
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <span>Email</span>
                                    {this.state.email}<br />
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="fas fa-id-card"></i>
                                    </div>
                                    <span>ID</span>
                                    {this.state.id}
                                </li>
                            </ul>
                        </div>
                        <div className="pricing-area pt-70 pb-50">
                            <div className="container">
                                <div className="row">
                                    {this.state.accounts.map(account => (
                                        <div className="col-lg-4 col-md-6" key={account.id}>
                                            <div className="single-pricing-box">
                                                <div className="pricing-header">
                                                    <h3>Cuenta n° {account.id}</h3>
                                                    <p>{this.state.firstname} {this.state.lastname}</p>
                                                </div>

                                                <div className="price">
                                                    <span className="symbol">$</span> {account.balance}
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <b>Tipo de cuenta:</b> {account.account_type_description}
                                                        {/* <i className="fas fa-check"></i>  */}
                                                    </li>
                                                    <li>
                                                        <b>Número de cuenta:</b> {account.identification_number}
                                                        {/* <i className="fas fa-check"></i>  */}
                                                    </li>
                                                    <li>
                                                        <b>Balance: $</b> {account.balance}
                                                        {/* <i className="fas fa-check"></i>  */}
                                                    </li>
                                                    {/* <li>
                                        <b>Alias:</b> {account.name} 
                                        <i className="fas fa-ban"></i>
                                    </li> */}
                                                    {account.account_type == 'CC' &&
                                                        <li>
                                                            <div className='row'>
                                                                <div className='col-md-12'>
                                                                    <b>Descubierto: $</b> {account.overdraft}
                                                                </div>
                                                                <form onSubmit={this.onSubmitOverdraft}>
                                                                    <div className='input-group'>
                                                                        <input type="text" name="overdraft" id="overdraft" defaultValue={account.overdraft} className="form-control" onChange={e => this.onChangeOverdraft(e, account)} />
                                                                        <button className="btn btn-primary" type="submit">Editar</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </li>
                                                    }
                                                </ul>

                                                <div className="buy-btn">
                                                    {/* <Link href="/"> */}
                                                    <a className="btn btn-primary" onClick={e => this.onClickTransaction(e, account)}>Transacciones</a>
                                                    {/* </Link> */}
                                                </div>
                                            </div>
                                        </div>

                                    ))}


                                </div>
                            </div>

                            {this.state.transactions.length > 0 &&
                                <React.Fragment>
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Número de operación</th>
                                                <th scope="col">Detalle</th>
                                                <th scope="col">Monto</th>
                                                <th scope="col">Fecha</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.transactions.map((movement) => (
                                                <tr>
                                                    <td>{movement.id}</td>
                                                    <td>{movement.detail}</td>
                                                    <td>{symbol[movement.operation_type]}${movement.amount}</td>
                                                    <td>{new Date(movement.date).toLocaleDateString()}</td>
                                                </tr>
                                            ))
                                            }
                                        </tbody>
                                    </table>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default SearchClientOperation;


