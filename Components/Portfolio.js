import React from 'react';
var Vimeo= require('vimeo').Vimeo;
var moment = require('moment');
import '../public/css/portfolio/css/flickity.css';
import '../public/css/portfolio/css/portfolio-alternate.css';
import '../public/css/nav.css';

import VideoPreview from './VideoPreview.js';
import VideoFeaturedPreview from './VideoFeaturedPreview.js';

var Portfolio = React.createClass({

    defaultProps: {
        clientID: 'a403a67f112f44d9826223d299688cffcdc4c794',
        clientSecret: '4ddwI9d7nHrcRcPlM5UE4YyNTZ9yjCCthnz+9CwY4Hdg5JkaYrOWRu24kgmnq6qmkDXNZ2EejDZ6ZmgmGM6pmMX+m02NeAPx4fty7Dc5rMCwIT1iZ/+T5Goz0xx4aoFV',
        accessToken: '4136be9e66246191c7df6e0f2249ddec',
        mostPopularVideos: [],
        featuredVideos: []
    },

    getInitialState: function(){
        return {
            videos: []
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
                var allVideos = body.data;
                allVideos.forEach(function(video){
                var index = allVideos.indexOf(video);
                console.log(video.privacy.view);
                    if (video.privacy.view === "nobody") {
                        allVideos.splice(index, 1);
                    } else {
                        publicVideos.push(video);
                    }
                });
                publicVideos.forEach(function(video){
                    var formatCreatedTime = moment(video.created_time);
                    console.log(formatCreatedTime.format('MM-DD-YYYY'));
                    var now = moment().format('MM-DD-YYYY');
                    if (video.stats.plays > 5) {
                        _this.defaultProps.mostPopularVideos.push(video);
                    } else if (formatCreatedTime.add(30, 'days').isBefore(now)){
                        _this.defaultProps.featuredVideos.push(video);
                    }
                });

                _this.setState({
                    videos: publicVideos
                    })


                console.log(_this.defaultProps.featuredVideos);
                console.log(_this.defaultProps.mostPopularVideos);
            } else {
                console.log(err);
            }
        });
    },

    render() {


        return (

            <div className="Portfolio">
                <div className="hero">
                    <div className="hero__back hero__back--static"></div>
                    <div className="hero__back hero__back--mover"></div>
                    <div className="hero__front"></div>
                </div>

                <div className="stack-slider">
                    <div className="stacks-wrapper">
                        <div className="stack">

                            <h2 className="stack-title"><a href="#" data-text="Portraits"><span>Featured</span></a></h2>

                        {this.state.videos.map(function(video){
                            return (<VideoPreview image={video.pictures.sizes[3].link} />);
                        })}


                        </div>
                        <div className="stack">
                            <h2 className="stack-title"><a href="#" data-text="Landscape"><span>Landscape</span></a></h2>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type3/1.jpg" alt="img01" />
                                    <h3 className="item__title">Austin flannel salvia <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type3/2.jpg" alt="img02" />
                                    <h3 className="item__title">Brunch vegan pickled cred <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type3/3.jpg" alt="img03" />
                                    <h3 className="item__title">Blog dreamcatcher squid  <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type3/4.jpg" alt="img04" />
                                    <h3 className="item__title">Migas intelligentsia meh <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type3/5.jpg" alt="img05" />
                                    <h3 className="item__title">Authentic locavore meditation <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                    <p>Images by <a href="https://www.flickr.com/photos/56218409@N03/">Matthias Ripp</a></p>
                                </div>
                            </div>
                            <div className="item">

                                <div className="item__content item__content--related">
                                    <p>If you enjoyed this demo you might also like:</p>
                                    <a className="media-item" href="http://tympanus.net/Tutorials/SlidingHeaderLayout/">
                                        <img className="media-item__img" src="public/css/portfolio/img/related/SlidingHeaderLayout.jpg" />
                                        <h3 className="media-item__title">Sliding Header Layout</h3>
                                    </a>
                                    <a className="media-item" href="http://tympanus.net/Development/ScatteredPolaroidsGallery/">
                                        <img className="media-item__img" src="public/css/portfolio/img/related/ScatteredPolaroidGallery.jpg" />
                                        <h3 className="media-item__title">Scattered Polaroid Gallery</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="stack">
                            <h2 className="stack-title"><a href="#" data-text="Miscellaneous"><span>Miscellaneous</span></a></h2>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type2/1.jpg" alt="img01" />
                                    <h3 className="item__title">Chambray fingerstache <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type2/2.jpg" alt="img02" />
                                    <h3 className="item__title">Chia pop-up meh <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type2/3.jpg" alt="img03" />
                                    <h3 className="item__title">Butcher organic ennui <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type2/4.jpg" alt="img04" />
                                    <h3 className="item__title">Four loko slow-carb Austin <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type2/5.jpg" alt="img05" />
                                    <h3 className="item__title">Biodiesel freegan cardigan <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                    <p>Images by <a href="https://www.flickr.com/photos/deanhochman/">Dean Hochman</a></p>
                                </div>
                            </div>
                            <div className="item">

                                <div className="item__content item__content--related">
                                    <p>If you enjoyed this demo you might also like:</p>
                                    <a className="media-item" href="http://tympanus.net/Tutorials/SlidingHeaderLayout/">
                                        <img className="media-item__img" src="public/css/portfolio/img/related/SlidingHeaderLayout.jpg" />
                                        <h3 className="media-item__title">Sliding Header Layout</h3>
                                    </a>
                                    <a className="media-item" href="http://tympanus.net/Development/ScatteredPolaroidsGallery/">
                                        <img className="media-item__img" src="public/css/portfolio/img/related/ScatteredPolaroidGallery.jpg" />
                                        <h3 className="media-item__title">Scattered Polaroid Gallery</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="stack">
                            <h2 className="stack-title"><a href="#" data-text="Wildlife"><span>Wildlife</span></a></h2>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type4/1.jpg" alt="img01" />
                                    <h3 className="item__title">Kickstarter keffiyeh <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type4/2.jpg" alt="img02" />
                                    <h3 className="item__title">Heirloom commodo migas <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type4/3.jpg" alt="img03" />
                                    <h3 className="item__title">Austin banjo swag <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type4/4.jpg" alt="img04" />
                                    <h3 className="item__title">Small batch farm-to-table <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item__content">
                                    <img src="public/css/portfolio/img/type4/5.jpg" alt="img05" />
                                    <h3 className="item__title">Ethical leggings semiotics <span className="item__date">05/05/2015</span></h3>
                                    <div className="item__details">
                                        <ul>
                                            <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                            <li><i className="ion ion-ios-eye-outline"></i><span>22.5 mm</span></li>
                                            <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                            <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
                                            <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                                        </ul>
                                    </div>
                                    <p>Images by <a href="https://www.flickr.com/photos/usfwsendsp/">USFWS Endangered Species</a></p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        );
    }
});

export default Portfolio;
