var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function Mood (props) {
  console.log('MOOD PROPS', props);
  return (<div>
    <h1>MOOD WORKS</h1>
    <div className='col-sm-8 col-sm-offset-2'>
      {props.moodInfo.map(function(mood) {
        return (
          <ListGroup key={mood.id} >
            <ListGroupItem>id: {mood.id}</ListGroupItem>
            <ListGroupItem>{mood.title}</ListGroupItem>
            <ListGroupItem>{mood.image}</ListGroupItem>
          </ListGroup>
        )
      })}
    </div>
  </div>)
}

module.exports = Mood;
