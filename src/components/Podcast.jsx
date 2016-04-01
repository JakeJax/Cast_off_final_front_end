import React from 'react';
import Api from '../utils/api.js'
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';



function getStoredPlaylist() {
  const listJson = localStorage.getItem('playlist');
  return listJson ? JSON.parse(listJson) : [];
}

var Podcast = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },


  play: function(podcast){
    window.setPlayerSrc(podcast.url, podcast.title);
  },

  playAll: function(playlist){
    window.playAllSrc(playlist)

  },

  addToPlaylist: function(podcast){
    const playlist = getStoredPlaylist().concat(podcast);
    window.updatePlaylist(playlist);
    localStorage.setItem('playlist', JSON.stringify(playlist));
    this.props.setPlaylist(playlist);
    
  },


  removeFromPlaylist: function(podcast) {
    const newPl = this.props.cusPlaylist.slice();
    newPl.splice(newPl.findIndex(pod => pod.id === podcast.id), 1);
    localStorage.setItem('playlist', JSON.stringify(newPl));
    window.updatePlaylist(newPl);
    this.props.setPlaylist(newPl);

  },


  like: function(id){
    var that = this;
    Api.post('likes', { podcastid: id })
      .then(function (response) {
        that.props.updatePodcast();
        console.log(response);
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
        that.props.updatePodcast();
      }).catch(function(error) {
        console.log('request failed', error)
        that.context.router.push('/login')
      })
  },


  userLiked: function(id){
    return this.props.playlistLikes.indexOf(id) > -1;
  },

  inCusPlaylist: function(podcast) {
    return !!this.props.cusPlaylist.filter(function(pod) {
      return pod.id === podcast.id;
    }).length;
  },

  likeButton: function(id) {
    var that = this;
    return(
      <button className="btn btn- btn-primary" onClick={function() {that.like(id)}} >Add to Favourites</button>
    )
  },

  unlikeButton: function(id) {
    var that = this;
    return(
      <button className="btn btn- btn-primary" onClick={function() {that.unlike(id)}} >Remove from Favourites</button>
    )
  },

  renderPodcasts: function() {
    var that = this;
    return (
      <div className="contentContainer">
        <h1>{this.props.playlistTitle}</h1>
        <div className='indPlaylistHolder'>
        <img src={this.props.image} />
        <button className="btn btn-sm btn-primary" onClick={this.props.backToPlaylists} > All Playlists </button>
        <button className="btn btn-sm btn-primary playAll" onClick={function() {that.playAll(that.props.playlistUrls)}} >Play All</button>
          {this.props.podcastInfo.map(function(podcast) {
            return (
              <div key={podcast.id} className="indPlaylist">
                <button className="btn btn- btn-primary" onClick={function() { that.play(podcast) }} >Play</button>
                {that.userLiked(podcast.id) ? that.unlikeButton(podcast.id) : that.likeButton(podcast.id) }
                { that.inCusPlaylist(podcast) ?  <button className="btn btn- btn-primary" onClick={function() {that.removeFromPlaylist(podcast)}} >Remove From Playlist</button> : 
                <button className="btn btn- btn-primary" onClick={function() {that.addToPlaylist(podcast)}} >Add to Playlist</button>}
                  <h3>{podcast.title}</h3>
                  <p>{podcast.like_count}</p>
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
        {this.props.cusPlaylist ? this.renderPodcasts() : this.renderPodcasts()}
      </div>
    )

  }
})

module.exports = Podcast;