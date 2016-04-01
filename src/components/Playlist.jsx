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
      <div className="contentContainer">
        <PodcastContainer
          backToPlaylists={this.backToPlaylists}
          setPlaylist={this.props.setPlaylist}
          cusPlaylist={this.props.cusPlaylist}       
          playlistTitle={this.state.podcast.title} 
          playlistId={this.state.podcast.id} 
          playlistImg={this.state.podcast.image} />
          <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
      </div>
    )
  };

  forceRerender = () => {
    this.forceUpdate();
  }

  renderList = () => {
    return (
      <div className="contentContainer">
        <h1>{this.props.moodTitle}</h1>
          {this.props.playlistInfo.map((playlist) => {
            return (
              <div key={playlist.id} className='playlistContainer'>
                <div onClick={() => this.displayPodcasts(playlist)}>
                  <a>
                  <img src={playlist.image}/>
                  <h2>{playlist.title}</h2>
                  <p>{playlist.description}</p></a>
                  <p>Visit their <strong><a href={playlist.link} target="blank">website</a></strong> for more information.</p>
                </div>  
              </div>
            )
          })}
        
        <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
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





