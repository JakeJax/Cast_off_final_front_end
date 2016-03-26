var React = require('react');
var Api = require('../utils/api.js');
var ReactRouter = require('react-router');
var Podcast = require('../components/Podcast.jsx');


var PodcastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      podcastInfo: [],
      playlistTitle: '' ,
    }
  },
  componentDidMount: function(){
    var that = this;
    this.setState({
      playlistTitle: this.props.params.playlistTitle
    });
    Api.get(`podcasts?playlistid=${this.props.params.playlistId}`)
      .then(function (returnedData) {
        console.log('PODCASTS', returnedData);
        var newPodInfo = [];
        var playlength = returnedData.length
        for (var i = 0; i < playlength; i++) {
           newPodInfo.push(returnedData[i]);
        };
        that.setState({
          podcastInfo: newPodInfo
        })
      }).catch(function() {
        that.context.router.push('/login')
      })
  },
  render: function () {
    return (
      <Podcast
        podcastInfo={this.state.podcastInfo}
        playlistTitle={this.state.playlistTitle} />
    )
  }

});



//export default Mood;
module.exports = PodcastContainer;