import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { BrowserRouter, Route, IndexRoute, Link } from 'react-router-dom';

// Components
import Home from './Components/Home.js';
import Portfolio from './Components/Portfolio.js';

// Styles
import './public/css/nav.css';

// Data
// var Videos = require('./API.js').videos;
// console.log(videos);


ReactDOM.render((

    <BrowserRouter>
        <div className="App">
            <div className="AppChildren">
                <Route exact path="/" component={Home}/>
                <Route path="/portfolio" component={Portfolio}/>

            </div>
            <div className="component">
                <button className="cn-button" id="cn-button"><i className="fa fa-anchor" aria-hidden="true"></i></button>
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

    ), document.getElementById('root'));
