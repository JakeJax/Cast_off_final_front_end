import React from 'react';
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

var Podcast = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.playlistTitle}</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          {this.props.podcastInfo.map(function(podcast) {
            return (
              <ListGroup key={podcast.id} >
                <ListGroupItem>id: {podcast.id}</ListGroupItem>
                <ListGroupItem>{podcast.title}</ListGroupItem>
                <ListGroupItem>{podcast.url}</ListGroupItem>
              </ListGroup>
            )
          })}
          <img src={this.props.image} />
        </div>
      </div>
    )
  }
})

module.exports = Podcast;