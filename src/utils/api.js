var React = require('react');
var ReactRouter = require('react-router');

var host = 'http://172.46.0.182:3000/';

function constructHeaders() {
  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  if (localStorage.getItem('user')) {
    var user = JSON.parse(localStorage.getItem('user'));
    headers.authorization = user.token;
    return headers;
    // if (that.props.params.moodId) {
    //   headers.moodId = that.props.params.moodId
    //   return headers;
    // } else {
    //   return headers;
    // }
  } else {
    return headers
  }  
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}


function parseJSON(response) {
  return response.json()
}

var sessionHelpers = {
  get: function(url) {
    return fetch(`${host}${url}`, {
      method: 'get',
      headers: constructHeaders()
    })
    .then(checkStatus)
    .then(parseJSON)
  },
  post: function(url, params) {
    return fetch(`${host}${url}`, {
      method: 'post',
      headers: constructHeaders(),
      body: JSON.stringify(params)
    })
    .then(checkStatus)
    .then(parseJSON)
  }
}

module.exports = sessionHelpers;


