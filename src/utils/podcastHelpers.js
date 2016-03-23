var axios = require('axios');

function constructHeaders() {
  // var headers = {}
  // if localStorage.get('user')
  // add the authorization header
  // headers.authorization = user.token
  // return headers

}


var podcastHelpers = {
  allPodcasts: function() {
    return axios.get('http://localhost:3000/podcasts');
  }
};

module.exports = podcastHelpers;