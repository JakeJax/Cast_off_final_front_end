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
var UserContainer = require("../containers/UserContainer.jsx")
var SessionContainer = require("../containers/SessionContainer.jsx")
var PlaylistContainer = require("../containers/PlaylistContainer.jsx")


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route name='mood' path='mood' component={MoodContainer} />
        <Route name='mood_page' path="/:moodId/:moodTitle" component={PlaylistContainer}/>
      <Route path="playlist/:playlistId/:playlistTitle" component={PodcastContainer} />
      <Route path='login' component={SessionContainer} />
      <Route path='user' component={UserContainer} />
    </Route>
  </Router>
);

module.exports = routes;
