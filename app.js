import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { BrowserRouter, Route, IndexRoute, Link } from 'react-router-dom';

// Styles
import styles from './public/css/nav.css';

// Components
import Home from './Components/Home.js';

// Plugins
// import './Components/plugins/imagesloaded.pkgd.min.js';
// import './Components/plugins/anime.min.js';
// import './Components/plugins/modernizr-2.6.2.min.js';
// import './Components/plugins/respond.min.js';
// import './plugins/main.js';




var App = React.createClass({

    render(){

        return (
            <BrowserRouter>
                <div className="App">
                    <div className="AppChildren">
                        <Route exact path="/" component={Home}/>

                    </div>
                    <div className="component">
                        <button className="cn-button" id="cn-button">+</button>
                        <div className="cn-wrapper" id="cn-wrapper">
                            <ul>
                              <li><Link to="/"><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
                              <li><Link to="/portfolio"><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
                              <li><Link to="/"><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
                              <li><Link to="/"><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
                              <li><Link to="/"><i className="fa fa-video-camera" aria-hidden="true"></i></Link></li>
                             </ul>
                        </div>
                        <div id="cn-overlay" className="cn-overlay"></div>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
});

ReactDOM.render((<App />), document.getElementById('root'));
