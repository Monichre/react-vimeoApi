import React from 'react';
import '../public/css/portfolio.css';

var VideoPreview = React.createClass({

    render() {


        return (

            <div className="VideoPreview">

                <article className="brick entry format-video">

                    <div className="entry-thumb video-image">
                        <a href="#" data-lity>
                            <img src={this.props.image} alt="bokeh"/>
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
                                <a href="single-video.html">{this.props.name}</a>
                            </h1>

                        </div>
                        <div className="entry-excerpt">
                            {this.props.description}
                        </div>
                    </div>

                </article>

            </div>
        );
    }
});

export default VideoPreview;
