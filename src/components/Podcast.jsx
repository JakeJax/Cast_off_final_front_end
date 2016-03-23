var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function Podcast (props) {
  console.log('PODCAST PROPS', props);
  return (<div>
    <h1>PODCAST WORKS</h1>
    <div className='col-sm-8 col-sm-offset-2'>
      {props.podcastInfo.map(function(podcast) {
        return (
          <ListGroup key={podcast.id} >
            <ListGroupItem>id: {podcast.id}</ListGroupItem>
            <ListGroupItem>{podcast.title}</ListGroupItem>
            <ListGroupItem>{podcast.url}</ListGroupItem>
          </ListGroup>
        )
      })}
    </div>
  </div>)
}

module.exports = Podcast;