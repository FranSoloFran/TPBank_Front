import React, { Component } from 'react';
import Link from 'next/link';

class AccountCreateArea extends Component {
    render() {
        return (
            <div className="account-create-area">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>¿Nuevo? Te abrimos tu cuenta en minutos</h2>
                            <p>Onboarding 100% digital</p>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="create-account">
                                <Link href="#">
                                    <a className="btn btn-primary">Hacete miembro</a>
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