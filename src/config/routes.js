var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Layout = require("../components/Layout.jsx");
var Home = require("../components/Index.jsx");
var Mood = require("../components/Mood.jsx");
var MoodContainer = require("../containers/MoodContainer.jsx");
var PodcastContainer = require("../containers/PodcastContainer.jsx");


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='mood' component={MoodContainer} />
      <Route path='podcast' component={PodcastContainer} />
    </Route>
  </Router>
);

module.exports = routes;
