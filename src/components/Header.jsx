import React from 'react';
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PodcastContainer from '../containers/PodcastContainer.jsx';

export default class Header extends React.Component {


  renderLoggedInNav = () => {
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
          <Link to={'user'}>
            Logout
          </Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderLoggedInNav()}
      </div>)
  }

}