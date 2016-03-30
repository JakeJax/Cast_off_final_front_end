import React from 'react';
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PodcastContainer from '../containers/PodcastContainer.jsx';
import Api from '../utils/api.js';


var Header = React.createClass({
  

  getInitialState: function () {
    return {
      token: null
    }
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
    if (localStorage.getItem('user')) {
      var token = JSON.parse(localStorage.getItem('user')).token
      this.setState({
        token: token
      })
    } else {
      this.setState({
        token: null
      })
    }
  },




  logout: function() {
    var that = this;
    Api.delete('sessions')
      .then(function (response){
        localStorage.removeItem('user');
        localStorage.removeItem('playlist');
        that.props.setPlaylist([]);
        that.context.router.push('/login');
        that.props.setToken(null);
      }).catch(function(error) {
        console.log('request failed', error)
        that.context.router.push('/login')
      })
    return(
      this.renderLoggedOutNav()
    )
  },


  renderLoggedOutNav: function() {
    return (
      <ul id="primary" >
        <li className="about span2">
          <Link to={'/'}>
            Home
          </Link>
        </li>
        <li className="about span2">
          <Link to={'login'}>
            Login
          </Link>
        </li>
      </ul>
    )
  },



  renderLoggedInNav: function() {
    var that = this;
    return (
      <ul id="primary" >
        <li className="about span2">
          <Link to={'/'}>
            Home
          </Link>
        </li>
        <li className="about span2">
          <Link to={'user'}>
            Profile
          </Link>
        </li>

        <li className="about span2">
          <Link to={'mood'}>
            Moods
          </Link>
        </li>
        <li className="about span2">
          <a onClick={function() {that.logout()}}>
            Logout
          </a>
        </li>
      </ul>
    )
  },

  render: function() {
    return (
      <div>
        {this.props.token ? this.renderLoggedInNav() : this.renderLoggedOutNav()}
      </div>)
  }

});

module.exports = Header;


