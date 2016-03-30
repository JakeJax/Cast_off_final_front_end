var React = require('react');
// var sessionHelpers = require('../utils/sessionHelpers.js');
var Session = require('../components/Session.jsx');
var Header = require('../components/Header.jsx')
var Api = require('../utils/api.js');



var CustomPlaylist = React.createClass({



  renderCusPlay: function() {
    return (
      <div id="sliderContainer">
        <div id="hidden">
          <ul>
            {this.props.cusPlaylist.map(function(pod) { 
              return (
                <li>{pod.title}</li>
              )
            })}
          </ul>           
        </div>
        <div id="shown">
          <div id="sliderTitle">
            <h4>My Playlist ({this.props.cusPlaylist.length})</h4>
          </div>
        </div>
      </div>
    )
  },



  render: function () {
    return (
      <div>
        {this.renderCusPlay()}
      </div>
    )
  }

});

module.exports = CustomPlaylist;





