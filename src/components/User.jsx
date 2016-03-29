var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function User (props) {
  return (
    <div className="profileContainer">
      <div className='profileContent'>
        <h2>Hello {props.userInfo.name} </h2>
        <img src={props.userInfo.image} className="profPicHolder"/>
        <ListGroup key={props.userInfo.id} >
          <ListGroupItem>{props.userInfo.name}</ListGroupItem>
        </ListGroup>
        <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
      </div>
    </div>
  )
}

module.exports = User;