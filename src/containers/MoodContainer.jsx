var React = require('react');
var Api = require('../utils/api.js');
var Mood = require('../components/Mood.jsx');



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
    Api.get('moods')
      .then(function (returnedData) {
        var newMoodInfo = [];
        var moodLength = (returnedData.length)
        console.log(moodLength)
        for (var i = 0; i < moodLength; i++) {
           newMoodInfo.push(returnedData[i]);
        };
        that.setState({
          moodInfo: newMoodInfo
        })
      })
      .catch(function(error) {
        console.log('error', error)
        that.context.router.push('/login')
      })
  },
  
  render: function () {
    return (
      <Mood
        moodInfo={this.state.moodInfo} />
    )
  }

});



module.exports = MoodContainer;


