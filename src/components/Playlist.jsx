import React from 'react';
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PodcastContainer from '../containers/PodcastContainer.jsx';

export default class Playlist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {podcast: null}
  };

  displayPodcasts = (playlist) => {
    this.setState({
      podcast: playlist
    })
  };

  backToPlaylists = () => {
    this.setState({
      podcast: null
    })
  };


  renderPodcast = () => {
    return (
      <div>
        <button className="btn-primary" onClick={this.backToPlaylists} > All Playlists </button>
        <PodcastContainer 
          playlistTitle={this.state.podcast.title} 
          playlistId={this.state.podcast.id} 
          playlistImg={this.state.podcast.image} />
      </div>
    )
  };

  renderList = () => {
    return (
      <div>
        <h1>{this.props.moodTitle}</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          {this.props.playlistInfo.map((playlist) => {
            return (
              <div key={playlist.id} onClick={() => this.displayPodcasts(playlist)}>
                <img src={playlist.image}/>
                <ListGroupItem>{playlist.title}</ListGroupItem>
                <ListGroupItem>{playlist.description}</ListGroupItem>
                <ListGroupItem>{playlist.link}</ListGroupItem>
              </div>  
            )
          })}
        </div>
      </div>
    )
  };

  render() {
    return (
      <div>
        {this.state.podcast ? this.renderPodcast() : this.renderList()}
      </div>)
  }

}





