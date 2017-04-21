import React from 'react';
import '../public/css/portfolio.css';

var Portfolio = React.createClass({

    render() {
        var feature_style_bg = {
            backgroundImage: 'url(assets/images/camera_2.jpg)'
        };

        return (

            <div className="Portfolio">

                <section id="bricks">

                    <div className="row masonry">

                        <div className="bricks-wrapper">

                            <div className="grid-sizer"></div>

                            <div className="brick entry featured-grid animate-this">
                                <div className="entry-content">
                                    <div id="featured-post-slider" className="flexslider">
                                        <ul className="slides">

                                            <li>
                                                <div className="featured-post-slide">

                                                    <div className="post-background" style={feature_style_bg}></div>

                                                    <div className="overlay"></div>

                                                    <div className="post-content">
                                                        <ul className="entry-meta">
                                                            <li>September 06, 2016</li>
                                                            <li>
                                                                <a href="#">Naruto Uzumaki</a>
                                                            </li>
                                                        </ul>

                                                        <h1 className="slide-title">
                                                            <a href="single-standard.html" title="">Minimalism Never Goes Out of Style</a>
                                                        </h1>
                                                    </div>

                                                </div>
                                            </li>

                                            <li>
                                                <div className="featured-post-slide">

                                                    <div className="post-background" style={feature_style_bg}></div>

                                                    <div className="overlay"></div>

                                                    <div className="post-content">
                                                        <ul className="entry-meta">
                                                            <li>September 06, 2016</li>
                                                            <li>
                                                                <a href="#">Naruto Uzumaki</a>
                                                            </li>
                                                        </ul>

                                                        <h1 className="slide-title">
                                                            <a href="single-standard.html" title="">Minimalism Never Goes Out of Style</a>
                                                        </h1>
                                                    </div>

                                                </div>
                                            </li>
                                            <li>
                                                <div className="featured-post-slide">

                                                    <div className="post-background" style={feature_style_bg}></div>

                                                    <div className="overlay"></div>

                                                    <div className="post-content">
                                                        <ul className="entry-meta">
                                                            <li>September 06, 2016</li>
                                                            <li>
                                                                <a href="#">Naruto Uzumaki</a>
                                                            </li>
                                                        </ul>

                                                        <h1 className="slide-title">
                                                            <a href="single-standard.html" title="">Minimalism Never Goes Out of Style</a>
                                                        </h1>
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        );
    }
});

export default Portfolio;
