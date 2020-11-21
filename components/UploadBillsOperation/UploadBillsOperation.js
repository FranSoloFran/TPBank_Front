import React, { Component } from 'react';
import axios from 'axios';

class UploadBillsOperation extends Component {
    constructor() {
        super()
        this.state = {
            s: null,
            providerCode: null,
            facturas:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.createArray = this.createArray.bind(this);
    }

    createArray(event){
        this.setState({
            facturas: (this.state.s).split(/\n/)
                .map(e => e.split(","))
                .map(([idpago, monto, fecha]) => ({idpago, monto, fecha}))
        }
        )
    }

    onSubmit(event) {
        event.preventDefault()
        console.log(this.state.s);
        console.log(this.state.providerCode);
        console.log(this.state.facturas);
        axios.post("https://bank-api-integrations.herokuapp.com/api/v1/providers/uploadfile", {facturas: this.state.facturas}, {params: {providerCode: this.state.providerCode}})
        .then(response => response.status)
        .catch(err => console.warn(err));
        alert(`Facturas cargadas con éxito!`)
    }

    handleChange(event) {
        this.setState({ s: event.target.value })
        // (this.state.s !== undefined) ? this.state.s.split(/\n/)
        // .map (e =: )
        // this.setState({
        // facturas: this.state.s.split(/\n/)
        // .map(e =: .split(","))
        // .map(([i: go, monto, fecha]) => ({idpago, monto, fecha}));
        // })
      console.log(this.state.s);
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Cargar facturas</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='col-md-6'>
                            <div className="form-group form-group-default">
                                <label>Número de Proveedor</label>
                                <input required onChange={(event) => this.setState({ providerCode: event.target.value })} type="text" name="providerCode" id="providerCode" placeholder="..." className="form-control" />
                            </div>
                    </div>

                    <div className="form-group form-group-default">
                        <label>Facturas</label>
                        <textarea required onChange={this.handleChange} type="text" name="bills" id="bills" placeholder="..." className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary" onMouseOver={this.createArray}>Cargar facturas</button>

                </form>

            </div>
        );
    }
}

export default UploadBillsOperation;


