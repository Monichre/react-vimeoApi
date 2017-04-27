import React from 'react';
// import '../public/css/portfolio.css';

var VideoFeaturedPreview = React.createClass({

    render() {

        var feature_style_bg = {
            backgroundImage: 'url(../public/img/camera_2.jpg)'
        };

        return (

            <div className="VideoFeaturedPreview">

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

            </div>
        );
    }
});

export default VideoFeaturedPreview;
