var React = require('react');
// var sessionHelpers = require('../utils/sessionHelpers.js');
var Session = require('../components/Session.jsx');
var Api = require('../utils/api.js');

function setLocalStorage(response) {
  return localStorage.setItem('user', JSON.stringify({token: response }));
  // localStorage.getItem('user');
}


var SessionContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSubmitLogin: function (name, password) {
    var that = this;
    console.log(name, password)
    Api.post('sessions', { name: name, password: password })
      .then(function (response) {
        //console.log(response);
        //console.log(response.token);
        setLocalStorage(response.token);
        var user = JSON.parse(localStorage.getItem('user'))
        //console.log(JSON.parse(localStorage.getItem('user')).token);
        console.log(user.token);
        that.context.router.push('/mood')
      }).catch(function(error) {
      console.log('request failed', error)
      that.context.router.push('/login')
    })
  },
  render: function () {
    return (
      <Session
        onSubmitLogin={this.handleSubmitLogin} />
    )
  }

});

module.exports = SessionContainer;