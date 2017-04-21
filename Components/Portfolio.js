import React from 'react';
import '../public/css/portfolio.css';
import '../public/css/nav.css';

var Portfolio = React.createClass({

    render() {
        var feature_style_bg = {
            backgroundImage: 'url(../public/img/camera_2.jpg)'
        };

        return (

            <div className="Portfolio">

                <section id="bricks">

                    <div className="row masonry">

                        <div className="bricks-wrapper">

                            <div className="grid-sizer"></div>

                            <div className="brick entry featured-grid">
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
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <article className="brick entry format-video">

                                <div className="entry-thumb video-image">
                                    <a href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" data-lity>
                                        <img src="../public/img/camera_2.jpg" alt="bokeh"/>
                                    </a>
                                </div>

                                <div className="entry-text">
                                    <div className="entry-header">

                                        <div className="entry-meta">
                                            <span className="cat-links">
                                                <a href="#">Design</a>
                                                <a href="#">Branding</a>
                                            </span>
                                        </div>

                                        <h1 className="entry-title">
                                            <a href="single-video.html">This Is a Video Post Format.</a>
                                        </h1>

                                    </div>
                                    <div className="entry-excerpt">
                                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                                    </div>
                                </div>

                            </article>

                        </div>

                    </div>

                </section>
            </div>
        );
    }
});

export default Portfolio;
