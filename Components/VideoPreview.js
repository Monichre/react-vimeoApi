import React from 'react';
import '../public/css/portfolio.css';

var VideoPreview = React.createClass({

    render() {


        return (

            <div className="VideoPreview">

                <article className="brick entry format-video">

                    <div className="entry-thumb video-image">
                        <a href="#" data-lity>
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
        );
    }
});

export default VideoPreview;
