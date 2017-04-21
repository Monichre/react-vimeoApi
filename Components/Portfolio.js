import React from 'react';
import '../public/css/portfolio.css';
import '../public/css/nav.css';

import VideoPreview from './VideoPreview.js';
import VideoFeaturedPreview from './VideoFeaturedPreview.js';

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
                                                <VideoFeaturedPreview />
                                            </li>
                                            <li>
                                                <VideoFeaturedPreview />
                                            </li>
                                            <li>
                                                <VideoFeaturedPreview />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <VideoPreview />

                        </div>

                    </div>

                </section>
            </div>
        );
    }
});

export default Portfolio;
