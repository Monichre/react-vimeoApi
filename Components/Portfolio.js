import React from 'react';
import {dispatch, connect} from 'react-redux';
import {sendRequestVideosDispatch, sendReceiveVideosDispatch} from '../actions/actions.js';
import {videos} from '../reducers/reducer.js';
import Provider from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import apiCall from '../services/api.js';

// Packages
// let store = createStore(apiCall, {}, applyMiddleware(apiCall));

// Styles
import '../public/css/portfolio/css/flickity.css';
import '../public/css/portfolio/css/portfolio-alternate.css';
import '../public/css/nav.css';

// Sub-Components
// import VideoPreview from './VideoPreview.js';


class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            mostPopularVideos: [],
            featuredVideos: []
        };
    }

    componentWillMount() {
        console.log("component will mount");

    }
    componentDidMount(){

        if(localStorage.length) {

            console.log(localStorage);
        }else {
            sendRequestVideosDispatch;
            console.log('Im dispatching the get videos action');

            // this.setState({
            //     videos: data.videos,
            //     mostPopularVideos: data.mostPopularVideos,
            //     featuredVideos: data.featuredVideos
            // }, function(){
            //     console.log(videos, mostPopularVideos, featuredVideos);
            // });
        }
    }
    componentWillUpdate(){
        // console.log(component will uupdate);
    }
    render () {
        return (
            // <Provider store={store}>

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

                            </div>

                            <div className="stack">
                                <h2 className="stack-title"><a href="#" data-text="Featured"><span>Featured</span></a></h2>

                            </div>

                            <div className="stack">
                                <h2 className="stack-title"><a href="#" data-text="Most Popular"><span>Most Popular</span></a></h2>

                            </div>

                        </div>

                    </div>


                </div>
            // </Provider>
        );

    }

}

export default Portfolio;

//
//
// {this.state.videos.map(function(video){
//
//     return (<VideoPreview title={video.name} description={video.description}  image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
// })}
// {this.state.featuredVideos.map(function(video){
//
//         return (<VideoPreview title={video.name} description={video.description} image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
//     })}
// {this.state.mostPopularVideos.map(function(video){
//
//         return (<VideoPreview title={video.name} description={video.description} image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
//     })}
