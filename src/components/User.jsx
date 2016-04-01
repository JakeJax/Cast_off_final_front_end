var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import { ListGroup, ListGroupItem } from 'react-bootstrap';


var User = React.createClass({
  play: function(podcast){
      window.setPlayerSrc(podcast.url, podcast.title);
  },

  render: function() {
    var that = this;
    return (
      <div className="contentContainer">
        <div className="profileContainer">
          <div className='profileContent'>
            <h2>Hello {this.props.userInfo.name} </h2>
            <img src={this.props.userInfo.image} className="profPicHolder"/>
            <h3>Favourites</h3>
          </div>
        <div>
          {this.props.likesInfo.map(function(like) {
            return (
              <div key={like.id} className='likePicContainer'>
                <div className="like">
                  <div key={like.id} >
                    <img src={like.image}/>
                  </div>  
                  <div className="title">
                    <p>{like.title}</p>
                  </div>
                  <button id="likePlay" className="btn btn- btn-primary" onClick={function() { that.play(like) }} >Play</button>

                </div>

              </div>
            )
            })}
        </div>
        <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
      </div>
    </div>
    )
  }
  
})

module.exports = User;

