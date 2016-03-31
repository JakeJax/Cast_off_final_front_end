import React from 'react';
//import PropTypes from React.PropTypes;

import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

//import { ListGroup, ListGroupItem } from 'react-bootstrap';


var Mood = React.createClass({
  render: function() {
    return (
      <div className="contentContainer">
        <h1>Moods</h1>
        <div className='moodPicContainer'>
        {this.props.moodInfo.map(function(mood) {
          return (
            <div key={mood.id} className="mood">
              <div>
                <Link to={`/${mood.id}/${mood.title}`} params={{ moodTitle: mood.title }}>
                  <img src={mood.image}/>
                   <div className="name">
                    <h3>{mood.title}</h3>
                  </div>
                </Link>
              </div> 
            </div>
          )
        })}
        <img src="../src/public/images/stars.jpg" alt="" id="homeBg" />
      </div>
    </div>)
  }
});


module.exports = Mood;

