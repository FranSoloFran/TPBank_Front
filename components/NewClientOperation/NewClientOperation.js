import React, { Component } from 'react';
import axios from 'axios';

class NewClientOperation extends Component {
    constructor() {
        super()
        this.state = {
            clientType:null,
            last_name:null,
            name:null,
            documentType:null,
            dni:null,
            birthdate:null,
            nationality:null,
            accountType:null,
            startActivityDate:null,
            email:null,
            cuil:null,
            business_name:null
        }
        this.handleChangeType = this.handleChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChangeType(event) {
        this.setState({ type: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault()
        axios.post("https://bank-api-integrations.herokuapp.com/api/v1/clients", {
            last_name: this.state.last_name,
            name: this.state.name,
            dni: this.state.dni,
            email: this.state.email,
            cuil: this.state.cuil,
            business_name: this.state.business_name
            })
       
        //Llamada a backend
        alert(`Usuario creado con exito`)
    }



    render() {
        return (

            <div className="container container-operation">
                <h1>Nuevo cliente</h1>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group form-group-default">
                        <label>Tipo de cliente</label>
                        <select required className='form-control' value={this.state.type} onChange={this.handleChangeType}>
                            <option disabled selected>Selecciona una opción</option>
                            <option value='pj'>Persona juridica</option>
                            <option value='pf'>Persona física</option>
                        </select>
                    </div>
                    {this.state.type == 'pf' &&
                        <div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Apellido</label>
                                        <input required onChange={(event)=> this.setState({last_name:event.target.value})} type="text" name="lastname" id="lastname" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Nombre</label>
                                        <input required onChange={(event)=> this.setState({name:event.target.value})} type="text" name="firstname" id="firstname" placeholder="..." className="form-control" />
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Número de DNI</label>
                                        <input required onChange={(event)=> this.setState({dni:event.target.value})} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Número de CUIL/CUIT</label>
                                        <input required pattern='\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]' onChange={(event)=> this.setState({cuil:event.target.value})} type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Fecha de nacimiento</label>
                                        <input required onChange={(event)=> this.setState({birthdate:event.target.value})} type="date" name="birthdate" id="birthdate" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Nacionalidad</label>
                                        <input required onChange={(event)=> this.setState({nationality:event.target.value})} type="text" name="nationality" id="nationality" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                            </div>


                        </div>
                    }

                    {this.state.type == 'pj' &&
                        <div>
                            <div className="form-group form-group-default">
                                <label>Razón social</label>
                                <input required onChange={(event)=> this.setState({business_name:event.target.value})} type="text" name="business_name" id="business_name" placeholder="..." className="form-control" />
                            </div>


                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Tipo de documento</label>
                                        <select required onChange={(event)=> this.setState({documentType:event.target.value})} className='form-control'>
                                            <option value='' disabled selected>Selecciona una opción</option>
                                            {/* <option value='DNI'>DNI</option> */}
                                            {/* <option value='LE'>LE</option> */}
                                            <option value='CUIT'>CUIT</option>
                                            {/* <option value='CUIL'>CUIL</option> */}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Número de documento</label>
                                        <input required pattern='\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]' onChange={(event)=> this.setState({cuil:event.target.value})}  type="text" name="documentNumber" id="documentNumber" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Fecha de comienzo de actividades</label>
                                        <input required onChange={(event)=> this.setState({startActivityDate:event.target.value})} type="date" name="startActivityDate" id="startActivityDate" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {this.state.type &&
                        <React.Fragment>
                            {/* <div className="form-group form-group-default">
                                <label>Tipo de cuenta</label>
                                <select required onChange={(event)=> this.setState({accountType:event.target.value})} className='form-control'>
                                    <option value='' disabled selected>Selecciona una opción</option>
                                    <option value="CA">Caja de ahorro</option>
                                    <option value="CC">Cuenta corriente</option>
                                </select>
                            </div> */}

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group form-group-default">
                                        <label>Email</label>
                                        <input required onChange={(event)=> this.setState({email:event.target.value})} type="text" name="email" id="email" placeholder="..." className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Confirmar operación</button>
                        </React.Fragment>

                    }


                </form>

            </div>
        );
    }
}

export default NewClientOperation;


