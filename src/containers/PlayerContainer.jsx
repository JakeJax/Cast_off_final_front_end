import React from 'react';
import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PodcastContainer from '../components/Player.jsx';
import $ from 'jquery';

export default class PlayerContainer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {playlist: this.state.playlistUrls}
    };



  renderPlaylist = () => {
    return (
      <div>
        <script type="text/javascript">
          $(document).ready(function() {

            var aud = $('#musicPlayer .aud').get(0);
            aud.pos = -1;

            $('#musicPlayer .play').bind('click', function(e) {
              e.preventDefault();
              if (aud.pos < 0) {
                $('#musicPlayer .next').trigger('click');
              } else {
                aud.play();
              }
            });

            $('#musicPlayer .pause').bind('click', function(e) {
              e.preventDefault();
              aud.pause();
            });

            $('#musicPlayer .next').bind('click', function(e) {
              e.preventDefault();
              aud.pause();
              aud.pos++;
              if (aud.pos == this.state.playlist.length) aud.pos = 0;
              aud.setAttribute('src', this.state.playlist[aud.pos].url);
                                $('#musicPlayer .info').html(this.state.playlist[aud.pos].title);
              aud.load();
            });

            $('#musicPlayer .prev').bind('click', function(e) {
              e.preventDefault();
              aud.pause();
              aud.pos--;
              if (aud.pos < 0) aud.pos = playlist.length - 1;
              aud.setAttribute('src', playlist[aud.pos].url);
                                $('#musicPlayer .info').html(playlist[aud.pos].title);
              aud.load();
            });

            aud.addEventListener('progress', function(e) {
              var width = parseInt($('#musicPlayer').css('width'));
              var percentLoaded = Math.round(e.loaded / e.total * 100);
              var barWidth = Math.ceil(percentLoaded * (width / 100));
              $('#musicPlayer .load-progress').css( 'width', barWidth );
            });

            aud.addEventListener('timeupdate', function(e) {
              var width = parseInt($('#musicPlayer').css('width'));
              var percentPlayed = Math.round(aud.currentTime / aud.duration * 100);
              var barWidth = Math.ceil(percentPlayed * (width / 100));
              $('#musicPlayer .play-progress').css( 'width', barWidth);
            });

            aud.addEventListener('canplay', function(e) {
              $('#musicPlayer .play').trigger('click');
            });

            aud.addEventListener('ended', function(e) {
              $('#musicPlayer .next').trigger('click');
            });


            $('#musicPlayer .info').html(playlist[0].title);

            $('.loader').bind('click', function (e) {
              var $div = $(e.target);
              var $loader = $div.find('.load-progress');
              var $loadBar = $('.loader');

              var offset = $div.offset();
              var x = e.clientX - offset.left;
              // console.log(x, $loadBar.width(), aud.duration)
              // console.log(x/$loadBar.width()*aud.duration)
              aud.currentTime = x/$loadBar.width()*aud.duration
              aud.play();

              $('.play-progress').width(x);
            </script>
            <Player />
          </div>
        });

      });
    )
  }

  render() {
    return (
      <div>
        {this.renderPlaylist()}
      </div>)
  }

}