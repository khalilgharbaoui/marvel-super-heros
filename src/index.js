import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, IndexRoute, Link} from 'react-router-dom'
import Pace from 'pace-js';
import './stylesheets/pace-theme-loading-bar.scss'
import './stylesheets/animate.scss'
import App from './components/App/App';
import HerosList from './components/HerosList/HerosList';
// import ComicsList from  './components/ComicsList';
import Hero from './components/Hero/Hero';

ReactDOM.render((<Router>
  <App>
    <Route exact={true} path="/" component={HerosList}/>
    <Route path='/heros/:heroId' component={Hero}/>
  </App>
</Router>), document.getElementById('root'));
