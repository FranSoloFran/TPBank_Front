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
            account_id:null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeOverdraft = this.onChangeOverdraft.bind(this)
        this.onSubmitOverdraft = this.onSubmitOverdraft.bind(this)

    }

    componentDidMount(){
        this.sessionManager = new sessionManager()
    }

    onSubmit(event) {
        event.preventDefault()
        if(this.state.documentType === 'DNI'){
            clientes.get('search?dni=' + this.state.documentNumber).then(res => {
                console.log(res.data);
                this.state.lastname = res.data.last_name;
                this.state.email = res.data.email;
                this.state.status = res.data.status;
                this.state.firstname = res.data.name;
                this.state.id = res.data.id;
          
                cuentas.get(this.state.id + '/accounts').then(resp => {
                    console.log(resp.data);
                    this.state.accounts = resp.data;
                
                    this.setState({
                        client: true
                    })

                }
            )
            .catch(function (error)
            {console.log(error)})

        }
            )
            .catch(function (error)
            {console.log(error)})
        }else{
            clientes.get('search?cuil=' + this.state.documentNumber).then(res => {
                console.log(res.data);
                this.state.lastname = res.data.last_name;
                this.state.email = res.data.email;
                this.state.status = res.data.status;
                this.state.firstname = res.data.name;
                this.state.id = res.data.id;
                this.state.business_name = res.data.business_name;
          
                cuentas.get(this.state.id + '/accounts').then(resp => {
                    console.log(resp.data);
                    this.state.accounts = resp.data;
                
                    this.setState({
                        client: true
                    })

                })
                .catch(function (error)
                {console.log(error)})

        }
        )
        .catch(function (error)
        {console.log(error)})        
        }

    }    

    onChangeOverdraft(event, data){
        this.setState({
            overdraft: event.target.value,
            account_id: data.id
           })                                           
    }

    onSubmitOverdraft(event){
        event.preventDefault()
        console.log(this.state.overdraft);
        console.log(this.state.account_id);
        console.log("entró");
        if(this.state.overdraft != null){

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
            }).catch(function (error) {
                console.log(error);
            });
        alert('Descubierto actualizado con éxito!')

        }
    }

    onMouseTransaction(event, data){
        event.preventDefault()
        cuenta.get(data.id + '/transactions').then(respues => {
            console.log(respues.data);
            this.state.transactions = respues.data;
        
            this.setState({
                client: true
            })

        })
    }

    onClickTransaction(event, data){
        event.preventDefault()
        cuenta.get(data.id + '/transactions').then(respues => {
            console.log(respues.data);
            this.state.transactions = respues.data;
        
            this.setState({
                client: true
            })
        }
        // console.log(this.state.account_id);
        // this.sessionManager.setAccount(this.state.account_id)
        // this.sessionManager.setClientId(this.state.id)
        // window.location.href='/account'
        )}

    render() {
        return (

            <div className="container container-operation">
                <h1>Buscar cliente</h1>
                <form onSubmit={this.onSubmit}>
                    <h4>Seleccione cliente</h4>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="form-group form-group-default">
                                <label>Tipo de documento</label>
                                <select required onChange={(event)=> this.setState({documentType:event.target.value})} className='form-control'>
                                    <option value='' disabled selected>Selecciona una opción</option>
                                    <option>DNI</option>
                                    <option>CUIT</option>
                                    <option>CUIL</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="form-group form-group-default">
                                <label>Número de documento</label>
                                <input required onChange={(event)=> this.setState({documentNumber:event.target.value})} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Buscar</button>

                </form>
                {this.state.client &&
                    <div className='client-info'>
                        <div className='row'>
                            <div className='col-md-6'> 
                            <h4>{this.state.business_name}{this.state.firstname} {this.state.lastname}</h4>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <p><b>Email:</b> {this.state.email}</p>
                            </div>
                            {/* <div className='col-md-6'>
                            <p><b>Estado:</b>Activo</p>
                            </div> */}
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
                                    <span className="symbol">$</span> {account.balance} <span>balance</span>
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
                                            <div className='col-md-6'>
                                               <input type="text" name="overdraft" id="overdraft" defaultValue={account.overdraft} className="form-control" onChange={e=> this.onChangeOverdraft(e, account)}/> 
                                            </div>
                                            <div className='col-md-6'>
                                                    <button className="btn btn-primary" type="submit">Editar</button>
                                                </div>
                                                </form>
                                    </div>
                                    </li>
                                }
                                </ul>

                                <div className="buy-btn">
                                    {/* <Link href="/"> */}
                                        <a className="btn btn-primary" onMouseMove={e=> this.onMouseTransaction(e, account)} onClick={e=> this.onClickTransaction(e, account)}>Transacciones</a>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                        
                        ))}
                        </div>
                        </div>
                        </div>

                    </div>

                }

            </div>
        );
    }
}

export default SearchClientOperation;


