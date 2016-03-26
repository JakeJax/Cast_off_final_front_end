var axios = require('axios');

function constructHeaders() {
  // var headers = {}
  // if localStorage.get('user')
  // add the authorization header
  // headers.authorization = user.token
  // return headers

}


var userHelpers = {
  getUser: function() {
    return axios.get('http://localhost:3000/users');
  }
};

module.exports = userHelpers;