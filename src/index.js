import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Layout.jsx';
var routes = require('./config/routes.js');

ReactDOM.render(routes, document.getElementById('app'));