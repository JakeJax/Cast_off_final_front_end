import React from 'react';
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

//import { ListGroup, ListGroupItem } from 'react-bootstrap';


var Playlist = React.createClass({
  render: function() {
    //console.log('MOOD PROPS', props);
    return (
      <div>
        <h1>{this.props.moodTitle}</h1>
        <div className='col-sm-8 col-sm-offset-2'>
        {this.props.playlistInfo.map(function(playlist) {
          return (
            <div key={playlist.id} >
              <Link to={`/playlist/${playlist.id}/${playlist.title}`} params={{ playlistTitle: playlist.title }}>
                <ListGroupItem>id: {playlist.id}</ListGroupItem>
                <ListGroupItem>{playlist.title}</ListGroupItem>
                <ListGroupItem>{playlist.description}</ListGroupItem>
                <ListGroupItem>{playlist.link}</ListGroupItem>
                <img src={playlist.image}/>
              </Link>
            </div>  
          )
        })}
      </div>
    </div>)
  }
});

module.exports = Playlist;

