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
        console.log('MOODS', returnedData);
        var newMoodInfo = [];
        var moodLength = (returnedData.length)
        console.log(moodLength)
        for (var i = 0; i < moodLength; i++) {
           newMoodInfo.push(returnedData[i]);
        };
        that.setState({
          moodInfo: newMoodInfo
        })
      }).catch(function(error) {
        console.log('error', error)
        that.context.router.push('/login')
      })
  },
  // handleClickMood: function (moodid) {
  //   var that = this;
  //   console.log(name, password)
  //   Api.get(`/playlists?moodid=${moodid}`)
  //     .then(function (response) {
  //       console.log(response);
  //       // setLocalStorage(response.token);
  //       // var user = JSON.parse(localStorage.getItem('user'))
  //       // // console.log(JSON.parse(localStorage.getItem('user')).token);
  //       // console.log(user.token);
  //       that.context.router.push(`/mood/${moodid}`)
  //     }).catch(function(error) {
  //     console.log('request failed', error)
  //     that.context.router.push('/mood')
  //   })
  // },
  render: function () {
    return (
      <Mood
        moodInfo={this.state.moodInfo} />
        //onClickMood={this.handleClickMood} />
    )
  }

});



//export default Mood;
module.exports = MoodContainer;


