var React = require('react');
var Api = require('../utils/api.js');
var ReactRouter = require('react-router');
var Playlist = require('../components/Playlist.jsx');


var PlaylistContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      playlistInfo: [],
      moodTitle: '' ,
    }
  },
  componentDidMount: function(){
    var that = this;
    this.setState({
      moodTitle: this.props.params.moodTitle
    });

    Api.get(`playlists?moodid=${this.props.params.moodId}`)
      .then(function (returnedData) {
        console.log('PLAYLIST', returnedData);
        var newPlayInfo = [];
        var playlength = returnedData.playlists.length
        for (var i = 0; i < playlength; i++) {
           newPlayInfo.push(returnedData.playlists[i]);
        };
        that.setState({
          playlistInfo: newPlayInfo,
        })
      }).catch(function() {
        that.context.router.push('/login')
      })
  },
  render: function () {
    return (
      <Playlist
        playlistInfo={this.state.playlistInfo}
        moodTitle={this.state.moodTitle} />
    )
  }

});

module.exports = PlaylistContainer;





