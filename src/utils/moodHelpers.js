var axios = require('axios');

function getMoods() {
  return axios.get('http://localhost:3000/moods');
}

var moodHelpers = {
  allMoods: function() {
    return axios.get('http://localhost:3000/moods');
  }
};

module.exports = moodHelpers;