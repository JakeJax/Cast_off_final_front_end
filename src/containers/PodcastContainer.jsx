var React = require('react');
var podcastHelpers = require('../utils/podcastHelpers.js');
var Podcast = require('../components/Podcast.jsx');

import { ListGroup, ListGroupItem } from 'react-bootstrap';


var PodcastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      podcastInfo: [],
    }
  },
  componentDidMount: function(){
    var that = this;
    podcastHelpers.allPodcasts()
      .then(function (returnedData) {
        console.log('PODCASTS', returnedData);
        var newPodInfo = [];
        var playlength = returnedData.data.length
        for (var i = 0; i < playlength; i++) {
           newPodInfo.push(returnedData.data[i]);
        };
        that.setState({
          podcastInfo: newPodInfo
        })
        // that.setState({
        //   podcastInfo: [returnedData.data[0], returnedData.data[1], returnedData.data[2]]
        // })



      })
  },
  render: function () {
    return (
      <Podcast
        podcastInfo={this.state.podcastInfo} />
    )
  }

});



//export default Mood;
module.exports = PodcastContainer;