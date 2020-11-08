import React, { Component } from 'react';
import ContactInfoContent from './ContactInfoContent';
import ContactForm from './ContactForm';

class ContactContent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="contact-area ptb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Escribinos, estamos para ayudarte</h2>
                            <div className="bar"></div>
                            <p>Si queres volverte miembro, dejanos tus datos y te contactaremos para que te acerques a nuestra sucursal para realizar el alta</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <ContactInfoContent />
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map">
                        <img src={require("../../images/bg-map.png")} alt="image" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactContent;