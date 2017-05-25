import React from 'react';
import {connect} from 'react-redux';
import {REQUEST_VIDEOS, RECEIVE_VIDEOS} from '../actions/actions.js';

// Packahes
var Vimeo= require('vimeo').Vimeo;
var moment = require('moment');

// Styles
import '../public/css/portfolio/css/flickity.css';
import '../public/css/portfolio/css/portfolio-alternate.css';
import '../public/css/nav.css';

// Sub-Components
import VideoPreview from './VideoPreview.js';


let Portfolio = ({dispatch}) => {

    // defaultProps: {
    //     clientID: 'a403a67f112f44d9826223d299688cffcdc4c794',
    //     clientSecret: '4ddwI9d7nHrcRcPlM5UE4YyNTZ9yjCCthnz+9CwY4Hdg5JkaYrOWRu24kgmnq6qmkDXNZ2EejDZ6ZmgmGM6pmMX+m02NeAPx4fty7Dc5rMCwIT1iZ/+T5Goz0xx4aoFV',
    //     accessToken: '4136be9e66246191c7df6e0f2249ddec'
    // },
    //
    // getInitialState: function(){
    //     return {
    //         videos: [],
    //         mostPopularVideos: [],
    //         featuredVideos: []
    //     }
    // },
    // apiCall: function(){
    //     var _this = this;
    //     var lib = new Vimeo(_this.defaultProps.clientID, _this.defaultProps.clientSecret, _this.defaultProps.accessToken);
    //     var publicVideos = [];
    //
    //     lib.request({
    //         path : '/me/videos'
    //     }, (err, body, status_code, headers) => {
    //         if (!err) {
    //             var allVideos = body.data,
    //                 popVids = [],
    //                 featVids = [];
    //
    //             allVideos.forEach(function(video){
    //                 var index = allVideos.indexOf(video);
    //                     if (video.privacy.view === "nobody" || video.privacy.view === "password") {
    //                         allVideos.splice(index, 1);
    //                     } else {
    //                         publicVideos.push(video);
    //                     }
    //             });
    //             localStorage.setItem('publicVideos', JSON.stringify(publicVideos));
    //
    //             publicVideos.forEach(function(video){
    //                 var formatCreatedTime = moment(video.created_time),
    //                     now = moment();
    //
    //                 if (now.diff(formatCreatedTime, 'days') < 30 ){
    //                     featVids.push(video);
    //                 }
    //
    //                 if (video.stats.plays > 10) {
    //                     popVids.push(video);
    //                 }
    //
    //             });
    //
    //             // Set Local Storage Variables
    //             localStorage.setItem('publicVideos', JSON.stringify(publicVideos));
    //             localStorage.setItem('popVids', JSON.stringify(popVids));
    //             localStorage.setItem('featVids', JSON.stringify(featVids));
    //
    //             console.log( JSON.parse( localStorage.getItem( 'publicVideos' ) ) );
    //             console.log( JSON.parse( localStorage.getItem( 'popVids' ) ) );
    //             console.log( JSON.parse( localStorage.getItem( 'featVids' ) ) );
    //
    //
    //             _this.setState({
    //                 videos: publicVideos,
    //                 mostPopularVideos: popVids,
    //                 featuredVideos: featVids
    //                 })
    //
    //         } else {
    //             console.log(err);
    //         }
    //     });
    // },
    // componentWillMount(){
    //     console.log(this.state.videos);
    //     console.log('These should be public videos' + JSON.parse( localStorage.getItem( 'publicVideos' ) ) );
    //     if(localStorage){
    //         console.log( JSON.parse( localStorage.getItem( 'publicVideos' ) ) );
    //         console.log( JSON.parse( localStorage.getItem( 'popVids' ) ) );
    //         console.log( JSON.parse( localStorage.getItem( 'featVids' ) ) );
    //     } else {
    //         this.apiCall();
    //     }
    // },
    //
    render = () => {

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
                            <h2 className="stack-title"><a href="#" data-text="All"><span>All</span></a></h2>
                            {this.state.videos.map(function(video){

                                return (<VideoPreview title={video.name} description={video.description}  image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
                            })}
                        </div>

                        <div className="stack">
                            <h2 className="stack-title"><a href="#" data-text="Featured"><span>Featured</span></a></h2>
                                {this.state.featuredVideos.map(function(video){

                                    return (<VideoPreview title={video.name} description={video.description} image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
                                })}
                        </div>

                        <div className="stack">
                            <h2 className="stack-title"><a href="#" data-text="Most Popular"><span>Most Popular</span></a></h2>
                                {this.state.mostPopularVideos.map(function(video){

                                    return (<VideoPreview title={video.name} description={video.description} image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
                                })}
                        </div>

                    </div>

                </div>


            </div>
        );
    }
}

Portfolio = connect()(Portfolio)
export default Portfolio;
