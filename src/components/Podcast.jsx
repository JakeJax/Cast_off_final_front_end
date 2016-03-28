import React from 'react';
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

var Podcast = React.createClass({
  play: function(podcast){
    window.setPlayerSrc(podcast.url, podcast.title);
  },

  render: function() {
    var that = this;
    return (
      <div>
        <h1>{this.props.playlistTitle}</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          {this.props.podcastInfo.map(function(podcast) {
            return (
              <div>
                <ListGroup key={podcast.id} >
                  <ListGroupItem>id: {podcast.id}</ListGroupItem>
                  <ListGroupItem>{podcast.title}</ListGroupItem>
                  <ListGroupItem>{podcast.url}</ListGroupItem>
                </ListGroup>
                <button className="btn-primary" onClick={function() {that.play(podcast)}} >Play</button>
              </div>
            )
          })}
          <img src={this.props.image} />
        </div>
      </div>
    )
  }
})

module.exports = Podcast;