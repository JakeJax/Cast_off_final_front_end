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
      playlistLikes: [],
    }
  },

  updatePodcast: function() {
    var that = this;
    Api.get(`likes?playlistid=${this.props.playlistId}`).then(function (returnedData) {
     //console.log(returnedData);
      var newLikeList = returnedData.map( function(like){
        return like.id;
      });
      that.setState({
          playlistLikes: newLikeList
        })
    }).catch(function() {
        that.context.router.push('/login')
      })
  },




  componentDidMount: function() {
    var that = this;
    this.setState({
      playlistTitle: this.props.playlistTitle
    });
    Api.get(`podcasts?playlistid=${this.props.playlistId}`)
      .then(function (returnedData) {
        console.log(returnedData);
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
    Api.get(`likes?playlistid=${this.props.playlistId}`).then(function (returnedData) {
      console.log(returnedData);
      var newLikeList = returnedData.map( function(like){
        return like.id;
      });
      that.setState({
          playlistLikes: newLikeList
        })
    }).catch(function() {
        that.context.router.push('/login')
      })
  },
  render: function () {
    return (
      <div>
        <Podcast
          updatePodcast={this.updatePodcast}
          rerenderParent={this.props.rerenderParent}
          podcastInfo={this.state.podcastInfo}
          playlistTitle={this.state.playlistTitle}
          playlistLikes={this.state.playlistLikes}
          image={this.props.playlistImg}
          playlistUrls={this.state.playlistUrls} />

      </div>
    )
  }

});



//export default Mood;
module.exports = PodcastContainer;