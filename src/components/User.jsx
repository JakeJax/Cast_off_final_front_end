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
    </div>
    <div>
      {props.likesInfo.map(function(like) {
          return (
            <div key={like.id} >
                <ListGroupItem>{like.title}</ListGroupItem>
                <ListGroupItem>{like.url}</ListGroupItem>
                <img src={like.image}/>
            </div> 
          )
        })}
    </div>
    <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
  </div>)
}

module.exports = User;