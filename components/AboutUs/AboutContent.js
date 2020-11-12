import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class AboutContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className="about-area ptb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span>¿Como empezamos?</span>
                                <h2>#ElFuturoEstaAca</h2>
                                <p>Somos un grupo de soñadores que busca la forma de hacerte las cosas más fáciles, para acercarte un mercado más libre y que puedas operar desde donde estés.</p>
                                <p>Empezamos allá por 2005 pensando en renovar la industria financiera, aplicando Nuevas Tecnologías de la información, y aquí estamos para vos.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                {/* <img src={require("../../images/about-img1.jpg")} alt="image" /> */}
                                <img src={require("../../images/somos.jpg")} alt="image" />

                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn"
                                    > 
                                        <i className="fas fa-play"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        // videoId='szuchBiLrEM'
                        videoId='KaQTLBvp3K0'  
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </div>
            </div>
        );
    }
}

export default AboutContent;