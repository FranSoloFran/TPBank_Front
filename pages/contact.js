import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import ContactContent from '../components/Contact/ContactContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent 
                    pageTitle="Estemos en contacto" 
                    pageCaption="Nos encantaría recibir tu feedback" 
                />

                <ContactContent />
                {/* <AccountCreateArea /> */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;