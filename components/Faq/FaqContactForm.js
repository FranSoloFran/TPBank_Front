import React, { Component } from 'react';

class FaqContactForm extends Component {
    render() {
        return (
            <div className="faq-contact">
                <div className="section-title">
                    <h2>Do You Have Any Questions</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="faq-contact-form">
                    <form id="contactForm">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" className="form-control" required placeholder="Name" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control" required placeholder="Email" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="phone_number" id="phone_number" required className="form-control" placeholder="Phone" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" />
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" rows="6" required placeholder="Your Message"></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FaqContactForm;