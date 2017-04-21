import React from 'react';

// CSS
// *******************
import '../public/css/featured/featured.css';

// JS
// ********************
// <script src="js/anime.min.js"></script>
// <script src="js/enquire.min.js"></script>
// <script src="js/tabsnav.js"></script>
// <script src="js/demo1.js"></script>

var FeaturedVideo = React.createClass({

    render() {

        return (
            // <html lang="en" className="no-js">

            <div className="FeaturedVideo demo-2">
                <main className="view">
                    <div className="content">
                        <div className="deco">
                            <p className="deco__text">elementum recolligo huic commodo locus mihi vestri vox</p>
                        </div>

                        <header className="codrops-header">
                            <p className="codrops-header__info">The straight up<br/>freshest<br/>vids<br/>I got up</p>
        					<span className="codrops-header__deco">hitherto</span>
        					<h1 className="codrops-header__title">unseen</h1>
        					<p className="codrops-header__tagline">peep the show</p>

                        </header>
                    </div>



                    <nav className="tabsnav tabsnav--vertical tabsnav--ander">
                        <div className="tabsnav__item">
                            <div className="tabsnav__bar"></div>
                            <h3 className="tabsnav__title">Boo</h3>
                        </div>
                        <div className="tabsnav__item">
                            <div className="tabsnav__bar"></div>
                            <h3 className="tabsnav__title">Yah</h3>
                        </div>
                        <div className="tabsnav__item">
                            <div className="tabsnav__bar"></div>
                            <h3 className="tabsnav__title">Grama</h3>
                        </div>
                    </nav>
                    <div className="tabscontent">
                    <div className="tabscontent__item">
                        <figure className="poster">
                            <img className="poster__img" src="img/img1.jpg" alt="Poster 1"/>
                            <figcaption className="poster__caption">
                                <h2 className="poster__title">wild<br/>corn</h2>
                                <p className="poster__deco">nothing lost</p>
                                <div className="poster__box"></div>
                                <span className="poster__number">01</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="tabscontent__item">
                        <figure className="poster">
                            <img className="poster__img" src="img/img1.jpg" alt="Poster 1"/>
                            <figcaption className="poster__caption">
                                <h2 className="poster__title">blue<br/>gun</h2>
                                <p className="poster__deco">fingerpaint</p>
                                <div className="poster__box"></div>
                                <span className="poster__number">02</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="tabscontent__item">
                        <figure className="poster">
                            <img className="poster__img" src="img/img1.jpg" alt="Poster 1"/>
                            <figcaption className="poster__caption">
                                <h2 className="poster__title">home<br/>maze</h2>
                                <p className="poster__deco">binary sun</p>
                                <div className="poster__box"></div>
                                <span className="poster__number">03</span>
                            </figcaption>
                        </figure>
                    </div>
                    <button className="btn btn--back">
                        <svg className="icon icon--caret">

                        </svg>
                    </button>
                </div>
                </main>
            </div>
        );
    }
});

export default FeaturedVideo;
