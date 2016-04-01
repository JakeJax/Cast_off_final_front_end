import React from 'react';
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import a from 'jquery';
import PodcastContainer from '../containers/PodcastContainer.jsx';
import styles from '../styles';
import ReactDOM from 'react-dom';


var Player = React.createClass({

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.musicPlayer));
    var playlist = this.props.playlistUrls;
  },






  render: function() {
    return (
      <div>


        <div className='footer' style={styles.footer}>
          <div id="musicPlayer" ref="musicPlayer">
            <div className="info">CastOff</div>
            <div className="loader">
              <div className="load-progress">
                <div className="play-progress">
                </div>
              </div>
            </div>
            <div className="controls">
              <a className="prev" href="#"><span>Prev</span></a>
              <a className="play" href="#"><span>Play</span></a>
              <a className="pause" href="#"><span>Pause</span></a>
              <a className="next" href="#"><span>Next</span></a>
            </div>
            <audio className="aud">
              <p>Oops, looks like your browser doesnt support HTML 5 audio.</p>
            </audio>
          </div>
        </div>
      </div>
    )
  }


})

module.exports = Player;


