import React from 'react';
import ReactPlayer from 'react-player';


import Featured from './Featured';

// Packages
var Vimeo= require('vimeo').Vimeo;
var moment = require('moment');

// CSS
// *******************
import '../public/css/featured/featured.css';

var FeaturedVideo = React.createClass({

    defaultProps: {
        clientID: 'a403a67f112f44d9826223d299688cffcdc4c794',
        clientSecret: '4ddwI9d7nHrcRcPlM5UE4YyNTZ9yjCCthnz+9CwY4Hdg5JkaYrOWRu24kgmnq6qmkDXNZ2EejDZ6ZmgmGM6pmMX+m02NeAPx4fty7Dc5rMCwIT1iZ/+T5Goz0xx4aoFV',
        accessToken: '4136be9e66246191c7df6e0f2249ddec',
        videos: []
    },

    getInitialState: function(){
        return {
            featuredVideos: []
        }
    },
    componentDidMount: function(){
        var _this = this;
        var lib = new Vimeo(_this.defaultProps.clientID, _this.defaultProps.clientSecret, _this.defaultProps.accessToken);
        var publicVideos = [];

        lib.request({
            path : '/me/videos'
        }, (err, body, status_code, headers) => {
            if (!err) {
                var allVideos = body.data,
                    featVids = [];

                allVideos.forEach(function(video){
                    var index = allVideos.indexOf(video);
                        if (!(video.privacy.view === "nobody")) {
                            publicVideos.push(video);
                        }
                });

                publicVideos.forEach(function(video){

                    var formatCreatedTime = moment(video.created_time),
                        now = moment();

                    if (now.diff(formatCreatedTime, 'days') < 30 ){
                        console.log("true");
                        featVids.push(video);
                        _this.defaultProps.videos.push(video);
                    }
                    console.log(featVids);
                });

                _this.setState({
                    featuredVideos: featVids
                    })

                    console.log(this.state.featuredVideos);

            } else {
                console.log(err);
            }
        });
    },

    render() {

        return (

        <div className = "FeaturedVideo demo-2">
            <main className="view">
                <div className="content">
                    <div className="deco">
                        <p className="deco__text">elementum recolligo huic commodo locus mihi vestri vox</p>
                    </div>

                    <header className="codrops-header">
                        <p className="codrops-header__info">The straight up<br/>freshest vids<br/>I got</p>
                        <span className="codrops-header__deco">hitherto</span>
                        <h1 className="codrops-header__title">unseen</h1>
                        <p className="codrops-header__tagline">peep the show</p>

                    </header>
                </div>

                <button className="btn btn--menu">
                    <svg className="icon icon--menu"></svg>
                    <svg className="icon icon--cross"></svg>
                </button>

                <nav className="tabsnav tabsnav--vertical tabsnav--ander">
                    <div className="tabsnav__item">
                        <div className="tabsnav__bar"></div>
                        <h3 className="tabsnav__title"><span>1</span></h3>
                    </div>
                    <div className="tabsnav__item">
                        <div className="tabsnav__bar"></div>
                        <h3 className="tabsnav__title"><span>2</span></h3>
                    </div>
                    <div className="tabsnav__item">
                        <div className="tabsnav__bar"></div>
                        <h3 className="tabsnav__title"><span>3</span></h3>
                    </div>
                    <div className="tabsnav__item">
                        <div className="tabsnav__bar"></div>
                        <h3 className="tabsnav__title"><span>4</span></h3>
                    </div>

                </nav>
                <div className="tabscontent">
                    <div className="tabscontent__item">
                        <figure className="poster">
                                // <div className="poster__img">{this.state.featuredVideos[0].embed.html}</div>
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
                            // <div className="poster__img">{this.state.featuredVideos[0].embed.html}</div>
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
                            // <div className="poster__img">{this.state.featuredVideos[0].embed.html}</div>
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
                            // <div className="poster__img">{this.state.featuredVideos[0].embed.html}</div>
                            <figcaption className="poster__caption">
                                <h2 className="poster__title">wild<br/>corn</h2>
                                <p className="poster__deco">nothing lost</p>
                                <div className="poster__box"></div>
                                <span className="poster__number">01</span>
                            </figcaption>
                        </figure>
                    </div>

                    <button className="btn btn--back">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>

            </main>
        </div>
        );
    }
});

export default FeaturedVideo;
