import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';
import ReactDOM from 'react-dom'

const App = () => (
    <Router history={browserHistory}>{routes}</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
