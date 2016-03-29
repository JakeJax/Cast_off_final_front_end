var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function User (props) {
  return (<div>
    <h1>Hello {props.userInfo.name} </h1>
    <div className='col-sm-8 col-sm-offset-2'>
        <ListGroup key={props.userInfo.id} >
          <img src={props.userInfo.image}/>
          <ListGroupItem>{props.userInfo.name}</ListGroupItem>
        </ListGroup>
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

  </div>)
}

module.exports = User;