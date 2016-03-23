var React = require('react');
var moodHelpers = require('../utils/moodHelpers.js');
var Mood = require('../components/Mood.jsx');

import { ListGroup, ListGroupItem } from 'react-bootstrap';


var MoodContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      moodInfo: [],
    }
  },
  componentDidMount: function(){
    var that = this;
    moodHelpers.allMoods()
      .then(function (returnedData) {
        console.log('MOODS', returnedData);
        that.setState({
          moodInfo: [returnedData.data[0], returnedData.data[1], returnedData.data[2], returnedData.data[3]]
        })
      })
  },
  render: function () {
    return (
      <Mood
        moodInfo={this.state.moodInfo} />
    )
  }

});



//export default Mood;
module.exports = MoodContainer;