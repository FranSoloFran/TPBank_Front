import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form">
                <form id="contactForm">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" name="name" id="name" className="form-control" placeholder="Nombre" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="email" name="email" id="email" className="form-control" required placeholder="Email" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Telefono" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Asunto" />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea name="message" className="form-control" id="message" rows="6" placeholder="Dejanos tu mensaje"></textarea>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;