import actions from '../actions/actions.js';


var Vimeo= require('vimeo').Vimeo;
var moment = require('moment');



const defaultProps = {
    clientID: 'a403a67f112f44d9826223d299688cffcdc4c794',
    clientSecret: '4ddwI9d7nHrcRcPlM5UE4YyNTZ9yjCCthnz+9CwY4Hdg5JkaYrOWRu24kgmnq6qmkDXNZ2EejDZ6ZmgmGM6pmMX+m02NeAPx4fty7Dc5rMCwIT1iZ/+T5Goz0xx4aoFV',
    accessToken: '4136be9e66246191c7df6e0f2249ddec'
};

// const getInitialState = {
//         videos: [],
//         mostPopularVideos: [],
//         featuredVideos: []
// };
//

export const videos = (state = [], action) => {
    console.log(action);

    switch (action.type) {
        case 'RECEIVE_VIDEOS':
            return action.data
        default:
            return state
        }

}
