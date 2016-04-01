var React = require('react');
var Api = require('../utils/api.js');
var userHelpers = require('../utils/userHelpers.js');
var User = require('../components/User.jsx');


var UserContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      userInfo: [],
      likesInfo: []
    }
  },
  componentDidMount: function(){
    var that = this;  
    Api.get('user')
      .then(function (returnedData) {
        that.setState({
          userInfo: returnedData
        })
      }).catch(function(err) {
        console.error(err);
        that.context.router.push('/login')
      })
    Api.get('likes')
      .then(function (returnedData) {
        var newLikesInfo = [];
        var likesLength = (returnedData.likes.length)
        for (var i = 0; i < likesLength; i++) {
          newLikesInfo.push(returnedData.likes[i]);
        };
        for (var i = 0; i < likesLength; i++) {
          newLikesInfo[i].image = returnedData.likeImages[i]
        };
        that.setState({
          likesInfo: newLikesInfo
        })
      }).catch(function(err) {
        console.error(err);
        that.context.router.push('/login')




      })
  },
  render: function () {
    return (
      <User
        userInfo={this.state.userInfo} 
        likesInfo={this.state.likesInfo}   />
    )
  }

});



//export default Mood;
module.exports = UserContainer;