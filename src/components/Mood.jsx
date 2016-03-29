import React from 'react';
//import PropTypes from React.PropTypes;

import { ReactRouter, Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

//import { ListGroup, ListGroupItem } from 'react-bootstrap';


var Mood = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Moods</h1>
        <div className='col-sm-8 col-sm-offset-2'>
        {this.props.moodInfo.map(function(mood) {
          return (
            <div key={mood.id} >
              <Link to={`/${mood.id}/${mood.title}`} params={{ moodTitle: mood.title }}>
                <ListGroupItem ref="moodId">id: {mood.id}</ListGroupItem>
                <ListGroupItem>{mood.title}</ListGroupItem>
                <img src={mood.image}/>
              </Link>
            </div> 
          )
        })}
      </div>
    </div>)
  }
});


module.exports = Mood;

