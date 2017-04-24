import React from 'react';
var Vimeo= require('vimeo').Vimeo;
import '../public/css/portfolio.css';
import '../public/css/nav.css';

import VideoPreview from './VideoPreview.js';
import VideoFeaturedPreview from './VideoFeaturedPreview.js';

var Portfolio = React.createClass({

    defaultProps: {
        clientID: 'a403a67f112f44d9826223d299688cffcdc4c794',
        clientSecret: '4ddwI9d7nHrcRcPlM5UE4YyNTZ9yjCCthnz+9CwY4Hdg5JkaYrOWRu24kgmnq6qmkDXNZ2EejDZ6ZmgmGM6pmMX+m02NeAPx4fty7Dc5rMCwIT1iZ/+T5Goz0xx4aoFV',
        accessToken: '4136be9e66246191c7df6e0f2249ddec'
    },

    getInitialState: function(){
        return {
            videos: []
        }
    },
    componentDidMount: function(){
        var _this = this;
        var lib = new Vimeo(_this.defaultProps.clientID, _this.defaultProps.clientSecret, _this.defaultProps.accessToken);

        lib.request({
            path : '/me/videos'
        }, (err, body, status_code, headers) => {
            if (!err) {
                _this.setState({
                    videos: body.data

                });
                console.log(this.state.videos);

            } else {
                console.log(err);
            }
        });
    },

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


                                {this.state.videos.map(function(video){
                                    return (
                                        <VideoPreview name={video.name} description={video.description} created={video.created_time} image={video.pictures.sizes[3].link_with_play_button}/>
                                    );

                                })}

                        </div>

                    </div>

                </section>
            </div>
        );
    }
});

export default Portfolio;
