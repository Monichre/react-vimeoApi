import React from 'react';
import ReactPlayer from 'react-player';

class VideoPreview extends React.Component{

    render() {
        return (
            <div className="VideoPreview">
                <div className="item">
                    <div className="item__content">
                        <h3 className="item__title">{this.props.name}</h3>
                        <ReactPlayer url={this.props.watchLink} />
                        <div className="item__details">
                            <ul>
                                <li className="sublist-trigger"><i className="ion ion-navicon"></i>
                                        <ul className="item__sublist">
                                            <li><i className="ion ion-wand"></i><span>{this.props.description}</span></li>
                                            <li><i className="ion ion-eye"></i><span>{this.props.plays}</span></li>
                                            <li><i className="ion ion-thumbsup"></i><span>{this.props.likes}</span></li>
                                            <li><i className="ion ion-clock"></i><span><span className="item__date">{this.props.date}</span></span></li>
                                        </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPreview;
