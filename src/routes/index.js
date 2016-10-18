import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from '../containers/app'
import Home from '../components/home'
import Queue from '../components/queue'
import About from '../components/about'

export default (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path="/queue" component={Queue} />
        <Route path="/about" component={About} />
    </Route>
);