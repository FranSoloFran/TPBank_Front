import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import AboutContent from '../components/AboutUs/AboutContent';
import TeamMember from '../components/AboutUs/TeamMember';
import PartnerContent from '../components/Common/PartnerContent';
import AppDownloadContent from '../components/HomeOne/AppDownloadContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Quienes Somos" pageCaption="La historia de Haiper" />
                <AboutContent />
                {/* <TeamMember /> */}
                {/* <PartnerContent /> */}
                {/* <AppDownloadContent /> */}
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;