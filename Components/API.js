import React from 'react';
var Vimeo= require('vimeo').Vimeo;


var API = React.createClass({

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
                
            } else {
                console.log(err);
            }
        });
    },

    render() {

        return (
            <div>
                {this.state.videos.map(function(video){
                    console.log(video);
                })}
            </div>


        );

    }
});


export default API;
