var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function User (props) {
  return (
    <div className="contentContainer">
      <div className="profileContainer">
        <div className='profileContent'>
          <h2>Hello {props.userInfo.name} </h2>
          <img src={props.userInfo.image} className="profPicHolder"/>
          <h3>Favourites</h3>
        </div>
      <div>
        {props.likesInfo.map(function(like) {
            return (
              <div className='likePicContainer'>
                
                <div className="like">
                  <div key={like.id} >
                    <img src={like.image}/>
                    
                  </div>  
                  <div className="title">
                      <p>{like.title}</p>
                    </div>
                </div>
                
              </div>
            )
          })}
      </div>
      <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
    </div>
  </div>)
}

module.exports = User;