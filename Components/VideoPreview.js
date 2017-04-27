import React from 'react';
// import '../public/css/portfolio.css';

var VideoPreview = React.createClass({

    render() {


        return (

            <div className="VideoPreview">

                <div className="item">
                    <div className="item__content">
                        <img src="public/css/portfolio/img/type1/1.jpg" alt="img01" />
                        <h3 className="item__title">Hoodie stumptown kitsch <span className="item__date">05/05/2015</span></h3>
                        <div className="item__details">
                            <ul>
                                <li><i className="ion ion-ion-ios-camera-outline"></i><span>Canon PowerShot S95</span></li>
                                <li><i className="ion ion-ios-eye-outline"></i><span>22.5mm</span></li>
                                <li><i className="ion ion-ios-color-wand-outline"></i><span>&fnof;/5.6</span></li>
                                <li><i className="ion ion-exposure_time"></i><span>1/1000</span></li>
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
