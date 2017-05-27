import React from 'react';

import { connect } from 'react-redux'
import { actions } from '../actions/actions.js'


import '../public/css/home.css';

// Sub-Components
import About from './About.js';


class Home extends React.Component {


    render() {

        return (
            <div className="no-js">
                <div id="Home" className="Home">

                    <main>
                        <section className="content contentFull">
                            <header className="codrops-header">
                                <h1 className="codrops-header__title">Cinematography</h1>
                                <nav className="demos">
                                    <a className="demo" href="index.html"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a className="demo" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a className="demo" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a className="demo" href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a>
                                </nav>
                            </header>
                            <h2 className="page-title">Portfolio</h2>
                            <div className="slideshow">
                                <div className="slide">
                                    <div className="mirror" data-visible-area="0.85">
                                        <div className="mirror__side mirror__side--one">
                                            <img className="mirror__img" src="../public/img/jud-left.jpg"  />
                                        </div>
                                        <div className="mirror__side mirror__side--two">

                                            <img className="mirror__img" src="../public/img/jud-left.jpg"  />
                                        </div>
                                    </div>
                                    <h2 className="slide__title">Jud Nichols</h2>
                                </div>

                            </div>
                            <a className="link link--sponsor" href="#">Public Defender + Videographer</a>
                        </section>
                    </main>

                </div>

                <About />

            </div>



        );
    }
}
export default Home;
