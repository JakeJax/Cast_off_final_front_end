var React = require('react');
var Api = require('../utils/api.js');
var userHelpers = require('../utils/userHelpers.js');
var User = require('../components/User.jsx');

import { ListGroup, ListGroupItem } from 'react-bootstrap';


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
    Api.get('users')
      .then(function (returnedData) {
        console.log('USER', returnedData);
        that.setState({
          userInfo: [returnedData]
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