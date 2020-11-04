import React, { Component } from 'react';
import Link from 'next/link';

class PartnerContent extends Component {
    render() {
        return (
            <div className="partner-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our trusted partner</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.​</p>
                    </div>

                    <div className="partner-inner">
                        <div className="row align-items-center">
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/1.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/1.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/2.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/2.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/3.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/3.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/4.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/4.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/5.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/5.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/6.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/6.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/7.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/7.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/8.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/8.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/9.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/9.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/10.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/10.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerContent;