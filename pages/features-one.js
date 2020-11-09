import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import ServicesCard from '../components/Common/ServicesCard';
import PartnerContent from '../components/Common/PartnerContent';
import AppDownloadContent from '../components/HomeOne/AppDownloadContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';
 
class FeaturesOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Nuestras Funcionalidades" pageCaption="Nuestras herramientas a tu disposición" />
                <ServicesCard />
                {/* <PartnerContent />
                <AppDownloadContent /> */}
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default FeaturesOne;