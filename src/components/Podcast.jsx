import React from 'react';
import Api from '../utils/api.js'
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

var Podcast = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      updated: false
    }
  },

  play: function(podcast){
    this.addToPlaylist(podcast);
    window.setPlayerSrc(podcast.url, podcast.title);
  },

  playAll: function(playlist){
    window.playAllSrc(playlist)

  },

  addToPlaylist: function(podcast){
    window.addPlayerSrc(podcast.url, podcast.title);
  },

  like: function(id){
    var that = this;
    Api.post('likes', { podcastid: id })
      .then(function (response) {
      }).catch(function(error) {
        console.log('request failed', error)
        that.context.router.push('/login')
      })
    this.setState({
      updated: true
    })
      
  },

  unlike: function(id){
    var that = this;
    Api.delete(`likes?podcastid=${id}`)
      .then(function (){
      }).catch(function(error) {
        console.log('request failed', error)
        that.context.router.push('/login')
      })
  },


  userLiked: function(id){
    return this.props.playlistLikes.indexOf(id) > -1;
  },

  likeButton: function(id) {
    var that = this;
    return(
      <button className="btn-primary" onClick={function() {that.like(id)}} >Add to Favourites</button>
    )
  },

  unlikeButton: function(id) {
    var that = this;
    return(
      <button className="btn-primary" onClick={function() {that.unlike(id)}} >Remove from Favourites</button>
    )
  },

  renderPodcasts: function() {
    var that = this;
    return (
      <div>
        <h1>{this.props.playlistTitle}</h1>
        <div className='col-sm-8 col-sm-offset-2'>
        <img src={this.props.image} />
        <button className="btn-primary playAll" onClick={function() {that.playAll(that.props.playlistUrls)}} >Play All</button>
          {this.props.podcastInfo.map(function(podcast) {
            return (
              <div>
                <button className="btn-primary" onClick={function() { that.play(podcast) }} >Play</button>
                {that.userLiked(podcast.id) ? that.unlikeButton(podcast.id) : that.likeButton(podcast.id) }
                <button className="btn-primary" onClick={function() {that.addToPlaylist(podcast)}} >Add to Playlist</button>
                <ListGroup key={podcast.id} >
                  <ListGroupItem>id: {podcast.id}</ListGroupItem>
                  <ListGroupItem>{podcast.title}</ListGroupItem>
                  <ListGroupItem>{podcast.url}</ListGroupItem>
                  <ListGroupItem>{podcast.like_count}</ListGroupItem>
                </ListGroup>
              </div>
            )
          })}
          
        </div>
      </div>
    )
  },







  render: function() {
    return(
      <div>
        {this.state.updated ? this.renderPodcasts() : this.renderPodcasts()}
      </div>
    )

  }
})

module.exports = Podcast;