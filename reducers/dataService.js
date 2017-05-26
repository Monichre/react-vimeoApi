import actions from '../actions/actions.js';


var Vimeo= require('vimeo').Vimeo;
var moment = require('moment');



    const defaultProps = {
        clientID: 'a403a67f112f44d9826223d299688cffcdc4c794',
        clientSecret: '4ddwI9d7nHrcRcPlM5UE4YyNTZ9yjCCthnz+9CwY4Hdg5JkaYrOWRu24kgmnq6qmkDXNZ2EejDZ6ZmgmGM6pmMX+m02NeAPx4fty7Dc5rMCwIT1iZ/+T5Goz0xx4aoFV',
        accessToken: '4136be9e66246191c7df6e0f2249ddec'
    };

    const getInitialState = {
            videos: [],
            mostPopularVideos: [],
            featuredVideos: []
        };


export default function dataService(state=getInitialState, action){

    switch (action.type){
        case action.REQUEST_VIDEOS:

        return [

            ...state,
            {
                name: action.name
            }

            // apiCall = () => {
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
            //     })
            // }
        ];
        default:
            return state;
    }

}
