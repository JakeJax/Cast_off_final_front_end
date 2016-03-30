var React = require('react');
// var sessionHelpers = require('../utils/sessionHelpers.js');
var Session = require('../components/Session.jsx');
var Header = require('../components/Header.jsx')
var Api = require('../utils/api.js');



function setLocalStorage(response) {
  return localStorage.setItem('user', JSON.stringify({token: response }));
  // localStorage.getItem('user');
}


var SessionContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },



  componentDidMount: function(){

    if (localStorage.getItem('user')) {
      var token = JSON.parse(localStorage.getItem('user')).token
      this.setState({
        token: token
      })
    }
  },

  renderLoginPage: function (){
    return (
      <Session
        onSubmitLogin={this.handleSubmitLogin} />
    )
  },

  renderLogoutPage: function (){
    var that = this;
    Api.delete('sessions', {token: this.state.token })
      .then(function (response){
        localStorage.removeItem('user');
        debugger
        localStorage.removeItem('playlist');
        that.context.router.push('/login');
      }).catch(function(error) {
        console.log('request failed', error)
        that.context.router.push('/login')
      })

  },

  renderHeader: function(token) {
    return (
      <Header token={token} /> 
    )
  },


  handleSubmitLogin: function (name, password) {
    var that = this;
    Api.post('sessions', { name: name, password: password })
      .then(function (response) {
        setLocalStorage(response.token);
        var user = JSON.parse(localStorage.getItem('user'))
        console.log(user.token);
        that.props.setToken(user.token);
        that.context.router.push('/mood')
      })
      .catch(function(error) {
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





