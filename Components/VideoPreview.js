import React from 'react';
import ReactPlayer from 'react-player';

var VideoPreview = React.createClass({

    render() {


        return (

            <div className="VideoPreview">

                <div className="item">
                    <div className="item__content">

                        <h3 className="item__title">{this.props.name} <span className="item__date">{this.props.date}</span></h3>
                        <ReactPlayer url={this.props.watchLink} />
                        <div className="item__details">
                            <ul>
                                <li><i className="ion ion-ion-ios-camera-outline"></i><span>{this.props.description}</span></li>
                                <li><i className="ion ion-ios-eye-outline"></i><span>{this.props.plays}</span></li>
                                <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                <li><i className="ion ion-exposure_time"></i><span>{this.props.likes}</span></li>
                                <li><i className="ion ion-ios-bolt-outline"></i><span>80</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});

export default VideoPreview;
