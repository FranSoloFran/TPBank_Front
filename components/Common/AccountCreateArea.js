import React, { Component } from 'react';
import Link from 'next/link';

class AccountCreateArea extends Component {
    render() {
        return (
            <div className="account-create-area">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>Apply for an account in minutes</h2>
                            <p>Get your Luvion account today!</p>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="create-account">
                                <Link href="#">
                                    <a className="btn btn-primary">Get Your Account</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountCreateArea;