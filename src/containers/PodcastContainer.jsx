var React = require('react');
var Api = require('../utils/api.js');
var ReactRouter = require('react-router');
var Podcast = require('../components/Podcast.jsx');
var Player = require('../components/Player.jsx');


var PodcastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      podcastInfo: [],
      playlistTitle: '' ,
      playlistUrls: [],
    }
  },
  componentDidMount: function(){
    var that = this;
    this.setState({
      playlistTitle: this.props.playlistTitle
    });
    Api.get(`podcasts?playlistid=${this.props.playlistId}`)
      .then(function (returnedData) {
        var newPodInfo = [];
        var newPlaylistUrls = [];
        var playlength = returnedData.length
        for (var i = 0; i < playlength; i++) {
          var podList = {};
          podList.title = returnedData[i].title;
          podList.url = returnedData[i].url;
          newPodInfo.push(returnedData[i]);
          newPlaylistUrls.push(podList);
        };
        that.setState({
          podcastInfo: newPodInfo,
          playlistUrls: newPlaylistUrls
        })
      }).catch(function() {
        that.context.router.push('/login')
      })
  },
  render: function () {
    return (
      <div>
        <Podcast
          podcastInfo={this.state.podcastInfo}
          playlistTitle={this.state.playlistTitle}
          image={this.props.playlistImg} />

      </div>
    )
  }

});



//export default Mood;
module.exports = PodcastContainer;