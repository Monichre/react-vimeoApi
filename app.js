import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute, Link } from 'react-router-dom';

import {connect} from 'react-redux';
import {REQUEST_VIDEOS, RECEIVE_VIDEOS} from './actions/actions.js';
import {videos} from './reducers/reducer.js';
import {Provider, combineReducers} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import apiCall from './services/api.js';

let store = createStore(videos, {}, applyMiddleware(apiCall));




// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, IndexRoute, Link } from 'react-router-dom';
//
// import {connect} from 'react-redux';
// import {REQUEST_VIDEOS, RECEIVE_VIDEOS} from './actions/actions.js';
// import {videos} from './reducers/reducer.js';
// import {Provider, combineReducers} from 'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// import apiCall from './services/api.js';
//
// let store = createStore(combineReducers({
//     videos,
//     routing: routerReducer
// }), {}, applyMiddleware(apiCall));
//
//



// Components
import Home from './Components/Home.js';
import Portfolio from './Components/Portfolio.js';

// Styles
import './public/css/nav.css';



ReactDOM.render((
    <Provider store={store}>

        <BrowserRouter>
            <div className="App">
                <div className="AppChildren">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                </div>
                <div className="component">
                    <button className="cn-button" id="cn-button"><i className="fa fa-anchor" aria-hidden="true"></i></button>
                    <div className="cn-wrapper" id="cn-wrapper">
                        <ul>
                          <li><Link to="/"><i className="ion hide ion-ios-home-outline" aria-hidden="true"></i></Link></li>
                          <li><Link to="/"><i className="ion ion-ios-home-outline" aria-hidden="true"></i></Link></li>
                        //   <li><Link to="/portfolio"><i className="ion ion-android-film" aria-hidden="true"></i></Link></li>
                          <li><Link to="/contact"><i className="ion ion-ios-email-outline" aria-hidden="true"></i></Link></li>
                          <li><Link to="/"><i className="ion hide ion-ios-email-outline" aria-hidden="true"></i></Link></li>
                         </ul>
                    </div>
                    <div id="cn-overlay" className="cn-overlay"></div>
                </div>
            </div>
        </BrowserRouter>
    </Provider>

    ), document.getElementById('root'));
