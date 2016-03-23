import React from 'react';
import { Component } from 'react'; // Same as doing React.Component
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Mood extends Component {


  componentWillMount() {
    axios.get('http://localhost:3000/podcasts')
      .then( (response) => {
        this.setState({moods: response.data})
      })
  }

  showMoods = () => {
    return this.state.moods.map( (mood) => {
      return (
        <ListGroup key={mood.id} >
          <ListGroupItem>id: {mood.id}</ListGroupItem>
          <ListGroupItem>{mood.title}</ListGroupItem>
          <ListGroupItem>{mood.image}</ListGroupItem>
        </ListGroup>
      )
    })
  };

  render() {
    return (
      <div>
        <h1>MOOD WORKS!</h1>
        {this.state.moods ? this.showMoods() : ''}
      </div>
    )
  }

}

//export default Mood;
module.exports = Mood;