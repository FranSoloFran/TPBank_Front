import React, { Component } from 'react';
import axios from 'axios';

class UploadBillsOperation extends Component {
    constructor() {
        super()
        this.state = {
            providerCode: null,
            file: null,
        }
        this.handleChangeType = this.handleChangeType.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.handelOnChange = this.handelOnChange.bind(this);
        this.handelOnUploadFile = this.handelOnUploadFile.bind(this);
    }

    handelSubmit = () => {
        const { file, providerCode } = this.state;
        let data = [];
        data['file'] = file;
        data['providerCode'] = providerCode;

        console.log(this.state.file);
        console.log(this.providerCode);
    
        // a function which makes a axios call to API.
        uploadFile(data, (response) => {
            // your code after API response
        }); 
    } 
    
    uploadFile(data, callback) {
        const url = 'https://bank-api-integrations.herokuapp.com/api/v1/providers/uploadfile';         // url to make a request
        const request = axios.post(url, data, providerCode);
        request.then((response) => callback(response));
        request.catch((err) => callback(err.response));
    }
    
    handelOnChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handelOnUploadFile = (event) => {
        this.setState({
          file : event.target.files
        })
    }

    // onSubmit(event) {
    //     event.preventDefault()
    //     console.log(this.state.providerCode);
    //     console.log(this.state.file);
    //     axios.post("https://bank-api-integrations.herokuapp.com/api/v1/providers/uploadfile", {
    //     file: this.state.file,
    //     providerCode: this.state.providerCode,
    //     })
    //     alert(`Cuenta creada con éxito`)
    // }

    handleChangeType(event) {
        this.setState({ providerCode: event.target.value });
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

                    <div>
                        <input type="file" onChange={this.handelOnUploadFile} />  {/* input tag which to upload file */}
                        <button type="submit" onClick={this.handelSubmit} className="btn btn-primary">Subir</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default UploadBillsOperation;


