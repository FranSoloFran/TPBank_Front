import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <h1>Easy free banking for entrepreneurs</h1>
                                <p>Get the financial tools and insights to start, build, and grow your business.</p>
                                <Link href="#">
                                    <a className="btn btn-primary">Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;