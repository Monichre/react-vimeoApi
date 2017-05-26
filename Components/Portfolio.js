import React from 'react';
// import {connect} from 'react-redux';
import REQUEST_VIDEOS from '../actions/actions.js';
import Provider from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import dataService from '../reducers/dataService.js';

// Packages
let store = createStore(dataService);


var Vimeo= require('vimeo').Vimeo;
var moment = require('moment');

// Styles
import '../public/css/portfolio/css/flickity.css';
import '../public/css/portfolio/css/portfolio-alternate.css';
import '../public/css/nav.css';

// Sub-Components
import VideoPreview from './VideoPreview.js';


class Portfolio extends React.Component {

    componentWillMount() {
        console.log("component will mount");
        store.dispatch({type:'REQUEST_VIDEOS'});
    }
    componentDidMount(){

        if(localStorage.length) {

            console.log(localStorage);
        }else {
            console.log('Im dispatching the get videos action');

            var data = store.getState();

            this.setState({
                data: data
            }, function(){
                console.log(data);
            });
        }
    }
    componentWillUpdate(){
        // console.log(component will uupdate);
    }
    render () {
        return (
            <Provider store={store}>

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
                                {this.state.data.videos.map(function(video){

                                    return (<VideoPreview title={video.name} description={video.description}  image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
                                })}
                            </div>

                            <div className="stack">
                                <h2 className="stack-title"><a href="#" data-text="Featured"><span>Featured</span></a></h2>
                                    {this.state.data.featuredVideos.map(function(video){

                                        return (<VideoPreview title={video.name} description={video.description} image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
                                    })}
                            </div>

                            <div className="stack">
                                <h2 className="stack-title"><a href="#" data-text="Most Popular"><span>Most Popular</span></a></h2>
                                    {this.state.data.mostPopularVideos.map(function(video){

                                        return (<VideoPreview title={video.name} description={video.description} image={video.pictures.sizes[3].link} date={video.created_time} plays={video.stats.plays} likes={video.metadata.connections.likes.total} watchLink={video.link}/>);
                                    })}
                            </div>

                        </div>

                    </div>


                </div>
            </Provider>
        );


    }

}

export default Portfolio;
