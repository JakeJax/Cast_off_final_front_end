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
    }
  },
  componentDidMount: function(){
    var that = this;  
    Api.get('user')
      .then(function (returnedData) {
        console.log(returnedData)
        that.setState({
          userInfo: returnedData
        })
        // that.setState({
        //   podcastInfo: [returnedData.data[0], returnedData.data[1], returnedData.data[2]]
        // })



      })
  },
  render: function () {
    return (
      <User
        userInfo={this.state.userInfo} />
    )
  }

});



//export default Mood;
module.exports = UserContainer;