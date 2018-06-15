import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Pace from 'pace-js';
import './stylesheets/pace-theme-loading-bar.scss'
import './stylesheets/animate.scss'
import App from './components/App';
import HerosList from './components/HerosList/HerosList';
// import ComicsList from  './components/ComicsList';
import Hero from './components/Hero/Hero';
const browserHistory = createBrowserHistory();

ReactDOM.render((<Router history={browserHistory}>
  <App>
    <Route exact={true} path="/" component={HerosList}/>
    <Route path='/heros/:heroId' component={Hero}/>
  </App>
</Router>), document.getElementById('root'));
